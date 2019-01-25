import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './appRoutingModule';
import {MySkills} from './components/skills/skills.component'
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule} from '@angular/material';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatToolbarModule, MatIconModule, BrowserAnimationsModule],
  declarations: [ AppComponent, HomeComponent, MySkills, AboutComponent, ExperienceComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
