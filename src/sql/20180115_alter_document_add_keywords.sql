USE parlai;

ALTER TABLE document 
ADD COLUMN title_keywords TEXT null,
ADD COLUMN intro_keywords TEXT null