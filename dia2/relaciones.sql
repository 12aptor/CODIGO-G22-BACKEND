-- RELACIONES
CREATE TABLE `alumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `pais` varchar(100) DEFAULT 'Perú',
  PRIMARY KEY (`id`)
)

insert into alumno(nombres,apellidos,dni)
values ('César','Mayta','12345678');

insert into alumno(nombres,apellidos,dni,pais)
values('Ana','Martinez','8998833','Colombia');

insert into alumno(nombres,apellidos,dni)
values 
('Jorge','Lopez','111'),
('Luisa','Fernandez','222'),
('Carlos','Torres','333'),
('Anibal','Guzman','444'),
('Pedro','Tudela','555'),
('Vanessa','Flores','666'),
('Armando','Corrales','777'),
('Sofia','Lopez','888');

create table nota(
	id int(11) not null primary key auto_increment,
	alumno_id int(11) not null,
	curso varchar(100),
	nota double default 0,
	foreign key(alumno_id) references alumno(id)
);

insert into nota(alumno_id,curso,nota)
values
(1,'PYTHON',20),(1,'FLASK',15),(1,'MYSQL',18),
(2,'PYTHON',14),(2,'FLASK',10),(2,'MYSQL',17),
(3,'PYTHON',12),(3,'FLASK',11),(3,'MYSQL',16),
(4,'PYTHON',20),(4,'FLASK',15),(4,'MYSQL',15),
(5,'PYTHON',20),(5,'FLASK',10),(5,'MYSQL',15),
(6,'PYTHON',11),(6,'FLASK',15),(6,'MYSQL',18),
(7,'PYTHON',20),(7,'FLASK',9),(7,'MYSQL',16),
(8,'PYTHON',15),(8,'FLASK',15),(8,'MYSQL',20),
(9,'PYTHON',17),(9,'FLASK',12),(9,'MYSQL',14),
(10,'PYTHON',19),(10,'FLASK',15),(10,'MYSQL',16);




