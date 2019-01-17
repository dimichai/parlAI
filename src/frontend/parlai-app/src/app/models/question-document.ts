import { Question } from './question';

export class QuestionDocument {
    id: number;
    title: string;
    author: string;
    questions: Question[];
    keywords: string;

    constructor(id: number, title: string, author: string, keywords: string, questions: Question[]) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.keywords = keywords;
        this.questions = questions;
    }
}
