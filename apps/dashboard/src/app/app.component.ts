import { Component, OnInit } from '@angular/core';
import { UserService } from '@workspace/core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  name: String;

  links  = [
    {path: '/', icon: 'home', title: 'Home'},
    {path: '/projects', icon: 'work', title: 'Projects'},
    {path: '/login', icon: 'login', title: 'Login'},
  ];

  constructor(private userService: UserService){};

  ngOnInit(){
    this.userService.getUserDetails()
      .subscribe(res => {
        if(res.status === 200){this.name = res.body["name"]}
      })
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
