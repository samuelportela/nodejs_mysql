create database store;

create table customers (
    id int not null auto_increment,
    full_name varchar(255),
    email varchar(255),
    primary key (id)
);

create table products (
    id int not null auto_increment,
    name varchar(255),
    price decimal(12, 2),
    stock int,
    primary key (id)
);

create table orders (
    id int not null auto_increment,
    user_id int not null,
    product_id int not null,
    quantity int not null,
    primary key (id)
);

insert into customers (full_name, email) VALUES ("Customer 1", "customer1@email.com");
insert into products (name, price, stock) VALUES ("Laptop", 799.90, 5);
insert into orders (user_id, product_id, quantity) VALUES (1, 1, 5);
