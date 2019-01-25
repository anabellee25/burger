### Schema

-- CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
    devoured BOOL NOT NULL DEFAULT TRUE,
	PRIMARY KEY (id)
);

SELECT*FROM burgers;
