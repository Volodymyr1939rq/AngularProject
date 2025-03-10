import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

interface Skill {
  name: string;
  level: number; // рівень володіння у відсотках
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsLeft: Skill[] = [
    {name: 'Adobe Photoshop', level: 90},
    {name: 'Microsoft Word', level: 85}
  ];

  skillsRight: Skill[] = [
    {name: 'Adobe Illustrator', level: 80},
    {name: 'Microsoft PowerPoint', level: 75}
  ];
}
