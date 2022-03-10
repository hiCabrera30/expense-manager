import { send } from "utils/network";

export default class Form {

    constructor(data) {
        this.isRequesting = false;
        this.mapData(data);
    }

    mapData(data) {
        const { originalData, ...props  } = data;
        this.commitedData = { ...props };
        this.reset();
    }

    getProtectedKeys() {
        return [
            "commitedData",
            "isRequesting"
        ]
    }

    isKeyProtected(key) {
        return this.getProtectedKeys().includes(key);
    }

    commit() {
        Object.keys(this.commitedData).forEach(key => {
            if (this.isKeyProtected(key)) {
                return;

            } else if (this[key] instanceof Form) {
                this.commitedData[key] = new Form(this[key].getData());

            } else if (Array.isArray(this[key])) {
                this.commitedData[key] = JSON.parse(JSON.stringify(this[key]));

            } else if (typeof this[key] === "object"
                && this[key] !== null
                && this[key] !== undefined) {
                this.commitedData[key] = JSON.parse(JSON.stringify(this[key]));

            } else {
                this.commitedData[key] = this[key];

            }
        });
    }

    reset() {
        Object.keys(this.commitedData).forEach(key => {
            if (this.isKeyProtected(key)) {
                return;

            } else if (this.commitedData[key] instanceof Form) {
                this[key] = new Form(this.commitedData[key].getData());

            } else if (Array.isArray(this.commitedData[key])) {
                this[key] = JSON.parse(JSON.stringify(this.commitedData[key]));

            } else if (typeof this.commitedData[key] === "object" 
                && this.commitedData[key] !== null
                && this.commitedData[key] !== undefined) {
                this[key] = JSON.parse(JSON.stringify(this.commitedData[key]));;

            } else {
                this[key] = this.commitedData[key];

            }
        });
    }

    getData() {
        const data = {};
        Object.keys(this.commitedData).forEach(key => (data[key] = this[key]));

        return data;
    }

    send(method, url, config, ...options) {
        config = { data: this.getData(), ...config };

        return new Promise((resolve, reject) => {
            this.isRequesting = true;
            send(method, url, config, ...options)
                .then(resolve)
                .catch(reject)
                .finally(() => this.isRequesting = false);
        });
    }

}