    import {Component, Input, Output, EventEmitter} from '@angular/core';
    import { Meal } from './meal.model';

    @Component({
      selector: 'meals-list',
      template: `
    <div class="well">

    <div class ="displayMeals">
    <h2>MEALS LOG DISPLAY</h2>
      <div class="displayMealHeading">
        <select (change)="menuSelected($event.target.value)">
          <option value="highCalories" >High Calorie Meals</option>
          <option value="lowCalories">Low Calories Meals</option>
          <option value="allMeals" selected="selected">All Meals</option>
        </select>
     </div>
        </div>
        <div class="displayMeal" *ngFor="let meal of childMealList | caloriesCount:selectedCalories">
          <table>
        <tr>
          <td>{{meal.mealName}}</td>
          <td>{{meal.description}}</td>
          <td>{{meal.calories}}</td>
          <td><button class="editbtn" (click)="editSelectedMeal(meal)">Edit</button></td>
        </tr>
        </table>
      </div>
        </div>
      `
    })

    export class DisplayMealComponent{
    @Input() childMealList: Meal[];
    @Output() clickMealSender = new EventEmitter();
    editSelectedMeal(clickedMeal: Meal){
      this.clickMealSender.emit(clickedMeal);
    }
    public selectedCalories: string = "allMeals";
    menuSelected(optionFromMenu) {
      this.selectedCalories = optionFromMenu;
      console.log(this.selectedCalories);
    }

}
