CREATE DATABASE IF NOT EXISTS Zoo;

USE Zoo;

CREATE TABLE Gerentes (
    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Cuidadores (
    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerentes(gerente_id)
    );
    
CREATE TABLE Animais (
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(20) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE Cuidados (
    cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores(cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES Animais(animal_id)
);
