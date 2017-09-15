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

}
