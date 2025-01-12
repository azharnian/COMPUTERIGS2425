export function Star(color='salmon'){
    this.size = 200;
    this.color = color;
    this.element = document.createElement('span');
    
    this.show = function(){
        this.element.innerHTML = `
        <svg height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:${this.color};stroke-width:5;"/>
        </svg>
                `;
        this.element.style.fontSize = `${this.size}px`;
        document.querySelector('.arena').append(this.element);
    }
}