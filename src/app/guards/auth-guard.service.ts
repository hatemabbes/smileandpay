import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public auth: GlobalVariablesService) {}
 
  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
