DROP DATABASE IF EXISTS j_worktask_db;

CREATE DATABASE j_worktask_db;

USE j_worktask_db;

CREATE TABLE status_task (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    descrition VARCHAR(150) NULL,
    CONSTRAINT pk_id_status_task PRIMARY KEY (id),
    CONSTRAINT uq_name_status_task UNIQUE (name)
);

CREATE TABLE status_work (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    descrition VARCHAR(150) NULL,
    CONSTRAINT pk_id_status_work PRIMARY KEY (id),
    CONSTRAINT uq_name_status_work UNIQUE (name)
);

CREATE TABLE visibility (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    descrition VARCHAR(150) NULL,
    CONSTRAINT pk_id_visibility PRIMARY KEY (id),
    CONSTRAINT uq_name_visibility UNIQUE (name)
);

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    nickname varchar(30) NOT NULL,
    email VARCHAR(50) NULL,
    password_hash VARCHAR(100) NOT NULL,
    descrition VARCHAR(150) NULL,
    CONSTRAINT pk_id_user PRIMARY KEY (id),
    CONSTRAINT uq_name_user UNIQUE (name),
    CONSTRAINT uq_nickname_user UNIQUE (nickname)
);

CREATE TABLE work (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    descrition VARCHAR(300) NULL,
    id_user INT NULL,
    id_visibility INT DEFAULT 1,
    CONSTRAINT pk_id_work PRIMARY KEY (id),
    CONSTRAINT fk_work_user FOREIGN KEY (id_user) REFERENCES user(id),
	CONSTRAINT fk_work_visibility FOREIGN KEY (id_visibility) REFERENCES visibility(id)
);

CREATE TABLE task (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    checked INT DEFAULT 3,
    id_work INT NOT NULL,
    id_Assigned_user INT NULL,
    id_parentTask INT NULL DEFAULT NULL,
    descrition varchar(300) NULL,
    CONSTRAINT pk_id_task PRIMARY KEY (id),
    CONSTRAINT fk_task_work FOREIGN KEY (id_work) REFERENCES work(id), 
    CONSTRAINT fk_task_user FOREIGN KEY (id_assigned_user) REFERENCES user(id),
    CONSTRAINT fk_task_parentTask FOREIGN KEY (id_parentTask) REFERENCES task(id)
);

CREATE TABLE _statustask_ (
	id_status INT NOT NULL,
    id_task INT NOT NULL,
    date_time DATETIME NULL,
    CONSTRAINT fk_statustask_status FOREIGN KEY (id_status) REFERENCES status_task(id), 
    CONSTRAINT fk_statustask_task FOREIGN KEY (id_task) REFERENCES task(id)
);

CREATE TABLE _statuswork_ (
	id_status INT NOT NULL,
    id_work INT NOT NULL,
    date_time DATETIME NULL,
    CONSTRAINT fk_statuswork_status FOREIGN KEY (id_status) REFERENCES status_work(id), 
    CONSTRAINT fk_statuswork_work FOREIGN KEY (id_work) REFERENCES work(id)
);


insert into status_work(name) values('Contrução');
insert into status_work(name) values('Iniciado');
insert into status_work(name) values('Pausado');
insert into status_work(name) values('Finalizado');
insert into status_task(name) values('Criada');
insert into status_task(name) values('Atribuida');
insert into status_task(name) values('Finalizada');
insert into status_task(name) values('Aprovada');
insert into status_task(name) values('Rejeitada');
insert into user(name,nickname,email,password_hash) values('DEMO','DEMO', 'DEMO@gmail.com', 'DEMO');
insert into visibility(name,descrition) values('Privado','Somente o criador podera ver.');
insert into visibility(name,descrition) values('Publico','Todos poderão ver.');
insert into visibility(name,descrition) values('Rede','Todos da sua rede poderão ver.');
insert into visibility(name,descrition) values('Seleto','Grupo selecionado de pessoas poderão ver.');
insert into work(id_visibility,id_user,name,descrition) values(1,1,'Sistema de cadastro.','Criar um sistema para cadastro de lista de tarefas usando node para o backend e react para o front.');
insert into work(id_visibility,id_user,name,descrition) values(1,1,'Landing Page Iphone.','Criar uma landing page para o iphone 14.');
insert into work(id_visibility,id_user,name,descrition) values(1,1,'App de receitas.','Criar um aplicativo mostre receitas de comidas e bebidas para os usuários.');
 
 

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Criar front-end da aplicação', 1, 1, 'Criar front-end da aplicação utilizando react.');
INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Criar back-end da aplicação', 1, 1, 'Criar back-end da aplicação utilizando node-express.');
INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Criar testes unitários para a aplicação', 1, 1, 'Criar testes para a aplicação.');




