import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompleteMaterialModule } from '../shared/angular-material-modules';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './projects/project-details.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { MediumComponent } from './medium/medium.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,
    MediumComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CompleteMaterialModule,
    ToastrModule.forRoot()
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
