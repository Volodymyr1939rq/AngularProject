export class User {
  public username: string = '';
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  static fromObject(obj: Partial<User>): User {
    const user = new User();
    user.username = obj.username?.trim() || '';
    user.email = obj.email?.trim() || '';
    user.password = obj.password || '';
    user.confirmPassword = obj.confirmPassword || '';
    return user;
  }

  static validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  }

  static passwordsMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }

  isValid(): boolean {
    return (
      this.username.length > 0 &&
      User.validateEmail(this.email) &&
      this.password.length >= 6 &&
      User.passwordsMatch(this.password, this.confirmPassword)
    );
  }

  getValidationErrors(): string[] {
    const errors: string[] = [];

    if (!this.username.trim()) {
      errors.push('Імʼя користувача обовʼязкове.');
    }

    if (!User.validateEmail(this.email)) {
      errors.push('Некоректна електронна адреса.');
    }

    if (this.password.length < 6) {
      errors.push('Пароль повинен містити щонайменше 6 символів.');
    }

    if (!User.passwordsMatch(this.password, this.confirmPassword)) {
      errors.push('Паролі не збігаються.');
    }

    return errors;
  }
}


