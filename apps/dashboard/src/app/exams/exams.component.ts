import { Component, OnInit } from '@angular/core';
import { Quiz, QuizesService, User, UserService, ExamsService, Exam, Result } from '@workspace/core-data';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  allQuizes: Array<Quiz>;
  filteredQuiz: Array<Quiz>;
  selectedQuiz: Quiz;
  currUser: User;
  exam: Exam = null;
  result: Result = null;

  constructor(private quizesService: QuizesService,
    private userService: UserService,
    private examsService: ExamsService) { }

  ngOnInit(): void {
    this.currUser = this.userService.currUser;
    this.getAllQuizes()
  }

  getAllQuizes() {
    this.quizesService.all()
      .subscribe(res => {
        this.allQuizes = res;
        this.filteredQuiz = res;
      })
  }

  selectQuiz(quiz: Quiz) {
    this.selectedQuiz = quiz;
    this.examsService.getExam(this.selectedQuiz.id)
      .subscribe(res => {
        if(res.hasOwnProperty("questions")){
          this.exam = <Exam> res;
          this.result = null;
        }
        else{
          this.exam = null;
          this.result = <Result> res;
        }
      });
  }

  evaluate(exam: Exam){
    this.examsService.evalExam(exam.id, exam)
      .subscribe(res => console.log(res))
  }

}
