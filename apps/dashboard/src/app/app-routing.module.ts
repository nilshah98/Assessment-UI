import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';

const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
