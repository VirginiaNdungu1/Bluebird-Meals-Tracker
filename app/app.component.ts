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
  (newMealSender) = "addMeal($event)"
  ></create-meal>

  <div class="well">
    <meals-list
    [childMealList]="meals"
    (clickMealSender) = "showDetails($event)"
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
    new Meal("Breakfast", "Tea and bacon", 60),
    new Meal("Brunch", "Fruit and yoghurt", 20),
    new Meal("Lunch", "Mashed Potatoes with Chicken", 80),
    new Meal("Dinner", "Ugali with Spinach", 40)
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


}
