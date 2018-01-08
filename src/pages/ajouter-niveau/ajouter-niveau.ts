import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Niveau} from "../../Models/Niveau";
import {NiveauService} from "../../Services/Niveau.Service";

/**
 * Generated class for the AjouterNiveauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-niveau',
  templateUrl: 'ajouter-niveau.html',
  providers:[NiveauService],
})
export class AjouterNiveauPage implements AfterViewInit{


  ngAfterViewInit(): void {
    if(!this.navParams.get('exist')){
      document.getElementById('x').innerHTML = 'Edit';
    }
  }
  newNiveau: Niveau = new Niveau();
  valide = false;

  constructor(public navCtrl: NavController
              ,public navParams: NavParams
              ,public viewCtrl: ViewController
              ,public niveauService : NiveauService) {
    if(!navParams.get('exist')) {
      this.newNiveau = navParams.data;
    }
  }
  validate(){
    let a = true;
    if (!this.newNiveau.nom || this.newNiveau.nom.trim().length < 1) {
      a = false;
    }
    this.valide=a;
  }

  addNiveau(){
    if(!this.navParams.get('exist')){
      this.niveauService.editNiveau(this.newNiveau,this.newNiveau.id).subscribe();
      this.dismiss();
    }else{
      this.niveauService.putNiveau(this.newNiveau).subscribe();
      this.dismiss();
    }

  }
  dismiss() {
    if(!this.navParams.get('exist')){
      this.viewCtrl.dismiss();
    }else
    {
      this.viewCtrl.dismiss(this.newNiveau);
    }

  }
}
