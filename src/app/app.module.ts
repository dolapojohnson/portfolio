import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './projects/project-details.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';




@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
