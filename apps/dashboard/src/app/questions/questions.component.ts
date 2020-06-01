import { Component, OnInit } from '@angular/core';
import { Question } from "@workspace/core-data";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  selectedQuestion: Question;

  constructor() { }

  ngOnInit(): void {
    this.resetQuestion();
  }

  saveQuestion(question: Question){
    // submit and save question to DB
    console.log(question);
    this.questions.push(question);
    this.resetQuestion();
  }

  selectQuestion(question: Question){
    this.selectedQuestion = question;
  }

  resetQuestion(){
    const emptyQuestion : Question = {
      id: null,
      description: "",
      options: [{"data": ""}],
      correctOption: 0
    };
    this.selectQuestion(emptyQuestion);
  }

  cancel(){
    this.resetQuestion();
  }

  addOption(){
    this.selectedQuestion.options.push({"data": ""});
  }


}
