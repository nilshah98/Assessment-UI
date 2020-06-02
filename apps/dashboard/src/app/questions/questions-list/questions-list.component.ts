import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from "@workspace/core-data";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent{
  @Input() questions: Question[] = [];
  @Input() filter: String = "";
  @Output() selected= new EventEmitter();
  @Output() searched= new EventEmitter();
}