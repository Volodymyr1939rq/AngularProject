import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
Skills=[
  { name:'Adobe Photoshop',level:90 },
  { name:'Microsoft Word',level:85 },
  { name:'Adobe Illustrator',level:80 },
  { name:'Microsoft PowerPoint',level:75 }
];
}
