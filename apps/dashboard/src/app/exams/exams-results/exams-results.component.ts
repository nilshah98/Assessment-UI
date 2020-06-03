import { Component, OnInit, Input } from '@angular/core';
import { Result } from '@workspace/core-data';

@Component({
  selector: 'app-exams-results',
  templateUrl: './exams-results.component.html',
  styleUrls: ['./exams-results.component.css']
})
export class ExamsResultsComponent implements OnInit {

  @Input() result: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
