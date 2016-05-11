import {questions} from './questions';
import {completions} from './completions';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
@Component({
    selector: 'app',
    providers: [],
    templateUrl: 'app/app.html',
    directives: [],
    pipes: []
})
export class App {
    questions: any;
    completions: any;
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
