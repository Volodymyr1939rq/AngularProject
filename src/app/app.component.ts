import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './head/header/header.component';
import {FooterComponent} from './foot/footer/footer.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ReferencesComponent} from './references/references.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ProfileComponent} from './profile/profile.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {LanguagesComponent} from './languages/languages.component';
import {HobbiesComponent} from './hobbies/hobbies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ExperienceComponent, EducationComponent, ReferencesComponent, SkillsComponent, ContactsComponent, ProfileComponent, AboutMeComponent, LanguagesComponent, HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebstormProjects';
}
