import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
hobbies=[
  {icon: 'fas fa-plane', title: 'Travelling'},
  {icon: 'fas fa-gamepad', title: 'Gaming'},
  {icon: 'fas fa-music', title: 'Music'},
  {icon: 'fas fa-dumbbell', title: 'Gym'}
];
}
