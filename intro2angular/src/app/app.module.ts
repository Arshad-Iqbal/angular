import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { RecordsService} from './records.service';

@NgModule({
  // and whenever you are writing your own component or directive or pipe, you'll need to put that into this "declarations"
  declarations: [
    AppComponent,
    HelloComponent
  ],
  // import is used to add feature based modules into your main application.
  // whenever you are importing some different module into your app, you need to put that into this "import" section.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // injecting service modulue to providers means that the service would be available to every component which request it. 
  providers: [RecordsService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
