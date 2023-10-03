create table alumno(
 id int(11) not null auto_increment,
 nombres varchar(200) not null,
 apellidos varchar(200) not null,
 dni varchar(8) not null,
 email varchar(100),
 telefono varchar(100),
 primary key(id)
);

alter table alumno
add column pais varchar(100) default 'Perú';