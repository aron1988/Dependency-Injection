import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Simple } from './child/simpleService';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Simple ],
  bootstrap: [AppComponent]
})
export class AppModule { }
