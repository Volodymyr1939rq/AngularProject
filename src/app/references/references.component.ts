import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
references=[
  {
    name:'Darwin B.Magana',
    address:'2813 Shobe Lane Mancos, CO.',
    phone:'+1-970-533-3393',
    email:'www.yourwebsite.com'
  },
  {
    name:'Robert J.Belvin',
    address:'2119 Fairfax Drive Newark, NJ.',
    phone:'+1-908-987-5103',
    email:'www.yourwebsite.com'
  }
];
}
