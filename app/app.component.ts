import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class="well">
    <h1>Bluebirds Meal Tracker</h1>
</div>
<div class="well">
  <meals-list></meals-list>
</div>
  </div>
  `
})

export class AppComponent {
  // public meals: Meal[] = [
  //   new Meal("Learn Kung Fu", 1),
  //   new Meal("Go swimming", 2),
  //   new Meal("Create a To-Do List App",3)
  // ];
}
