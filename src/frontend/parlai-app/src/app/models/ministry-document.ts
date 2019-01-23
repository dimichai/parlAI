import { Serializable } from './serializable';

export class MinistryDocument extends Serializable {
    title: string;
    frontenddate: string;
    url: string;
    type: string;
    visible: boolean;
    helpful: boolean;

    constructor() {
        super();

        this.title = undefined;
        this.frontenddate = undefined;
        this.url = undefined;
        this.type = undefined;

        this.visible = true;
        this.helpful = true;
    }
}
