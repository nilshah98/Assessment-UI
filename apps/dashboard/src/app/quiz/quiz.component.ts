import { Component, OnInit } from '@angular/core';
import { Quiz, QuizesService, Question, QuestionsService } from '@workspace/core-data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  allQuizes: Array<Quiz>;
  filteredQuiz: Array<Quiz>;
  selectedQuiz: Quiz;
  allQuestions: Array<Question>

  constructor(private quizesService: QuizesService,
    private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.getAllQuizes()
    this.resetQuiz()
    this.questionService.all()
    .subscribe(res => this.allQuestions = res);
  }

  getAllQuizes() {
    this.quizesService.all()
      .subscribe(res => {
        this.allQuizes = res;
        this.filteredQuiz = res;
      })
  }

  createQuiz(quiz){
    console.log(quiz, "quiz main component");
    this.quizesService.create(quiz)
      .subscribe(_res => {
        this.getAllQuizes();
        this.resetQuiz();
      })
  }


  selectQuiz(quiz){
    this.selectedQuiz = quiz;
  }

  resetQuiz(){
    const emptyQuiz : Quiz = {
      id: null,
      title: "",
      description: "",
      questions: [],
    };
    this.selectQuiz(emptyQuiz);
  }

  searchQuiz(event){
    const query = event.target.value.toLowerCase();
    
    this.filteredQuiz = this.allQuizes.filter(q => {
      if(q.title.toLowerCase().includes(query)) return true;
      else if(q.description.toLowerCase().includes(query)) return true;
      return false;
    });
  }

  submitQuiz(quiz){
    // create quiz here
    const newQuiz: Quiz = {
      id: this.selectedQuiz.id,
      title: quiz.target[0].value,
      description: quiz.target[1].value,
      questions: []
    };

    // Add questions
    for(let i=3; i<quiz.target.length-2; i++){
      if(quiz.target[i].checked) newQuiz.questions.push(this.createQuestion(quiz.target[i].value));
    }

    this.createQuiz(newQuiz);
  }

  createQuestion(id){
    const ques: Question = {
      id: id,
      options: null,
      correctOption: null,
      description: null,
    }
    return ques;
  }
}
