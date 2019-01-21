export class MinistryDocument {
    // id: number;
    title: string;
    date: string;
    url: string;
    visible: boolean;
    helpful: boolean;

    constructor(title: string, date: string, url: string, visible : boolean, helpful : boolean) {
        this.title = title;
        this.date = date;
        this.url = url;
        this.visible = visible;
        this.helpful = helpful;
        
        this.visible = true;
        this.helpful = true;
    }
}
