import {Component, OnInit} from '@angular/core';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ReferencesComponent} from './references/references.component';
import {SkillsComponent} from './skills/skills.component';
import {ProfileComponent} from './profile/profile.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {LanguagesComponent} from './languages/languages.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from './user.model';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule, ExperienceComponent, EducationComponent, ReferencesComponent, SkillsComponent, ProfileComponent, AboutMeComponent, LanguagesComponent, HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
    this.registrationForm.get('confirmPassword')?.setValidators([
      Validators.required,
      (control) => this.passwordMatchValidator(control),
    ]);
  }

  passwordMatchValidator(control: any) {
    if (this.registrationForm) {
      const password = this.registrationForm.get('password')?.value;
      if (password !== control.value) {
        return {passwordsDoNotMatch: true};
      }
    }
    return null;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValue = this.registrationForm.value;
      const user = new User(
        formValue.username,
        formValue.email,
        formValue.password,
        formValue.confirmPassword
      );
      if (!User.validateEmail(user.email)) {
        console.error('Invalid email format');
        return;
      }
      if (!User.passwordMatch(user.password, user.confirmPassword)) {
        console.error('Password do not match');
        return;
      }
      this.userService.register(user).subscribe(
        (response: any) => {
          console.log('Registration successful ', response);
        },
        (error: any) => {
          console.log('Registration failed', error);
        }
      );
    } else {
      console.log('Form is not valid')
    }

  }
  title = 'WebstormProjects';
}
