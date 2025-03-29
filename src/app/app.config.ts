import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  {path: 'login', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent)},
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent),
    canActivate: [AuthGuard]
  },
  {path: 'education', loadComponent: () => import('./education/education.component').then(m => m.EducationComponent)},
  {
    path: 'experience',
    loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent)
  },
  {path: 'hobbies', loadComponent: () => import('./hobbies/hobbies.component').then(m => m.HobbiesComponent)},
  {path: 'languages', loadComponent: () => import('./languages/languages.component').then(m => m.LanguagesComponent)},
  {path: 'profile', loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)},
  {
    path: 'references',
    loadComponent: () => import('./references/references.component').then(m => m.ReferencesComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'login'}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    importProvidersFrom(ReactiveFormsModule)
  ]
};
