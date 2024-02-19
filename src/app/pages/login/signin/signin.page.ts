import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController
  ) { }

  ngOnInit() {

  }

  async mensagem(mensagem: any, cor: any){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor
    });
    toast.present();
  }

  signIn() {
    console.log(this.email);
    console.log(this.password);
    this.mensagem('teste Chelepa', 'success');
  }

  register() {
    this.route.navigate(['signup']);
  }

  resetPassword() {

  }
}
