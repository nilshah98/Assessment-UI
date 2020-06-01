import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
