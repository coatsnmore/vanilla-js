export default class AnswerService {
    async fetchAnswerFromServer() {
        const response = await fetch("answer.json");
        const json = await response.json();
        const { answer } = json; 
        return answer;
    }
}