import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface myData{
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

  }
  /**
   * 
   * For development purpose, we need to proxy our request from our angular server to our remote server. 
   */

  getData(){
    return this.http.get<myData>('http://localhost:1234/file.php')

    // return this.http.get('http://localhost:1234/file.php')
    
  }
}
