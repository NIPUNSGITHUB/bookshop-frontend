import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from 'src/app/services/user/user.service';
import { ValidationRules } from 'src/app/models/validation-rules';
import { Origin } from 'src/app/models/origin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;
  origin = new Origin
  emailErr = '';

  constructor(private userService: UserService, private formBuilder: FormBuilder, private validationRules: ValidationRules, private router: Router,) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.validationRules.email)]],
    password: ['', [Validators.required, Validators.minLength(this.validationRules.password)]]
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter valid email address' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password need minimum 8 characters' }
    ]
  }


  async userSignIn() {
    this.origin._API = this.origin._BASEURL + "api/login";
    (await this.userService.signIn(this.origin._API, this.user)).subscribe(async (response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          this.userService.createUserSession(response.body).then(res => {
            if (res) {
              this.router.navigate(['/'])
                .then(() => {
                  window.location.reload();
                });
            }
            else {
              alert('Login Fail');
            }
          })
        }

      }

    }, error => {
      alert(error.error['message']);

    });

  }

}
