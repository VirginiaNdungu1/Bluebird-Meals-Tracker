  import { Component, Output, EventEmitter } from '@angular/core';
  import { Meal } from './meal.model';

  @Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <div class="well">
    <div class="heading">
      <h1>Bluebirds Meal Tracker</h1>
    </div>

  </div>

  <create-meal
  [childMealToAdd]= "mealToAdd"
  (newMealSender) = "addMeal($event)"

  ></create-meal>

  <div class="well">
    <meals-list
    [childMealList]="meals"
    (clickMealSender) = "showDetails($event)"
    (clickCreateMealFormSender) = "displayCreateMeal()"
      ></meals-list>
  </div>

  <div class="well">
    <edit-meals
[childSelectedMeal] ="selectedMeal"
(editBtnClickedSender) ="onEditMealBtn()"
    ></edit-meals>
  </div>
    </div>
    `
  })

  export class AppComponent {
  public meals: Meal[]=[
    new Meal("Breakfast", "Tea and bacon", 40),
    new Meal("Lunch", "Mashed Potatoes with Chicken", 20),
    new Meal("Dinner", "Ugali with Spinach", 10)
  ];

  //new meal
  addMeal(newAddedMeal: Meal){
    this.meals.push(newAddedMeal);
  }

selectedMeal: Meal = null;
showDetails(mealToEdit: Meal){
  this.selectedMeal = mealToEdit;
}

  onEditMealBtn(){
    this.selectedMeal = null;
  }
mealToAdd: Meal = null;
  displayCreateMeal(){
this.mealToAdd = null;
  }
}
