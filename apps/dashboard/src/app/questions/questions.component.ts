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

  createQuestion(question){
    this.questionService.create(question)
      .subscribe(_res => {
        this.getQuestions();
        this.resetQuestion();
      })
  }

  onSearch(query){
    console.log("HIT")

    this.questionService.all()
    .subscribe(res => {
      console.log(res);

      // Filtering
      this.questions = res.filter(question => {
        // Searching in description
        if(question.description.includes(query)){
          return true
        }else{
          // Searching in options
          let flag = false
          for(let j=0; j<question.options.length; j++){
            if(question.options[j].data.includes(query)){
              flag = true;
              break;
            }
          }
          return flag;
        }
      })
    })
  }
}