-- Inserindo tarefas relacionadas ao trabalho "Landing Page Iphone"
INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Definir layout da landing page', 2, 1, 'Definir o layout e a estrutura da landing page.');





INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Testar a página em dispositivos móveis', 2, 1, 'Realizar testes em diferentes dispositivos móveis para garantir a responsividade.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Otimizar o desempenho da página', 2, 1, 'Otimizar o carregamento e desempenho da página para uma melhor experiência do usuário.');


-- Inserindo tarefas relacionadas ao trabalho "App de receitas"
INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Definir escopo do aplicativo', 3, 1, 'Definir os recursos e funcionalidades que o aplicativo terá.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Criar a interface do aplicativo', 3, 1, 'Criar a interface do aplicativo utilizando ferramentas de design.');



INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Implementar funcionalidade de salvar receitas', 3, 1, 'Permitir que os usuários salvem suas receitas favoritas.');



INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Realizar ajustes com base no feedback', 3, 1, 'Fazer ajustes e melhorias com base no feedback dos usuários.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Preparar o lançamento do aplicativo', 3, 1, 'Preparar o lançamento oficial do aplicativo para o público.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Lançar o aplicativo', 3, 1, 'Realizar o lançamento oficial do aplicativo na loja de aplicativos.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Acompanhar o desempenho do aplicativo', 3, 1, 'Acompanhar o desempenho do aplicativo após o lançamento.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Implementar novas funcionalidades', 3, 1, 'Adicionar novas funcionalidades e melhorias ao aplicativo.');

INSERT INTO task (name, id_work, id_assigned_user, descrition)
VALUES ('Manter e atualizar o aplicativo', 3, 1, 'Realizar manutenção contínua e atualizações do aplicativo.');




-- DROP PROCEDURE IF EXISTS getWorkStatisticsById;
--  DELIMITER //

-- DELIMITER $$ 

-- CREATE PROCEDURE getWorkStatisticsById(IN work_id INT)
-- BEGIN
--     SELECT 
--     w.id,
--     w.name, 
--     w.descrition,
--     (SELECT COUNT(*) FROM task WHERE id_work = w.id) AS task_count,
--     (SELECT COUNT(*) FROM task 
--     INNER JOIN _statustask_ st ON st.id_task = task.id
--     WHERE id_work = w.id) AS finaly_task_count
-- FROM 
--     work w
-- WHERE
--     w.id = work_id;
-- END$$
-- DELIMITER ;



INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Criar interface responsiva para o front-end', 1, 1, 1, 'Criar um layout responsivo para a aplicação utilizando css puro.');

INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Criar seção de produtos', 2, 1, 4, 'Criar a seção de produtos para exibir os modelos de iPhone.');
INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Adicionar animações', 2, 1, 5, 'Adicionar animações interativas para tornar a página mais atraente.');
INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Implementar funcionalidade de busca de receitas', 3, 1, 9, 'Permitir que os usuários busquem receitas por ingredientes ou nome.');
INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Adicionar seção de receitas populares', 3, 1, 10, 'Mostrar uma lista de receitas populares para os usuários.');
INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Adicionar compartilhamento de receitas', 3, 1, 12, 'Adicionar opção para os usuários compartilharem receitas com amigos.');
INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Adicionar compartilhamento de receitas', 3, 1, 12, 'Adicionar opção para os usuários compartilharem receitas com amigos.');
INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Adicionar compartilhamento de receitas', 3, 1, 22, 'Adicionar opção para os usuários compartilharem receitas com amigos.');



INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Testar o aplicativo em diferentes dispositivos', 3, 1, 13, 'Realizar testes em dispositivos móveis e tablets para garantir a compatibilidade.');

INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition)
VALUES ('Otimizar o desempenho do aplicativo', 3, 1, 14, 'Otimizar o carregamento e desempenho do aplicativo para uma experiência suave.');

INSERT INTO task (name, id_work, id_assigned_user, id_parentTask, descrition,checked)
VALUES ('Realizar testes de usabilidade', 3, 1, 15, 'Conduzir testes de usabilidade para obter feedback dos usuários.',4);



INSERT INTO _statustask_ (id_status,id_task) values(1,26);
INSERT INTO _statustask_ (id_status,id_task) values(2,26);
INSERT INTO _statustask_ (id_status,id_task) values(3,26);
INSERT INTO _statustask_ (id_status,id_task) values(4,26);
INSERT INTO _statustask_ (id_status,id_task) values(5,26) ;
insert into _statustask_(id_status,id_task) values(3,1);



