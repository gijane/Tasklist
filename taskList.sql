
drop table if exists tl.tasks;
drop schema if exists tl;

create schema tl;

create table tl.tasks (
	id			SERIAL			PRIMARY KEY,
	name		varchar(100)	NOT NULL,
	description	varchar(6000),
	created		timestamp		DEFAULT current_timestamp,
	due			timestamp
);

insert into tl.tasks (name, description) values ('Task 1', 'The first task, its a good one?');

SELECT * FROM tl.tasks;


