-- insertar datos
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

-- select
select nombres,apellidos,pais from alumno;
select concat(nombres,' ',apellidos) as nombre_completo,pais from alumno;

-- update
update alumno set email = 'cesarmayta@gmail.com' where id = 1
select concat(lower(nombres),lower(apellidos),'@gmail.com') from alumno;

update alumno set 
email = concat(lower(nombres),lower(apellidos),'@gmail.com')
where email is null;

-- delete
delete from alumno where id = 10
delete from alumno where id in (7,8,9)


