import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  nome: any;
  cpf: any;
  email: any;
  senha: any;
  lastName: any;
  cell: any;
  conf_senha: any;

  constructor(
    private route: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  return() {
    this.route.navigate(['signin']);
  }

  register() {
    this.route.navigate(['signup']);
  }

}
