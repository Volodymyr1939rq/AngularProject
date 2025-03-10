import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name: string = 'Kevin C. Silva';
  @Input() jobTitle: string = 'Graphic & Web Designer';
  @Input() imageUrl: string = 'assets/image/myphoto.jpg';
  @Input() contacts = [
    { icon: 'fa-phone', text: '+1-718-310-5588' },
    { icon: 'fa-globe', text: 'www.yourwebsite.com' },
    { icon: 'fa-map-marker', text: '769 Prudence Street Lincoln Park' }
  ];
}

