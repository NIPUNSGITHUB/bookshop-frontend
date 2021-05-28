import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { BookListComponent } from "./component/book-list/book-list.component";
import { LoginComponent } from "./component/auth/login/login.component";

//Admin
import { AdminComponent } from "./component/operation/admin/admin.component";
import { AthourComponent } from "./component/operation/athour/athour.component";
import { AuthGurdService } from "./services/authgurd/auth-gurd.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookListComponent,

  },
  {
    path: 'signin',
    pathMatch: 'full',
    component: LoginComponent,
   
  },
  {
    path: 'admin/book',
    pathMatch: 'full',
    component: AdminComponent,
    //canActivate: [AuthGurdService]

  },
  {
    path: 'author/book',
    pathMatch: 'full',
    component: AthourComponent,
    //canActivate: [AuthGurdService]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
