import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, User } from '@workspace/core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  currUser: User;

  links  = [
    {path: '/', icon: 'home', title: 'Home'},
    {path: '/projects', icon: 'work', title: 'Projects'},
    {path: '/questions', icon: 'help', title: 'Questions'},
    {path: '/quiz', icon: 'dashboard', title: 'Quiz'},
    {path: '/exam', icon: 'question_answer', title: 'Exam'}
  ];

  constructor(private userService: UserService){};

  ngOnInit(){
    this.userService.getUserDetails()
      .subscribe(res => {
        this.currUser = res;
        this.userService.currUser = this.currUser;
      });
  }

  logout(){
    console.log("Logging out");
    this.userService.logout()
      .subscribe(res => {
        if(res.status === 200){
          location.reload()
        }
      });
  }
}
