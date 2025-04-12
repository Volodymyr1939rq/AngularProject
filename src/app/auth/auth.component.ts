import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class AuthComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      console.log('Вхідні дані:', email, password);
      this.userService.login({email, password}).subscribe({
        next: (response) => {
          console.log('Успішний вхід:', response);
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/profile']);
          });

        },
        error: (err) => {
          console.error('Помилка входу:', err);
          alert('Неправильний пароль або логін')
        },
      });
    }
  }
}
