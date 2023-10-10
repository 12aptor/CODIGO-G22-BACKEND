CREATE TABLE tbl_tarea (
    id INT auto_increment NOT NULL,
    text varchar(100) NOT NULL,
    completed BOOL DEFAULT false NOT NULL,
    CONSTRAINT tbl_tarea_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_bin;

insert into tbl_tarea(text,completed) 
values ('TAREA UNO',TRUE),('TAREA DOS',FALSE);