export class MinistryDocument {
    // id: number;
    title: string;
    date: string;
    url: string;
    visible: boolean;

    constructor(title: string, date: string, url: string, visible : boolean) {
        this.title = title;
        this.date = date;
        this.url = url;
        this.visible = visible;
    }
}
