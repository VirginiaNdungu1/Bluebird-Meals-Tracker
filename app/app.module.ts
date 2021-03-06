
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {DisplayMealComponent} from './display-meal.component';
import {CreateMealComponent} from './create-meal.component';
import {EditMealComponent} from './edit-meal.component';
import {CaloriesPipe} from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations:[
     AppComponent,
     DisplayMealComponent,
     CreateMealComponent,
     EditMealComponent,
     CaloriesPipe
   ],

  bootstrap:[ AppComponent ]
})

export class AppModule { }
