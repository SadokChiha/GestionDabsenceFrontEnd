import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Departement} from "../../Models/Departement";
import {DepartementService} from "../../Services/Departement.Service";
/**
 * Generated class for the AjouterDepartementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-departement',
  templateUrl: 'ajouter-departement.html',
  providers:[DepartementService],
})
export class AjouterDepartementPage implements AfterViewInit{
  ngAfterViewInit(): void {
    if(!this.navParams.get('exist')){
      document.getElementById('x').innerHTML = 'Edit';
    }
  }

  newDepartement : Departement = new Departement();
  valide = false;
  constructor(public navCtrl: NavController
              ,public navParams: NavParams
              ,public viewCtrl: ViewController
              ,public departementService: DepartementService) {
    if(!navParams.get('exist')){
      this.newDepartement = navParams.data;
    }
  }

  validate(){
    let a = true;
    if (!this.newDepartement.nom || this.newDepartement.nom.trim().length < 1) {
      a = false;
    }
    this.valide=a;
  }

  addDepartement(){
    if(!this.navParams.get('exist')){
      this.departementService.editDepartement(this.newDepartement,this.newDepartement.id).subscribe();
      this.dismiss();
    }else{
      this.departementService.putDepartement(this.newDepartement).subscribe();
      this.dismiss();
    }

  }
  dismiss() {
    if(!this.navParams.get('exist')){
      this.viewCtrl.dismiss();
    }else
    {
      this.viewCtrl.dismiss(this.newDepartement);
    }

  }
}
