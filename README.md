## Backend (PHP)

### Como Rodar
1. Certifique-se de ter o Docker Instalado
2. Executar os comandos  a seguir para rodar o Dockerfile, dentro da pasta backend:

```
docker build --tag 'backend_teste_tecnico' .
```
```
docker run -p 8080:8080 backend_teste_tecnico
```
