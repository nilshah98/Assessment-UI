import { Component, OnInit } from '@angular/core';
import { Question } from "@workspace/core-data";
import { QuestionsService } from '@workspace/core-data';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  selectedQuestion: Question;
  filter: String;

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.filter = "";
    this.getQuestions();
    this.resetQuestion();
  }

  getQuestions() {
    this.questionService.all()
      .subscribe(res => {
        console.log(res);
        this.questions = res;
      })
  }

  saveQuestion(question: Question){
    // submit and save question to DB
    console.log(question);
    this.createQuestion(question);
  }

  selectQuestion(question: Question){
    this.selectedQuestion = question;
  }

  resetQuestion(){
    const emptyQuestion : Question = {
      id: null,
      description: "",
      options: [{"data": ""}],
      correctOption: 1
    };
    this.selectQuestion(emptyQuestion);
  }

  cancel(){
    this.resetQuestion();
  }

  addOption(){
    this.selectedQuestion.options.push({"data": ""});
  }

  createQuestion(question){
    this.questionService.create(question)
      .subscribe(_res => {
        this.getQuestions();
        this.resetQuestion();
      })
  }

  searchQuestion(query){
    // Getting latest questions
    this.questionService.all()
    .subscribe(res => {
      this.questions = res.filter(question => question.description.toLowerCase().includes(query.toLowerCase()))
    })

    this.resetQuestion();
    // Alternatively can search in current allQuestions
    // Need to manage 2 states then, so as to not lose earlier questions
  }
}
