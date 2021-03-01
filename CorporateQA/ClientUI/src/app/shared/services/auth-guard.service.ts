import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authenticationService:AuthenticationService,
    public router:Router,
  
  ) { }

  canActivate(route:ActivatedRouteSnapshot):boolean{
    var role=route.data.role;
    if(this.authenticationService.isAuthenticated() && role==localStorage.getItem("role")){
      return true;
    }else{
      this.router.navigate(['authentication']);
      return false;
      
    }
  }
}
