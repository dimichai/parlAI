import { Serializable } from './serializable';

export class MinistryDocument extends Serializable {
    title: string;
    frontenddate: string;
    canonical: string;
    type: string;
    visible: boolean;
    helpful: boolean;

    constructor() {
        super();

        this.title = undefined;
        this.frontenddate = undefined;
        this.canonical = undefined;
        this.type = undefined;

        this.visible = true;
        this.helpful = true;
    }
}
