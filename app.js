const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const promBundle = require("express-prom-bundle");
app.use(bodyParser.json());

//  параметры в промежуточное ПО Prometheus, большинство параметров предназначены для метрики гистограммы http_request_duration_seconds
// дока https://www.npmjs.com/package/express-prom-bundle
const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  customLabels: {
    project_name: "basic-prometheus",
    project_type: "test_metrics_labels",
  },
  promClient: {
    collectDefaultMetrics: {},
  },
});
app.use(metricsMiddleware);
const data = []; // Массив для тестов

app.get("/", (req, res) => {
  res.json({ data: data });
});

app.get("/random/:count", (req, res) => {
  const count = req.params.count;
  for (let i = 0; i < count; i++) {
    data.push({
      id: Math.random(),
      name: "Name " + Math.random(),
      age: Math.floor(Math.random() * 100),
    });
  }
  res.json({ data: data });
});

app.post("/", (req, res) => {
  data.push(req.body);
  res.json({ data: data });
});

app.delete("/", (req, res) => {
  data.pop();
  res.json({ data: data });
});

app.put("/:index", (req, res) => {
  const index = req.params.index;
  data[index] = req.body;
  res.json({ data: data });
});

app.delete("/all", (req, res) => {
  data.length = 0;
  res.json({ data: data });
});

app.listen(80, () => {
  console.log("Server is running on port 80");
});
