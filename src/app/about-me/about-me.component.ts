import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  aboutText = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
  quote = `“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”`;
  miniText = `It is a long established fact that a reader will be distracted by the readable content.`;
}
