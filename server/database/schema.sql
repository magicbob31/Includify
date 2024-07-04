create database hackathon;

create table user (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  username varchar(255) not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);
