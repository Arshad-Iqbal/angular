import { Component } from '@angular/core';
import { RecordsService } from './records.service';

interface myData{
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'intro2angular';
  myVariable = 'App'
  myDisabledValue = false
  text = "some text value initialised in component"
  ngModelText = "text for NgModel"
  records = []

  constructor(private myFirstService : RecordsService){
   
  } 

  updateValue(e){
    this.text=e.target.value
    console.log(this.text)
  }
  callMyFunction(){
    this.myDisabledValue = !this.myDisabledValue
    console.log("Button clicked..")
  }

  ngOnInit(){
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj
      console.log("we got ",data.obj)      
    })
  }
}
