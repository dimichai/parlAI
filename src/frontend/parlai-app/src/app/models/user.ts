import { Serializable } from './serializable';

export class User extends Serializable {
    id: number;
    username: string;
    real_name: string;
    email: string;
    phone: string;
    spec_keywords: string;

    constructor() {
        super();

        this.id = undefined;
        this.username = undefined;
        this.real_name = undefined;
        this.email = undefined;
        this.phone = undefined;
        this.spec_keywords = undefined;
    }
}
