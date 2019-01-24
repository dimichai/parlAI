import { MinistryDocument } from './ministry-document';
import { Reference } from './reference';
import { Serializable } from './serializable';

export class Keyword extends Serializable {
    id: number;
    name: string;
    docCount: number;

    constructor() {
        super();

       this.name = undefined;
       this.docCount = undefined;
    }
}
