import { MinistryDocument } from './ministry-document';
import { Reference } from './reference';

export class Question {
    id: number;
    content: string;
    keywords: string;
    entities: string;
    questionClass: string;
    references: Reference[];
    documents: MinistryDocument[];
    answer: string;

    constructor(id: number, content: string, keywords: string, entities: string, questionClass: string, references: Reference[],
        documents: MinistryDocument[]) {
        this.id = id;
        this.content = content;
        this.keywords = keywords;
        this.entities = entities;
        this.questionClass = questionClass;
        this.references = references;
        this.documents = documents;
    }

    getKeywordsAsArray(): string[] {
        return this.keywords.split(',');
    }

    getEntitiesAsArray(): string[] {
        return this.entities.split(',');
    }
}
