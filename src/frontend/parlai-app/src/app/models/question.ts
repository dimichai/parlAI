import { MinistryDocument } from './ministry-document';
import { Reference } from './reference';

export class Question {
    id: number;
    content: string;
    keywords: string;
    entities: string;
    references: Reference[];
    documents: MinistryDocument[];

    constructor(id: number, content: string, keywords: string, entities: string, references: Reference[],
        documents: MinistryDocument[]) {
        this.id = id;
        this.content = content;
        this.keywords = keywords;
        this.entities = entities;
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
