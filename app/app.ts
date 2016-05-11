import {questions, Question} from './questions';
import {completions, Completion} from './completions';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
})
export class App {
    questions: Array<Question>;
    completions: Completion[];
    answerOnly: Boolean;
    title: String;
    constructor() {
        this.questions = questions;
        this.completions = completions;
        this.title = "";
        this.answerOnly = false;
    }
}

bootstrap(App, [])
    .catch(err => console.error(err));
