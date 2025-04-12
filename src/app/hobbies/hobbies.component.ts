import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  users: User[] = [];

  private fb = inject(NonNullableFormBuilder);
  private userService = inject(UserService);

  public userForm: FormGroup = this.fb.group(
    {
      username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    },
    {
      validators: this.passwordMatchValidator
    }
  );

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => (this.users = users),
      error: (error: any) => console.error('Помилка при завантажуванні користувачів:', error)
    });
  }

  passwordMatchValidator(form: AbstractControl): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  public get username(): AbstractControl | null {
    return this.userForm.get('username');
  }

  public get email(): AbstractControl | null {
    return this.userForm.get('email');
  }

  public get password(): AbstractControl | null {
    return this.userForm.get('password');
  }

  public get confirmPassword(): AbstractControl | null {
    return this.userForm.get('confirmPassword');
  }

  public onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.getRawValue();

      this.userService.register(newUser).subscribe({
        next: () => {
          this.loadUsers();
          this.userForm.reset();
          alert('Реєстрація успішна!');
        },
        error: (error: any) => {
          console.error('Помилка при реєстрації користувача:', error);
          alert('Сталася помилка при реєстрації. Спробуйте ще раз.');
        }
      });
    } else {
      alert('Форма має помилки. Перевірте введені дані.');
    }
  }

  hobbies = [
    {icon: 'fas fa-plane', title: 'Travelling'},
    {icon: 'fas fa-gamepad', title: 'Gaming'},
    {icon: 'fas fa-music', title: 'Music'},
    {icon: 'fas fa-dumbbell', title: 'Gym'}
  ];
}
