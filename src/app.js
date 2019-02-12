class MeaningOfLife extends HTMLElement {
    constructor() {
        super();
        this.defaultAnswer = 42;
    }

    async fetchFromServer() {
        const response = await fetch("answer.json");
        const json = await response.json();
        const { answer } = json; 
        return answer;
    }

    connectedCallback() {

        if(this.getAttribute("dynamic")){
            this.innerHTML = `
                <h2>The meaning of life is: ${this.defaultAnswer}</h2>
            `;
            // flicker while fetching
            this.fetchFromServer().then(a => {
                console.log(`answer: ${a}`);
                this.innerHTML = `
                <h2>The meaning of life is: ${a}</h2>
            `
            });
        } else {
            this.innerHTML = `
                <h2>The meaning of life is: ${this.defaultAnswer}</h2>
            `;
        }
    }
}

customElements.define("meaning-of-life", MeaningOfLife);