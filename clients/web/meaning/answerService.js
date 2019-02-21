export default class AnswerService {
    async fetchAnswerFromServer() {
        const response = await fetch("meaning/answers.json");
        const json = await response.json();
        const answer  = json.answers[Math.floor(Math.random() * json.answers.length)]; 
        return answer;
    }
}