import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  currentDay: any;
  currentMonth: any;
  currentYear: any;
  ngOnInit(): void {
    this.currentMonth = new Date().toLocaleString('default', { month: 'short' });
    this.currentDay = new Date().getDay();
    this.currentYear = new Date().getFullYear();
  }

  logOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.authenticationService.setUserId();
    this.router.navigate(['authentication']);
  }

}
