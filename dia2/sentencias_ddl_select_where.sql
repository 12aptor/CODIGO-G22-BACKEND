-- seleccionar todos los registros
select * from alumno;

-- mostrar cantidad de registros
select count(*) from alumno;

-- where
select nombres,apellidos,email from alumno
where pais = 'Chile';

-- where and
select nombres,apellidos from alumno
where pais = 'Peru' and id > 500

-- where or
select nombres,apellidos,pais from alumno
where pais = 'Peru' or pais = 'Colombia'

select nombres,apellidos,pais from alumno
where pais in ('Peru','Colombia','Chile')

select nombres,apellidos,pais  from alumno
where pais not in ('Peru','Chile')

select nombres,apellidos from alumno
where nombres like 'A%'

select nombres,apellidos,email from alumno
where email like '%@amazon.de%'


select distinct substr(email,position('@' in email) + 1,length(email)  - position('@' in email)) from alumno



