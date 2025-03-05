import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
experiences=[
  {
    date:'2020-Present',
    title:'Senior Web Designer',
    company:'Creative Agency',
    location:'Chicago',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen.`
  },
  {
    date: '2015 - 2020',
    title: 'Graphic Designer',
    company: 'Creative Market',
    location: 'United Kingdom',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen.`
  },
  {
    date: '2013 - 2015',
    title: 'Marketing Manager',
    company: 'Marketing Agency',
    location: 'United Kingdom',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen.`
  }
];
}
