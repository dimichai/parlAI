USE parlai;


CREATE TABLE questionTopicFeedback ( 
	id int not null auto_increment,
    userId int not null,
    questionId smallint not null,
    topicId smallint not null,
    label bool not null,
    
    constraint pk_questionTopicFeedback primary key (id),
    constraint fk_questionTopicFeedback_question foreign key (questionId) references question(id),
    constraint fk_questionTopicFeedback_users foreign key (userId) references users(id)
);

CREATE TABLE questionEntityFeedback ( 
	id int not null auto_increment,
    userId int not null,
    questionId smallint not null,
    entity text not null,
    label bool not null,
    
    constraint pk_questionEntityFeedback primary key (id),
    constraint fk_questionEntityFeedback_question foreign key (questionId) references question(id),
    constraint fk_questionEntityFeedback_users foreign key (userId) references users(id)
);
