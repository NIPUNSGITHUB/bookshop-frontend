import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private http: HttpClient) { }

  // insertData(endPointURL, data, header) { 

  //   alert(JSON.stringify(data));
  //   const body=JSON.stringify(data);
  //   this.http.post('', body , header).subscribe(async (response) => { 
     
  //   }, error => {
  //     alert('----' + JSON.stringify(error))
      
  //   });

  // }
}
