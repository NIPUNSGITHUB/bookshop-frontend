import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/app/models/user';
//import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService {
  user = new User
  isLoggedIn: boolean = false;
  sessionStorageLength = 5;
  constructor(private router: Router) { }

  //Check User Session availablility
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (sessionStorage.length == this.sessionStorageLength) {
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['/signin'], { replaceUrl: true });
      return false;
    }
    return this.isLoggedIn;
  }

  async checkUserSession(): Promise<any> {
    var data = {};
    if (sessionStorage.length == this.sessionStorageLength) {
      data = {
        status: true,
        profile: {
          userName: sessionStorage.getItem('name'),
          isAdmin: sessionStorage.getItem('isAdmin')
        }

      }
      return data;
    }
    else {
      data = {
        status: false,
        profile: {}
      }

      return data;

    }

  }

  //Create User Session
  async createUserSession(response: any): Promise<boolean> {
    //Space is must (Bearer )
    length = 0;
    this.user.token = 'Bearer ' + response.data.token
    this.user.name = response.data.name;
    this.user.email = response.data.email;
    this.user.isAdmin = response.data.isAdmin;
    this.user.id = response.data.id;
    this.user.password = '';
 
    await sessionStorage.setItem('token', this.user.token)
    await sessionStorage.setItem('name', this.user.name)
    await sessionStorage.setItem('email', this.user.email)
    await sessionStorage.setItem('isAdmin', this.user.isAdmin.toString())
    await sessionStorage.setItem('userId', this.user.id.toString())

    if (sessionStorage.length == this.sessionStorageLength) {
      return true;
    } else {
      return false;
    }
  }

  //Destroy User Session  
  async destroyUserSession(): Promise<boolean> {
    await sessionStorage.clear();
    if (sessionStorage.length == this.sessionStorageLength)
      return true;
    else
      return false;
  }

}
