import { Serializable } from './serializable';

export class QuestionTopic extends Serializable {
    num: number;
    keywords: string;

    visible: boolean;
    helpful: boolean;

    constructor(num: number, keywords: string) {
        super();

       this.num = num;
       this.keywords = keywords;

       this.visible = true;
       this.helpful = true;
    }
}
