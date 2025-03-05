import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
education=[
  {
date:'2013-2015',
    degree:'Master Degree Graduate',
    university:'Stanford University',
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
  },
  {
    date:'2007-2010',
    degree:'Bachelor Degree',
    university:'Chicago University',
    description:`Lorem Ipsum has been the industry's standard dummy text.`
  }
];
}
