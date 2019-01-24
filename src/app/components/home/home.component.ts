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

    // carousel() {

    //     let x = (<HTMLElement[]><any>document.getElementsByClassName('mySlides'))[0];

    //     // let x : Array<HTMLElement> = [];
    //     // x = document.getElementsByClassName('mySlides');
    //     for (let i = 0; i < x.length; i++) {
    //     x[i].style.display = "none"; 
    // }
    // this.slideIndex++;
    // if (this.slideIndex > x.length) {
    //     this.slideIndex = 1
    // } 
    // x[this.slideIndex-1].style.display = "block"; 
    // setTimeout(this.carousel, 2000); 

    // }

