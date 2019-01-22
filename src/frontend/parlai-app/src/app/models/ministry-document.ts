export class MinistryDocument {
    // id: number;
    title: string;
    frontenddate: string;
    url: string;
    type: string;
    visible: boolean;
    helpful: boolean;

    constructor() {
        this.title = undefined;
        this.frontenddate = undefined;
        this.url = undefined;
        this.type = undefined;

        this.visible = true;
        this.helpful = true;
    }
}
