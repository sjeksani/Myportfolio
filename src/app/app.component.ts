import { Component } from '@angular/core';
import {templates} from './services/template.service';
@Component({
  selector: 'my-app',
  template: templates.GetTemplate('rootcomponent.html'),
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 constructor() {

 }
}
