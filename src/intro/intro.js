
class Intro extends HTMLElement {
    constructor() {
        super();
        this.name = 'nick';
        this.attachShadow({mode: 'open'});
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                section {
                    background-color: lightblue;
                }
            </style>
            <section>
                <h1 id="journey-header">
                    You have reached the end of your journey!
                </h1>
                <label><h3>What is your name, Traveller?</h3>
                    <input id="name" type="text" value="${this.name}" />
                    
                </label>
                <h3>Hello there, ${this.name}.  Choose your reward wisely...</h3>
            </section>
        `;
    };

    connectedCallback() {
        this.update();
    }

    update(){
        const ncIntro = document.querySelector('nc-intro');
        ncIntro.render();
        this.shadowRoot.getElementById(`name`).onchange = ncIntro.updateName;
    }

    updateName(e) {
        const ncIntro = document.querySelector('nc-intro');
        ncIntro.name = e.target.value;
        ncIntro.update();
    }
}

customElements.define("nc-intro", Intro);