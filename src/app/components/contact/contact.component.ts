import { Component } from '@angular/core';
import { templates } from '../../services/template.service';
@Component({
selector: 'contact-component',
template: templates.GetTemplate('contact-component.html')
})

export class ContactComponent {
    constructor() {

    }
}