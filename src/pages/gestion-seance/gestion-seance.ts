import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {SeanceService} from "../../Services/Seance.Service";
import {Seance} from "../../Models/Seance";
import {AjouterSeancePage} from "../ajouter-seance/ajouter-seance";

/**
 * Generated class for the GestionSeancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-seance',
  templateUrl: 'gestion-seance.html',
  providers:[SeanceService]
})
export class GestionSeancePage implements AfterViewInit{

  seances:Seance[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public seanceService: SeanceService) {
    this.seances = [];
  }

  ngAfterViewInit(): void {
    this.seanceService.getSeance().subscribe(data => this.seances=data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  deleteSeance(seance: any){
    this.seanceService.deleteSeance(seance.id).subscribe();
    this.seances.splice(this.seances.indexOf(seance,0),1);
  }

  editSeance(seance: any){
    let modal = this.modalCtrl.create(AjouterSeancePage,seance);
    modal.onDidDismiss(data => {
      this.seanceService.getSeance().subscribe(data => this.seances = data);
    });
    modal.present();
  }

  openModal(){
    let modal = this.modalCtrl.create(AjouterSeancePage,{exist : 'pasExit'});
    modal.onDidDismiss(data => {
      if(data.nom) {
        this.seanceService.getSeance().subscribe(data => this.seances = data);
      }
    });
    modal.present();
  }
}
