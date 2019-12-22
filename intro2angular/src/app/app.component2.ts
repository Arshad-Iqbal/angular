import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component3.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent2 {
 
  records = {}
  constructor(private myFirstService : RecordsService){
   
  } 

  ngOnInit(){
    this.myFirstService.getData()[0].name="changed name"
    this.records= this.myFirstService.getData()
    //this.records[0].name="changed name"

  }
}
