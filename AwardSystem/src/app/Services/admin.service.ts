import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


interface admin{
  name:string;
  email:string;
  phonenumber:number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpClient: any;
 

  constructor(private http:HttpClient) { }


  




getadmin():Observable<admin>{


  const headers = new HttpHeaders(
    {
      'content-type': 'application/json',
      'authenticationToken': '12345'
    }
  );

  const  params = new HttpParams()
    .set('pageNum', '10')
    .set('pageSize', '100')
  
  
  return this.http.get<admin>('https://jsonplaceholder.typicode.com/users',{headers:headers, params:params})
//   const admin =[ 
//     {
//       adminId:10, adminName: 'rolestar'},
//       { adminId:20, adminName: 'gladiator'},
//       { adminId:20, adminName: 'gladiator'}
    
//   ];
//   return admin;
// }

}

getOneEmployee(id: string)
{
  return this.httpClient.get('https://localhost:7275/api/Designation/GetById/'+id);
}



}



