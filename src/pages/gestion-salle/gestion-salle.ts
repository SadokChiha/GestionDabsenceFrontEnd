import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {SalleService} from "../../Services/Salle.Service";
import {Salle} from "../../Models/Salle";
import {AjouterSallePage} from "../ajouter-salle/ajouter-salle";

/**
 * Generated class for the GestionSallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-salle',
  templateUrl: 'gestion-salle.html',
  providers:[SalleService],
})
export class GestionSallePage implements AfterViewInit{

  salles : Salle[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public salleService: SalleService) {
    this.salles=[];
  }

  ngAfterViewInit(): void {
    this.salleService.getSalle().subscribe(data =>this.salles = data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  deleteSalle(salle: any){
    this.salleService.deleteSalle(salle.id).subscribe();
    this.salles.splice(this.salles.indexOf(salle,0),1);
  }

  editSalle(salle: any){
    let modal = this.modalCtrl.create(AjouterSallePage,salle);
    modal.onDidDismiss(data => {
      this.salleService.getSalle().subscribe(data => this.salles = data);
    });
    modal.present();
  }

  openModal(){
    let modal = this.modalCtrl.create(AjouterSallePage,{exist : 'pasExit'});
    modal.onDidDismiss(data => {
      if(data.nom) {
        this.salleService.getSalle().subscribe(data => this.salles = data);
      }
    });
    modal.present();
  }
}
