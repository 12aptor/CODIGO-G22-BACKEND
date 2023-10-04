select *
from
alumno
inner join nota on alumno.id = nota.alumno_id

insert into alumno(nombres,apellidos,dni) values('Carmen','Juarez','22223');

select *
from
alumno
left join nota on alumno.id = nota.alumno_id

select alumno.nombres,alumno.apellidos,avg(nota.nota)
from alumno left join nota on alumno.id = nota.alumno_id
group by alumno.nombres,alumno.apellidos

-- promedio de nota por curso
-- python 20
-- flask 11
select curso,avg(nota)
from nota
group by curso

select alumno.nombres,alumno.apellidos,
nota1.nota as 'PYTHON',
nota2.nota as 'FLASK',
nota3.nota as 'MYSQL'
from alumno
left join nota nota1 on nota1.alumno_id = alumno.id and nota1.curso = 'PYTHON'
left join nota nota2 on nota2.alumno_id = alumno.id and nota2.curso = 'FLASK'
left join nota nota3 on nota3.alumno_id = alumno.id and nota3.curso = 'MYSQL'



