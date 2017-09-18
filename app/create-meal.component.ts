  import {Component, Input, Output, EventEmitter } from '@angular/core';
  import { Meal } from './meal.model';

  @Component({
    selector: 'create-meal',
    template: `

  <div class ="well">
    <button (click)="displayCreateMealForm()" type="button" class="btn-lg">ADD MEAL</button>
  <div *ngIf="hideCreateMealForm">
  <h2>Create Meal</h2>
  <form>
  <div class ="form-group">
  <h3><label>Meal:</label></h3>
  <input #newMealName class ="form-control" placeholder ="Enter the name of the meal">
  </div>
  <div class ="form-group">
  <h3><label>Description:</label></h3>
  <input #newMealDescription class ="form-control" placeholder ="Enter description">
  </div>
  <div class ="form-group">
  <h3><label>Calories:</label></h3>
  <input #newMealCalories class ="form-control" placeholder ="Enter calories">
  </div>
  <button type="submit" class="btn-lg" autofocus (click)="createNewMeal(newMealName.value,newMealDescription.value,newMealCalories.value);
  newMealName.value='';
  newMealDescription.value='';
  newMealCalories.value=''">Create Meal</button>
  <button (click)="cancelCreateMeal()" type="button" class="btn-lg">Cancel</button>
  </form>
      </div>
      </div>
    `
  })

  export class CreateMealComponent{
// createNewMeal= null;
    @Output() newMealSender = new EventEmitter();
    createNewMeal(mealName: string,  description: string,  calories: number){
      var newMeal: Meal = new Meal(mealName,description,calories);
      this.newMealSender.emit(newMeal);
      this.hideCreateMealForm =  null;
    }
    hideCreateMealForm = null;
    displayCreateMealForm(){
      this.hideCreateMealForm =  "show the form now";
    }
    cancelCreateMeal(){
      this.hideCreateMealForm =  null;
    }
  }
