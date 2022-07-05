import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './projects/project-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
