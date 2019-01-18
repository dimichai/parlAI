USE parlai;

CREATE TABLE questionDocument ( 
	id smallint not null auto_increment,
    title text not null,
    answeredby text not null,
    keywords text not null,
    questionContent text not null,
    
    constraint pk_questionDocument primary key (id) 
);

CREATE TABLE question (
	id smallint not null auto_increment,
    docId smallint not null,
    content text not null,
    
    constraint pk_question primary key (id),
	constraint fk_question_questionDocument_docId foreign key (docId) references questionDocument(id)
)