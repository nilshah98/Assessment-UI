import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workspace/ui-login';

const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule'},
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
    { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
