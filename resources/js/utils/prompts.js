
import Vue from 'vue';
import { reload, redirect } from "./redirects";
import Error from "models/components/Error";

function swal(...params) {
    return Vue.swal(...params)
};

export function confirm(title, text = "", type = 'question', buttons = null) {
    buttons = buttons || {confirm: "Yes", cancel: "No"};

    return swal({
        type, title, text,
        confirmButtonText: buttons.confirm,
        cancelButtonText: buttons.cancel,
        showCancelButton: true,
    });
}

export function promptSuccess(message, title = "Success", options = {}) {
    if (typeof message === "object") {
        title = message.title
        message = message.message
    }
    return swal({
        ...options,
        type: "success", title, text: message,
        confirmButtonText: 'Okay',
    });
}

export function promptFormErrors(refs, error, log = false) {
    if (window.debug_log_enabled === true || window.debug_log_enabled === "true" || log) console.log(error);

    const data = error.response.data;
    promptErrors(data.message);

    if (!data.errors) return;

    for (const key in data.errors) {
        if (!refs[key]) continue;
        const field = Array.isArray(refs[key]) ? refs[key][0] : refs[key];
        field.error instanceof Error
            ? field.error.setValue(data.errors[key])
            : field.error = new Error(data.errors[key]);
    }


}

export function promptErrors(message, title = "Something went wrong") {
    if (typeof message === "object") {
        title = message.title
        message = message.message
    }
    return swal({
        type: "error", title, text: message,
        confirmButtonText: 'Okay',
    });
}

export function refreshOrRedirect(title, text, route, type = "", button = null) {
    button = button || { confirm: 'Yes', cancel: 'No' };
    return swal({
            type, title, text,
            showCancelButton: true,
            confirmButtonText: button.confirm,
            cancelButtonText: button.cancel,
            allowOutsideClick: false,
        })
        .then(response => response.value ? reload() : redirect(route));
}