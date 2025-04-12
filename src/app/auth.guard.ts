import {inject, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './services/user.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  private userService = inject(UserService)
  private router = inject(Router)

  canActivate(): boolean | import("@angular/router").UrlTree {
    const isAuth = this.userService.isAuthenticated();

    if (!isAuth) {
      return this.router.createUrlTree(['/auth']);//подивитися
    }

    return true;
  }
}
