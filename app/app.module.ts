import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {DisplayMealComponent} from './display-meal.component';

@NgModule({
  imports: [BrowserModule],
  declarations:[
     AppComponent,
     DisplayMealComponent
   ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
