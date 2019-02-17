import AnswerService from "./answerService.js";

class MeaningOfLife extends HTMLElement {
    constructor() {
        super();
        this.defaultAnswer = '42';
        this.answerService = new AnswerService();
        this.attachShadow({mode: 'open'});
    }

    updateAnswer(answer) {
        this.shadowRoot.innerHTML = `<section>The meaning of life is ${answer}.</section>`;
    };

    connectedCallback() {
        this.getAttribute("dynamic") ?
            this.answerService.fetchAnswerFromServer()
                .then(a => { this.updateAnswer(a) })
            : this.updateAnswer(this.defaultAnswer);
    }
}

customElements.define("meaning-of-life", MeaningOfLife);