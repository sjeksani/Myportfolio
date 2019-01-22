import { Component } from '@angular/core';
import { templates } from '../../services/template.service';
@Component({
selector: 'experience-component',
template: templates.GetTemplate('experience-component.html')
})

export class ExperienceComponent {
    constructor() {

    }
}