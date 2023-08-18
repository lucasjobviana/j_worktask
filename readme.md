Lista de Tarefas - Full Stack Project.

Link: https://lucasjobviana.github.io/j_worktask

Tecnologias:
    Front: React e ContextAPI.
    Back: Node com express.
    Banco de dados: Mysql.

Para rodar o projeto:

    Na pasta raiz: 
    -   docker-compose -build
    -   docker-compose up
    
Para acessar:

    Front-End: 
    -   172.20.0.10:5173
    Back-End: 
    -   172.20.0.11:3000
    Mysql: 
    -   172.20.0.12:3306


O front usa o localstorage como armazenamento padrão, para usar o mysql, sete a variável usingBD dentro do ControlPanelProvider.jsx.

A funcionalidade de pesquisar ainda não esta implementada.
