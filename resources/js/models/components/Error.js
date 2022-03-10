export default class Error {

    constructor(value = null) {
        this.value = value;
    }

    isEmpty() {
        if (typeof this.value === "string") {
            return this.value.trim().length == 0;

        } else if (Array.isArray(this.value)) {
            return this.value.length == 0;
        }

        return this.value == null;
    }

    setValue(value) {
        this.value = value
    }

    getMessage() {
        return Array.isArray(this.value) ? this.value[0] : this.value;
    }

    clear() {
        this.value = null;
    }

}