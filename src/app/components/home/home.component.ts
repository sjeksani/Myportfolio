import { Component } from '@angular/core';
import { templates } from '../../services/template.service';
@Component({
selector: 'home-component',
template: templates.GetTemplate('home-component.html'),
styleUrls: ['./home.component.css']
})

export class HomeComponent {

    items: Array<any> = []
    
    constructor() {

        this.items = [
            { name: 'assets/images/mypicture.jpg' },
            { name: 'assets/images/img.jpeg' }
          ]
        }

    }

