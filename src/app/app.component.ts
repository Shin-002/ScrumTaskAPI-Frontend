import { Component } from '@angular/core';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScrumTaskBord';
  faSpa = faSpa
  faSnowflake = faSnowflake
}
