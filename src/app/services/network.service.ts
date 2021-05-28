import { Injectable } from '@angular/core';
import { Origin } from '../models/origin';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  user = new User
  constructor(private http: HttpClient) {
    this.user.token = sessionStorage.getItem('token')
  }


  postDB(_API: string, data: any) {
    const headers = new HttpHeaders()
      .set('Authorization', this.user.token != null ? this.user.token : '')
    return this.http.post(_API, data, { headers: headers, observe: 'response' });
  }

  getDB(_API: string) {
    const headers = new HttpHeaders()
      .set('Authorization', this.user.token != null ? this.user.token : '')
    return this.http.get(_API, { headers: headers, observe: 'response' });
  }

  deleteDB(_API: string) {
    const headers = new HttpHeaders()
      .set('Authorization', this.user.token != null ? this.user.token : '')
    return this.http.delete(_API, { headers: headers, observe: 'response' })
  }

  putDB(_API: string) {
    const headers = new HttpHeaders()
      .set('Authorization', this.user.token != null ? this.user.token : '');
    return this.http.put(_API, { headers: headers, observe: 'response' })
  }




}
