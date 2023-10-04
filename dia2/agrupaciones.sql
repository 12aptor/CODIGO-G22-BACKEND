select count(*) from alumno;

select pais,count(*)
from alumno
group by pais
having count(*) <= 100