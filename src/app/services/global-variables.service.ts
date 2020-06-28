import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  authenticationState = new BehaviorSubject(false);
  transactions = new BehaviorSubject(null);
  currentRoute = new BehaviorSubject('');
  constructor() { }

  isAuthenticated() {
    return this.authenticationState.value;
  }
  unauthorizeUser() {
    this.authenticationState.next(false)
  }
  authorizeUser() {
    this.authenticationState.next(true)
  }
  changeCurrentRoute(currentRoute) {
    this.currentRoute.next(currentRoute)
  }
  getCurrentRoute() {
    return this.currentRoute.value;
  }
  changeTransactions(transactions) {
    this.transactions.next(transactions)
  }
  getTransactions() {
    return this.transactions.value;
  }
}