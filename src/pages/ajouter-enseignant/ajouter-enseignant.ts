import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Enseignant} from "../../Models/Enseignant";
import {EnseignantService} from "../../Services/Enseignant.Service";

/**
 * Generated class for the AjouterEnseignantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-enseignant',
  templateUrl: 'ajouter-enseignant.html',
  providers:[EnseignantService],
})
export class AjouterEnseignantPage implements AfterViewInit{

  ngAfterViewInit(): void {
    if(!this.navParams.get('exist')){
      document.getElementById('x').innerHTML = 'Edit';
    }
  }
  newEnseignant: Enseignant = new Enseignant();
  valide = false;




constructor(public navCtrl: NavController
            ,public navParams: NavParams
            ,public viewCtrl: ViewController
            ,public enseignantService : EnseignantService) {
    if(!navParams.get('exist')) {
      this.newEnseignant = navParams.data;
    }
  }
  validate(){
    let a = true;
    if (!this.newEnseignant.nom || this.newEnseignant.nom.trim().length < 1) {
      a = false;
    }
    if (!this.newEnseignant.prenom || this.newEnseignant.prenom.trim().length < 1) {
      a = false;
    }
    if (!this.newEnseignant.tel || this.newEnseignant.tel.trim().length < 1) {
      a = false;
    }
    if (!this.newEnseignant.mail || this.newEnseignant.mail.trim().length < 1) {
      a = false;
    }
    this.valide=a;
  }

  addEnseignant(){
    if(!this.navParams.get('exist')){
      this.enseignantService.editEnseignant(this.newEnseignant,this.newEnseignant.id).subscribe();
      this.dismiss();
    }else{
      this.enseignantService.putEnseignant(this.newEnseignant).subscribe();
      this.dismiss();
    }

  }
  dismiss() {
    if(!this.navParams.get('exist')){
      this.viewCtrl.dismiss();
    }else
    {
      this.viewCtrl.dismiss(this.newEnseignant);
    }

  }
}
