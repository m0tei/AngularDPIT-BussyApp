import { Component } from '@angular/core';
import { ReadBussesService } from './services/read-busses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bussy-app';
  constructor(private readBusses: ReadBussesService) { 
  }
}
