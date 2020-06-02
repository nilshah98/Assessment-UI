import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
    { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
