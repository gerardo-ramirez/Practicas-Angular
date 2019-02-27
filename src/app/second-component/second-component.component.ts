import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent  {
 users = ['juan','juana','bety','luis'];

  deleteUser ( user){
    for(let i = 0; i< this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i, 1);
      }
    }
  }
  addUser(nuevo){
    this.users.push(nuevo.value);
    nuevo.value="";
    return false;
  }



}
