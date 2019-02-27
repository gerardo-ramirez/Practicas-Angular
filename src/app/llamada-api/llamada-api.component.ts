import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';




@Component({
  selector: 'app-llamada-api',
  templateUrl: './llamada-api.component.html',
  styleUrls: ['./llamada-api.component.css']
})
export class LlamadaApiComponent implements OnInit {
  posts=[];

  constructor(private data: DataService) {
    this.data.getData().subscribe(data=>{
      this.posts=data
    })

   }

  ngOnInit() {
  }

}
