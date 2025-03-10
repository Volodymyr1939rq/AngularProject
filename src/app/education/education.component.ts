import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  showMore: boolean = false;
education=[
  {
date:'2013-2015',
    degree:'Master Degree Graduate',
    university:'Stanford University',
    description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    date:'2007-2010',
    degree:'Bachelor Degree',
    university:'Chicago University',
    description:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
];
toggleShowMore(){
  this.showMore=!this.showMore;
}
}
