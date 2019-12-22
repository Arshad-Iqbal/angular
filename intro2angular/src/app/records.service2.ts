import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

  }

  getData(){
    return [
      {
        name: 'Arshad',
        isOnline: true
      },
      {
        name: 'Iqbal',
        isOnline: false
      },
      {
        name: 'Kaif',
        isOnline: true
      }
    ]
  }
}
