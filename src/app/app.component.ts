import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openedMenu: Boolean = false;

  constructor(private router: Router) {}

  menuItems = [
    { name: 'Schedules', link: 'schedules'},
    { name: 'Online Registration', link: '#'},
    { name: 'Lessons', link: '#'},
    { name: 'Hockey', link: '#'},
    { name: 'Figure Skating', link: '#'},
    { name: 'Parties', link: '#'},
    { name: 'Special Programs', link: '#'},
    { name: 'Pro Shop', link: '#'},
    { name: 'Public Skating', link: '#'}
  ];

  toggleHamburger() {
    (this.openedMenu ? this.openedMenu = false : this.openedMenu = true);
  }

  changeRoute(link: string) {
    this.router.navigateByUrl(`/${link}`);
    this.openedMenu = false;
  }
}
