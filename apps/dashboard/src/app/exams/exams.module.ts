import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';
import { QuizModule } from '../quiz/quiz.module';


@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    MaterialModule,
    FormsModule,
    QuizModule
  ]
})
export class ExamsModule { }
