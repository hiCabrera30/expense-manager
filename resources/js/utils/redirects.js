
export function reload(timeout = 0) {
    setTimeout(() => location.reload(), timeout);
}

export function redirect(link, timeout = 0) {
    link = typeof link === "object" ? route(link.name, link.params || {}) : link;
    timeout
        ? setTimeout(() => location.href = link, timeout)
        : location.href = link;
}