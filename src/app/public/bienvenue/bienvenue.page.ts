import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  navigateToLoginPage(){
    this.router.navigate(['login'])
  }
}
