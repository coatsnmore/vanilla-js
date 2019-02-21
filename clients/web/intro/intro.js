
class Intro extends HTMLElement {
    constructor() {
        super();
        this.name = 'Traveller';
        this.attachShadow({mode: 'open'});
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                section {
                    background-color: lightgrey;
                }
            </style>
            <section>
                <h1 id="journey-header">
                    You have reached the end of your journey!
                </h1>
                <label>
                    <p>What is your name, Traveller?</p>
                    <input id="name" type="text" value="${this.name}" />
                </label>
                <p>Hello there, <b>${this.name}.</b>  </p>
                <p><em>Choose your reward wisely...</em></p>
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