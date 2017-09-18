import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meals',
  template: `
<div *ngIf="childSelectedMeal">

<div class ="form-group" >
<h3><label>Meal:</label></h3>
<input [(ngModel)] ="childSelectedMeal.mealName"class ="form-control" placeholder ="Enter the name of the meal">
</div>
<div class ="form-group">
<h3><label>Description:</label></h3>
<input [(ngModel)] ="childSelectedMeal.description" class ="form-control" placeholder ="Enter description">
</div>
<div class ="form-group">
<h3><label>Calories:</label></h3>
<input [(ngModel)] ="childSelectedMeal.calories" class ="form-control" placeholder ="Enter calories">
</div>
<button type ="submit" class="btn-lg" autofocus (click)="editBtnClicked()"
>EDIT MEAL</button>
<button type="button" class="btn-lg" (click)="cancelEditMealBtn()">Cancel Edit</button>
</div>
  `
})

export class EditMealComponent{
@Input () childSelectedMeal: Meal;
@Output () editBtnClickedSender = new EventEmitter();
editBtnClicked(){
  this.editBtnClickedSender.emit();
}
cancelEditMealBtn(){
  this.childSelectedMeal=null;
}
}
