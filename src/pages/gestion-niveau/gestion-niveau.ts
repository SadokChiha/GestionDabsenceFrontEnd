import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {NiveauService} from "../../Services/Niveau.Service";
import {Niveau} from "../../Models/Niveau";
import {AjouterNiveauPage} from "../ajouter-niveau/ajouter-niveau";

/**
 * Generated class for the GestionNiveauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-niveau',
  templateUrl: 'gestion-niveau.html',
  providers:[NiveauService],
})
export class GestionNiveauPage implements AfterViewInit{

  niveaus : Niveau[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public niveauService : NiveauService) {
    this.niveaus = [];
  }

  ngAfterViewInit(): void {
      this.niveauService.getNiveau().subscribe(data => this.niveaus = data);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  deleteNiveau(niveau: any){
    this.niveauService.deleteNiveau(niveau.id).subscribe();
    this.niveaus.splice(this.niveaus.indexOf(niveau,0),1);
  }

  editNiveau(niveau: any){
    let modal = this.modalCtrl.create(AjouterNiveauPage,niveau);
    modal.onDidDismiss(data => {
      this.niveauService.getNiveau().subscribe(data => this.niveaus = data);
    });
    modal.present();
  }

  openModal(){
    let modal = this.modalCtrl.create(AjouterNiveauPage,{exist : 'pasExit'});
    modal.onDidDismiss(data => {
      if(data.nom) {
        this.niveauService.getNiveau().subscribe(data => this.niveaus = data);
      }
    });
    modal.present();
  }
}
