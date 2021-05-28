import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { NetworkService } from '../network.service';
import { AuthGurdService } from "../authgurd/auth-gurd.service";
import { Router } from '@angular/router';
import { Origin } from 'src/app/models/origin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new User;
  origin = new Origin
  constructor(private networkService: NetworkService, private authGurd: AuthGurdService, private router: Router) { }

  checkUserSession() {
    return this.authGurd.checkUserSession();
  }


  /* SignIn Api
     API:/api/login
     USER:Email/Password
  */
  async signIn(url: string, user: User) {
    return this.networkService.postDB(url, user);
  }

  /* SignOut Api
     API:api/logout 
   */
  signOut() {
    this.origin._API = this.origin._BASEURL + 'api/logout';
    this.networkService.postDB(this.origin._API, []).subscribe(async (response) => {
      if (response.status == 200) {
        this.authGurd.destroyUserSession().then(res => {
          if (!res) {
            //session storage clear      
            this.router.navigate(['/'])
              .then(() => {
                window.location.reload();
              });
          }
          else {
            alert('SignOut');
          }
        })
      };
    });

  }


  async createUserSession(response: any) {
    return this.authGurd.createUserSession(response);
  }

  /**
    * Get all authors
    * API:api/author/list
   */
  async getAllAuthors() {
    this.origin._API = this.origin._BASEURL + 'api/author/list';
    return this.networkService.getDB(this.origin._API);
  }

  /**
   * Get all authors
   * API:api/user/list
  */
  async getAllUsers() {
    this.origin._API = this.origin._BASEURL + 'api/user/list';
    return this.networkService.getDB(this.origin._API);
  }

  async changeUsersStatus(userId: number, isActive: number) {
    this.origin._API = this.origin._BASEURL + 'api/user/status/' + userId + '/' + isActive;
    return this.networkService.getDB(this.origin._API);
  }

}
