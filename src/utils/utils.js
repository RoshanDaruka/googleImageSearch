export const closestByClass = (el, clazz) => {
    while (el.className != clazz) {
        el = el.parentNode;
        if (!el) {
            return null;
        }
    }
    return el;
}