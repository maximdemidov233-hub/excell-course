
export function $() {
    return '';
}

$.create = (tagName, classes) => {
    const domEl = document.createElement(tagName);
    if (classes) {
        domEl.classList.add(classes);
    }

    return domEl;
};