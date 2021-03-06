import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  yourName: string = 'Dolapo';
  devStack: string = 'Frontend Developer';
  sectionTitle: string = 'About Me';
  aboutMeImageUrl: string = '../assets/images/johndoe.jpg';

// a goToUrl method that directs the user to the external resume page
  goToUrl(): void {
    window.open('https://www.linkedin.com/in/dolapo-johnson/', '_blank');
  }
}
