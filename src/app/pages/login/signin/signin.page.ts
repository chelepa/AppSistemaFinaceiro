import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string = "";
  password: string = "";

  constructor(
    private route: Router,
  ) { }

  ngOnInit() {

  }

  signIn() {
    console.log(this.email);
    console.log(this.password);
  }

  register() {
    this.route.navigate(['signup']);
  }

  resetPassword() {

  }
}
