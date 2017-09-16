  import { Component } from '@angular/core';
  import { Meal } from './meal.model';

  @Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <div class="well">
      <h1>Bluebirds Meal Tracker</h1>
  </div>
  <div class="well">
  <create-meal (newMealSender) = "addMeal($event)"></create-meal>
  </div>
  <div class="well">
    <meals-list [childMealList]="meals"></meals-list>
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
  addMeal(newAddedMeal: Meal){
    this.meals.push(newAddedMeal);
  }
}
