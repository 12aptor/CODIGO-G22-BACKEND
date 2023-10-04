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
