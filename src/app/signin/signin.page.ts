import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
personas=[];
pass_rcb="";
email_rcb="";
  constructor(private router: Router, public alert: AlertController, public navParams: NavParams) {
    this.personas=this.navParams.get('personas');
  }

  ngOnInit() {
  }

  login() {
    let index = this.personas.findIndex(persona => persona.email == this.email_rcb && persona.contra == this.pass_rcb);
    if (index > 0) {
     const alert = this.alert.create({
       header: 'Bienvenido de nuevo',
       subHeader: 'Ya te habías registrado antes'
     }).then(res => {
      res.present();
     });
    }
  }

}
