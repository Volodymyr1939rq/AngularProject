import {Component} from '@angular/core';
import {ReactiveFormsModule,} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WebstormProjects';
  islogged: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const tokenExists = !!localStorage.getItem('token');
        const onLoginPage = event.url === ('/login');
        this.islogged = tokenExists && !onLoginPage
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.islogged = false;
    this.router.navigate(['/auth']);
  }


}
