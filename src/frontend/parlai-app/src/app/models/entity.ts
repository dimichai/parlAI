import { Serializable } from './serializable';

export class Entity extends Serializable {
    text: string;
    label: string;

    visible: boolean;
    helpful: boolean;

    constructor() {
        super();

       this.text = undefined;
       this.label = undefined;

       this.visible = true;
       this.helpful = true;
    }
}
