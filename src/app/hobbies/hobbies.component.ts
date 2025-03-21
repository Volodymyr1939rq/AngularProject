import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl} from '@angular/forms';
import {UserService} from '../services/user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  public userForm: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {validator: this.passwordMatchValidator});

    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => (this.users = users),
      error: (error: any) => console.error('Помилка при завантажуванні користувачів:', error)
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
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

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        confirmPassword: this.userForm.value.confirmPassword
      };

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
