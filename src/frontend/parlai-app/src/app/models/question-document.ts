import { Question } from './question';
import { Serializable } from './serializable';

export class QuestionDocument extends Serializable {
    id: number;
    title: string;
    author: string;
    questions: Question[];
    keywords: string;

    constructor() {
        super();

        this.id = undefined;
        this.title = undefined;
        this.author = undefined;
        this.keywords = undefined;
        this.questions = undefined;
    }
}
