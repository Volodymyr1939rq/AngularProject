import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
contacts=[
  {icon: 'fa-phone',text:'+1-718-310-5588'},
  { icon: 'fa-globe', text: 'www.yourwebsite.com' },
  { icon: 'fa-map-marker', text: '769 Prudence Street Lincoln Park' }
];
}
