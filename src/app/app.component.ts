import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AuthGurdService } from './services/authgurd/auth-gurd.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = new User
  constructor(private authGurd: AuthGurdService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.checkUserSession();
  }

  title = 'frontend';
  aaa = '';

  checkUserSession() {
    this.authGurd.checkUserSession().then(res => {
      if (res.status) {
        this.user.isLoggedIn = true;
        this.user.name = res.profile.userName;
        this.user.isAdmin = res.profile.isAdmin
      }
      else
        this.user.isLoggedIn = false;
    })
  }

  signOut() {
    this.userService.signOut()
  }


}
