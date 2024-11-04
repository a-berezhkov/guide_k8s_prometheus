# K8S

## Ставим `minicube` и `kubectl`

Установка `minicube` для создания одного узла (включает в себя `kubectl`)
https://kubernetes.io/ru/docs/tasks/tools/install-minikube/

Установка `kubectl` отдельно (рекомендуется) https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/

Стартуем `minicube` (`Docker` должен быть запущен)

```
minikube start
```

Для удобства работы зададим `alias` 

```
alias k=kubectl
```

## Основные команды 

```
k get pods # посмотреть все pods
k delete pod <pod_name> # удалить pod
k get namespaces # посмотреть пространства
k delete namespaces <namespace_name> # удалить пространство
k get pods --namespace=<namespace_name> # посмотреть pods в пространстве 
minikube ssh # подключиться к minicube # к примеру, что бы посмотреть внутренний Docker
```

 