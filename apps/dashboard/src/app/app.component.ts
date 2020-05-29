import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';

  links  = [
    {path: '/', icon: 'home', title: 'Home'},
    {path: '/projects', icon: 'work', title: 'Projects'}
  ];
}
