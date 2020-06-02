import { Component, OnInit, Input, OnChanges, AfterContentInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Quiz, Question } from "@workspace/core-data";
import * as _ from "lodash";

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit, OnChanges {

  @Input() currQuiz: Quiz;
  @Input() allQuestions: Array<Question>;
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();

  filteredQuestions: Array<Question>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.filteredQuestions = _.cloneDeep(this.allQuestions);
  }

  checkQuestionExists(question){
    return this.currQuiz.questions.map(i=>i.id).includes(question.id);
  }

  filterQuestions(event){
    let query = event.target.value.toLowerCase();
    this.filteredQuestions = this.allQuestions.filter(q => q.description.toLowerCase().includes(query));
  }
}
