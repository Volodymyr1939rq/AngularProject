import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGlobe, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name: string = 'Kevin C. Silva';
  @Input() jobTitle: string = 'Graphic & Web Designer';
  @Input() imageUrl: string = 'assets/image/myphoto.jpg';

  // Використовуємо імпортовані іконки
  @Input() contacts = [
    {icon: faPhone, text: '+1-718-310-5588'},
    {icon: faGlobe, text: 'www.yourwebsite.com'},
    {icon: faMapMarkerAlt, text: '769 Prudence Street Lincoln Park'}
  ];
}


