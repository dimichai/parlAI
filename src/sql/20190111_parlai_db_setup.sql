CREATE DATABASE parlai;

USE parlai;

CREATE TABLE documentType ( 
	id smallint not null auto_increment,
    infoid varchar(50) not null,
    informationtype varchar(50) not null,
    name varchar(50) not null,
    namesingular varchar(50) null,
    lastmodified datetime null,
    constraint pk_documentType primary key (id) 
);

CREATE TABLE document (
	id int not null auto_increment,
    docid varchar(50) not null unique,
    type varchar(50) not null,
    typeId smallint not null,
    canonical varchar(1000) not null,
    dataurl varchar(1000) not null,
    title varchar(500) not null,
    introduction varchar(5000) null,
    lastmodified datetime null,
    frontenddate datetime null,
    constraint pk_document primary key(id),
    constraint fk_document_documentType_typeId foreign key (typeId) references documentType(id)
);