import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private cliente : HttpClient) {

   
   } 
   getData(){
      return this.cliente.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }
    
}
