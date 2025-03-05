import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
languages=[
  {name:'English',percentage:95},
  {name:'German',percentage:60},
  {name:'Spanish',percentage:45}
];
}
