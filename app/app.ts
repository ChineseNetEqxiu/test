import {questions, Question} from './questions';
import {completions, Completion} from './completions';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
})
class App {
    questions: Array<Question>;
    completions: Completion[];
    answerOnly: Boolean;
    keywords: String;
    constructor() {
        this.questions = questions;
        this.completions = completions;
        this.keywords = "";
        this.answerOnly = false;
    }
    filterQuestions() {
        var reg = new RegExp(this.keywords);
        this.questions = questions.filter(question => question.title.match(reg));
        this.completions = completions.filter(completion => completion.title.match(reg));
    }
}

bootstrap(App, [])
    .catch(err => console.error(err));
