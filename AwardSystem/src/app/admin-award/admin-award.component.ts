import { Component, Input, OnInit } from '@angular/core';
import { AwardType } from 'Models/AwardType';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-award',
  templateUrl: './admin-award.component.html',
  styleUrls: ['./admin-award.component.css']
})
export class AdminAwardComponent implements OnInit {

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
