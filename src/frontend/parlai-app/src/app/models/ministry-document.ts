export class MinistryDocument {
    // id: number;
    title: string;
    date: string;
    url: string;
    feedbackText : string;
    visible: boolean;

    constructor(title: string, date: string, url: string, feedbackText: string, visible : boolean) {
        this.title = title;
        this.date = date;
        this.url = url;
        this.feedbackText = feedbackText;
        this.visible = visible;
        
        this.feedbackText = "Was it helpful?";
    }
}
