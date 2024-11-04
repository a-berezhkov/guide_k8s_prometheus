## Создание Docker-образа
## Build 

```
docker build --tag basic-express  --platform linux/amd64 .
```

## Run 

```
docker run --name container-basic-express -p 80:80 -d  basic-express
```

или

```
docker compose up --build
```

Приложение работает на  http://localhost:80
