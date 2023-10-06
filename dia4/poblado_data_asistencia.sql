use db_asistencia;

insert into tbl_curso(curso_nombre) values ('PYTHON'),('FLASK'),('MYSQL');
select * from tbl_curso

insert into tbl_alumno(alumno_nombre,alumno_email)
values 
('César Mayta','cmayta@codigo.edu.pe'),
('Luis Perez','lperez@codigo.edu.pe'),
('Gloria Gonzales','ggonzales@codigo.edu.pe'),
('Fausto Murillo','fmurillo@codigo.edu.pe'),
('Claudia Llosa','cllosa@codigo.edu.pe');

insert into tbl_asistencia(alumno_id,curso_id,asistencia_fecha,asistencia_valor)
values
(1,1,'2023-10-02',1),
(1,1,'2023-10-03',1),
(1,1,'2023-10-04',0),
(1,1,'2023-10-05',1),
(2,1,'2023-10-02',1),
(2,1,'2023-10-03',1),
(2,1,'2023-10-04',1),
(2,1,'2023-10-05',1),
(3,1,'2023-10-02',0),
(3,1,'2023-10-03',0),
(3,1,'2023-10-04',0),
(3,1,'2023-10-05',0),
(4,1,'2023-10-02',0),
(4,1,'2023-10-03',0),
(4,1,'2023-10-04',1),
(4,1,'2023-10-05',1),
(5,1,'2023-10-02',1),
(5,1,'2023-10-03',1),
(5,1,'2023-10-04',1),
(5,1,'2023-10-05',1);

select
alu.alumno_nombre as alumno,
d1.asistencia_valor as '2023-10-02',
d2.asistencia_valor as '2023-10-03',
d3.asistencia_valor as '2023-10-04',
d4.asistencia_valor as '2023-10-05'
from tbl_alumno alu
left join tbl_asistencia d1 on d1.alumno_id = alu.alumno_id  and d1.asistencia_fecha = '2023-10-02' and d1.curso_id = 1
left join tbl_asistencia d2 on d2.alumno_id = alu.alumno_id  and d2.asistencia_fecha = '2023-10-03' and d2.curso_id = 1
left join tbl_asistencia d3 on d3.alumno_id = alu.alumno_id  and d3.asistencia_fecha = '2023-10-04' and d3.curso_id = 1
left join tbl_asistencia d4 on d4.alumno_id = alu.alumno_id  and d4.asistencia_fecha = '2023-10-05' and d4.curso_id = 1
