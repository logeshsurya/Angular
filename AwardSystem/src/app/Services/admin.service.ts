import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }



getadmin(){
  const admin =[ 
    {
      adminId:10, adminName: 'rolestar'},
      { adminId:20, adminName: 'gladiator'},
      { adminId:20, adminName: 'gladiator'}
    
  ];
  return admin;
}

}
