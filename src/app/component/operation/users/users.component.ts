import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = new User
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


  /**
  * Get all authors
  * API:api/user/list
 */
  async getAllUsers() {
    (await this.userService.getAllUsers()).subscribe((response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          var result = response.body as any;
          this.user.userList = result.success;
        }
      }

    }, error => {
      alert(error.error['data'].title);
    });
  };

  async onChange(userId: number, isActive: number) {
    (await this.userService.changeUsersStatus(userId, isActive)).subscribe((response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          var result = response.body as any;
        //  alert(result.message)
          this.getAllUsers();
        }
      }

    }, error => {
      alert(error.error['data'].title);
    });
  }

}
