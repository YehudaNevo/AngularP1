import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  //ngOnInit() {}

  loadedFeature = 'recipe';
}
