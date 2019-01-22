import { MinistryDocument } from './ministry-document';
import { Reference } from './reference';
import { Serializable } from './serializable';

export class Entity extends Serializable {
    text: string;
    label: string;

    constructor() {
        super();

       this.text = undefined;
       this.label = undefined;
    }
}
