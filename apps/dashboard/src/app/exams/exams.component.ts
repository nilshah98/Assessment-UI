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

  constructor(private userService: UserService,
    private examsService: ExamsService) { }

  ngOnInit(): void {
    this.currUser = this.userService.currUser;
    this.getAllExams();
  }

  getAllExams() {
    this.examsService.getAllExams()
      .subscribe(res => {
        this.allQuizes = res;
        this.filteredQuiz = res;
      })
  }

  takeExam(quiz) {
    this.selectedQuiz = quiz;
    this.examsService.getExam(quiz.id)
      .subscribe(res => {
        this.result = null;
        this.exam = res;
      })
  }

  checkResult(quiz){
    this.selectedQuiz = quiz;
    this.examsService.getResult(quiz.id)
      .subscribe(res => {
        this.result = res;
        this.exam = null;
      })
  }

  evaluate(exam: Exam){
    this.examsService.evalExam(exam.id, exam)
      .subscribe(res => console.log(res))
  }

  searchQuiz(event){
    const query = event.target.value.toLowerCase();
    
    this.filteredQuiz = this.allQuizes.filter(q => {
      if(q.title.toLowerCase().includes(query)) return true;
      else if(q.description.toLowerCase().includes(query)) return true;
      return false;
    });
  }

}
