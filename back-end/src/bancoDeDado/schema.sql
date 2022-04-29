create database NoPlastic;

drop table if exists usuarios;

create table usuarios (
	id serial primary key,
  	nome varchar(255) not null,
  	cpf varchar(15) unique not null,
    email text unique not null,
    endereco text not null,
    carteira integer not null default 0
);
