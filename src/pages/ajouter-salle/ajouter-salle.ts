import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Salle} from "../../Models/Salle";
import {SalleService} from "../../Services/Salle.Service";

/**
 * Generated class for the AjouterSallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-salle',
  templateUrl: 'ajouter-salle.html',
  providers:[SalleService],
})
export class AjouterSallePage implements AfterViewInit{

  ngAfterViewInit(): void {
    if(!this.navParams.get('exist')){
      document.getElementById('x').innerHTML = 'Edit';
    }
  }
  newSalle: Salle = new Salle();
  valide = false;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    ,public viewCtrl: ViewController
    ,public salleService : SalleService) {
    if(!navParams.get('exist')) {
      this.newSalle = navParams.data;
    }
  }

  validate(){
    let a = true;
    if (!this.newSalle.nom || this.newSalle.nom.trim().length < 1) {
      a = false;
    }
    this.valide=a;
  }

  addSalle(){
    if(!this.navParams.get('exist')){
      this.salleService.editSalle(this.newSalle,this.newSalle.id).subscribe();
      this.dismiss();
    }else{
      this.salleService.putSalle(this.newSalle).subscribe();
      this.dismiss();
    }

  }
  dismiss() {
    if(!this.navParams.get('exist')){
      this.viewCtrl.dismiss();
    }else
    {
      this.viewCtrl.dismiss(this.newSalle);
    }

  }

}
