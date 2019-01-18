export class User {
    id: number;
    username: string;
    real_name: string;
    email: string;
    phone: string;
    spec_keywords: string;

    constructor(id: number, username: string, real_name: string, email: string, phone: string, spec_keywords: string) {
        this.id = id;
        this.username = username;
        this.real_name = real_name;
        this.email = email;
        this.phone = phone;
        this.spec_keywords = spec_keywords;
    }
}
