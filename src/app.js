import AnswerService from "./answerService.js";

class MeaningOfLife extends HTMLElement {
    constructor() {
        super();
        this.defaultAnswer = '42';
        this.answerService = new AnswerService();
    }

    updateAnswer (answer) {
        this.innerHTML = `<h2>The meaning of life is: ${answer}</h2>`;
    };

    connectedCallback() {
        if (this.getAttribute("dynamic")) {
            this.answerService.fetchAnswerFromServer()
                .then(a => {this.updateAnswer(a)});
        } else {
            this.updateAnswer(this.defaultAnswer);
        }
    }
}

customElements.define("meaning-of-life", MeaningOfLife);