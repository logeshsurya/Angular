import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly apiurl = "https://localhost:7275/api/";
  constructor(private http:HttpClient) { }

  addOrganisation(val:any){
    return this.http.post(this.apiurl+'Organisation/',val);
  }
}
