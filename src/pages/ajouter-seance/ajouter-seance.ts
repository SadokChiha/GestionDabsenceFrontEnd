import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {SeanceService} from "../../Services/Seance.Service";
import {Seance} from "../../Models/Seance";

/**
 * Generated class for the AjouterSeancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-seance',
  templateUrl: 'ajouter-seance.html',
  providers:[SeanceService],
})
export class AjouterSeancePage implements AfterViewInit{

  ngAfterViewInit(): void {
    if(!this.navParams.get('exist')){
      document.getElementById('x').innerHTML = 'Edit';
    }
  }
  newSeance: Seance = new Seance();
  valide = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public seanceService: SeanceService) {
    if(!navParams.get('exist')) {
      this.newSeance = navParams.data;
    }
  }

  validate(){
    let a = true;
    if (!this.newSeance.nom || this.newSeance.nom.trim().length < 1) {
      a = false;
    }
    if (!this.newSeance.duree || this.newSeance.duree.trim().length < 1) {
      a = false;
    }
    this.valide=a;
  }

  addSeance(){
    if(!this.navParams.get('exist')){
      this.seanceService.editSeance(this.newSeance,this.newSeance.id).subscribe();
      this.dismiss();
    }else{
      this.seanceService.putSeance(this.newSeance).subscribe();
      this.dismiss();
    }

  }
  dismiss() {
    if(!this.navParams.get('exist')){
      this.viewCtrl.dismiss();
    }else
    {
      this.viewCtrl.dismiss(this.newSeance);
    }

  }

}
