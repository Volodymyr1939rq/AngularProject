import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
hobbies=[
  {icon:'fa-plane',title:'Travelling'},
  {icon:'fa-gamepad',title:'Gaming'},
  {icon:'fa-music',title:'Music'},
  {icon:'fa-dumbbell',title:'Gym'}
];
}
