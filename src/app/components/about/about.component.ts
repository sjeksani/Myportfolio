import { Component } from '@angular/core';
import { templates } from '../../services/template.service';
@Component({
selector: 'about-component',
template: templates.GetTemplate('about-component.html')
})

export class AboutComponent {
    constructor() {
    }
}
