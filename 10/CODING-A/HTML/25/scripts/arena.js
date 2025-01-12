export const arena = {
    width : '600px',
    height : '600px',
    color : 'grey',
    element : document.createElement("div"),
    show() {
        this.element.classList.add('arena');
        this.element.style.cssText = `
            width: ${this.width};
            height: ${this.height};
            background-color: ${this.color};
            position: relative;
        `;
        document.body.append(this.element);
    }
}