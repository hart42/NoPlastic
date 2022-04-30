create database NoPlastic;

drop table if exists usuarios;

create table usuarios (
	id serial primary key,
  nome varchar(255) not null,
  email text unique not null,
  telefone text not null,
  cidade text not null,
  estado varchar(3) not null,
  senha text unique not null,
  carteira integer not null default 0
);
