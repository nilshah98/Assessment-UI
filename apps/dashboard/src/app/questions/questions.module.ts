import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { MaterialModule } from '@workspace/material';
import { FormsModule } from '@angular/forms';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsDetailsComponent } from './questions-details/questions-details.component';


@NgModule({
  declarations: [QuestionsComponent, QuestionsListComponent, QuestionsDetailsComponent],
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
