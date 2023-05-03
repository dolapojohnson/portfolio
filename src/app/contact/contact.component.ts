import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../services/toastrservice/toastr.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactSectionTitle: string = 'contact';

  constructor(private notifyService: ToasterService) { }

  ngOnInit(): void {
  }

  notifyUser() {
    this.notifyService.showInfo("Sorry, you can't contact us now");
    console.log('1')
  }

}
