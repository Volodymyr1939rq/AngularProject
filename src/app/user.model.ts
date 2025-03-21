export class User {
  constructor(
    public username: string = '',
    public email: string = '',
    public password: string = '',
    public confirmPassword: string = ''
  ) {
  }

  static validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  static passwordMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
}
