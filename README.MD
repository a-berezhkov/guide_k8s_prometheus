## Endpoints 

- GET http://localhost - все записи массива
- POST http://localhost + {body} - добавить запись
- PUT  http://localhost/:index + {body}- обновить запись по индексу 
- DELETE  http://localhost/:index - удалить последнюю
- DELETE  http://localhost/all - удалить все
- GET http://localhost/random/:count - сгенерить случайно количество записей 

## Как развернуть k8s + Dashboard + prometheus

[Мануал полный](./docs/metrics.md)
[Установка minicube](./docs/minicube.md)
[Сборка Docker-контейнера](./docs/docker.md)