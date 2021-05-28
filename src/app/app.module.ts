import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookItemComponent } from './component/book-list/book-item/book-item.component';
import { BookInfoComponent } from './component/book-list/book-info/book-info.component'; 
import { SignupComponent } from './component/auth/signup/signup.component';
import { ValidationRules } from './models/validation-rules';
import { LoginComponent } from './component/auth/login/login.component';
import { BookAddComponent } from './component/operation/book-add/book-add.component';
import { AthourComponent } from './component/operation/athour/athour.component';
import { AdminComponent } from './component/operation/admin/admin.component';
import { UsersComponent } from './component/operation/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    BookInfoComponent, 
    SignupComponent, LoginComponent, BookAddComponent, AthourComponent, AdminComponent, UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ValidationRules],
  bootstrap: [AppComponent]
})
export class AppModule { }
