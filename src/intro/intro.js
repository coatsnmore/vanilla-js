
class Intro extends HTMLElement {
    constructor() {
        super();
        this.name = 'nick';
    }

    updateIntro() {
        this.innerHTML = `
            <label>Name
                <input id="name" type="text" value="${this.name}" />
            </label>
            <h2>Hello, there, ${this.name}.</h2>
            <h3>You must have come from faraway lands. Choose your reward wisely...</h3>
        `;
    };

    connectedCallback() {
        this.update();
    }

    update(){
        const ncIntro = document.querySelector('nc-intro');
        ncIntro.updateIntro();
        document.getElementById(`name`).onchange = ncIntro.updateName;
    }

    updateName(e) {
        let ncIntro = document.querySelector('nc-intro');
        ncIntro.name = e.target.value;
        ncIntro.update();
    }
}

customElements.define("nc-intro", Intro);