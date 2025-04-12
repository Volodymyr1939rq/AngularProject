import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../user.model';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  apiUrl = 'http://localhost:3000/register';
  usersUrl = 'http://localhost:3000/users';
  loginUrl = 'http://localhost:3000/login';
  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log('Відправляються дані на сервер', user);
    return this.http.post<User>(this.apiUrl, user, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error details: ', error);
        return throwError(() => new Error('Помилка при реєстрації користувача'));
      })
    );
  }

  login(user: { email: string, password: string }): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    console.log('Метод login викликано з даними:', user);
    return this.http.post<User>(this.loginUrl, user, {headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Login error:', error);
        return throwError(() => new Error('Помилка входу'));
      })
    );
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching users: ', error);
        return throwError(() => new Error('Помилка при отриманні користувачів'));
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
