export class MinistryDocument {
    // id: number;
    title: string;
    date: string;
    url: string;

    constructor(title: string, date: string, url: string) {
        this.title = title;
        this.date = date;
        this.url = url;
    }
}
