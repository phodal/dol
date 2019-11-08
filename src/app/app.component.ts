import { Component } from '@angular/core';
import * as localForage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dismember';


  constructor() {
    localForage.config({
      driver      : localForage.WEBSQL, // Force WebSQL; same as using setDriver()
      name        : 'pao',
      version     : 0.1,
      size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName   : 'pao', // Should be alphanumeric, with underscores.
      description : 'some description'
    });
  }
}
