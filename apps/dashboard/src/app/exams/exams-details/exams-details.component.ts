import { Component, OnInit, Input } from '@angular/core';
import { Exam } from '@workspace/core-data';

@Component({
  selector: 'app-exams-details',
  templateUrl: './exams-details.component.html',
  styleUrls: ['./exams-details.component.css']
})
export class ExamsDetailsComponent implements OnInit {

  @Input() exam: Exam;
  constructor() { }

  ngOnInit(): void {
  }

  evaluate(exam){
    console.log(exam);
  }

}
