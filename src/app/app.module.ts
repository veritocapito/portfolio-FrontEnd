import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecAboutComponent } from './components/sec-about/sec-about.component';
import { SecEducationComponent } from './components/sec-education/sec-education.component';
import { SecProjectsComponent } from './components/sec-projects/sec-projects.component';
import { SecSkillsComponent } from './components/sec-skills/sec-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SecAboutComponent,
    SecEducationComponent,
    SecProjectsComponent,
    SecSkillsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
