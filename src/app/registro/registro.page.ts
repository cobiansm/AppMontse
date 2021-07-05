import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
personas=[];
email="";
contra="";
  constructor(public navParams: NavParams, private routr: Router, public alertCtrl: AlertController, public storage: Storage) { 
    this.personas=this.navParams.get('personas');
  }

  ngOnInit() {
  }

  registro() {
    if (this.email.length > 0 && this.contra.length > 0){
      this.personas.push({email: this.email, contra: this.contra});
      const alert = this.alertCtrl.create({
        header: '¡Bien!',
        subHeader: 'Tu usuario se ha creado',
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
      
      this.storage.set('perfiles', JSON.stringify(this.personas));
      if (this.personas.length > 0) {
        //console.log(this.email, this.contra, this.personas);
      }
    } else {
     const alert = this.alertCtrl.create({
       header: 'Error',
       subHeader: 'A tu perfil le hacen falta datos',
       buttons: ['OK']
     }).then(res => {
      res.present();
    });
    }
  }

}
