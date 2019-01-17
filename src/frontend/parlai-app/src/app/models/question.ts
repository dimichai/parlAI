export class Question {
    id: number;
    content: string;
    keywords: string;
    entities: string;

    constructor(id: number, content: string, keywords: string, entities: string) {
        this.id = id;
        this.content = content;
        this.keywords = keywords;
        this.entities = entities;
    }

    getKeywordsAsArray(): string[] {
        return this.keywords.split(',');
    }

    getEntitiesAsArray(): string[] {
        return this.entities.split(',');
    }
}
