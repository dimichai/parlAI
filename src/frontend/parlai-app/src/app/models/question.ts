import { MinistryDocument } from './ministry-document';
import { Reference } from './reference';
import { Serializable } from './serializable';

export class Question extends Serializable {
    id: number;
    content: string;
    keywords: string;
    entities: string;
    questionClass: string;
    references: Reference[];
    documents: MinistryDocument[];
    answer: string;

    constructor() {
        super();

        this.id = undefined;
        this.content = undefined;
        this.keywords = undefined;
        this.entities = undefined;
        this.questionClass = undefined;
        this.references = undefined;
        this.documents = undefined;
    }

    getKeywordsAsArray(): string[] {
        return this.keywords.split('#');
    }

    getEntitiesAsArray(): string[] {
        return this.entities.split(',');
    }
}
