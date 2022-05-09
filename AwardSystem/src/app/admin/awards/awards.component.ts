import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AwardType } from 'Models/AwardType';
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

 
  @Input() awdsrc: string ="https://localhost:7275/api/AwardType/GetAll";
  totalLength: any;
  page: number = 1;
  

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http
      .get<any>(this.awdsrc)
      .subscribe((data) => {
        this.data = data;
        this.totalLength = data.length;
        console.log(data)
       
      });
      
  }

  public data: AwardType[] = [];
}
