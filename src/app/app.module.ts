import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompleteMaterialModule } from '../shared/angular-material-modules';

import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './projects/project-details.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    CompleteMaterialModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
