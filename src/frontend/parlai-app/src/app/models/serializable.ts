export class Serializable {
    fromJson(json) {
        for (const propName in json) {
            if (this.hasOwnProperty(propName)) {
                this[propName] = json[propName];
            } else if (Object.getPrototypeOf(this).hasOwnProperty(propName)) {
                this[propName] = json[propName];
            }
        }
        return this;
    }
}
