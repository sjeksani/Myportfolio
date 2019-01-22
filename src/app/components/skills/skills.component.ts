import {Component} from '@angular/core';
import { templates } from '../../services/template.service';

@Component({
    selector: 'skills-component',
    template: templates.GetTemplate('my-skills.html')
})

export class MySkills {
    constructor() {
        
    }
}