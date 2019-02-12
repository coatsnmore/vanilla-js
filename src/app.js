class MeaningOfLife extends HTMLElement {
    constructor(){
        super();
        this.defaultAnswer = 42;
    }

    connectedCallback(){
        this.innerHTML = `
         <h2>The meaning of life is: ${this.getAttribute("answer")? this.getAttribute("answer"): this.defaultAnswer}</h2>
        `;
    }
}

customElements.define("meaning-of-life", MeaningOfLife);