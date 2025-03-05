import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
profile=
  {
    image:'',
    name:'Kevin C.Silva',
    position:'Graphic & Web Designer'
  };
}
