import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {Enseignant} from "../../Models/Enseignant";
import {EnseignantService} from "../../Services/Enseignant.Service";
import {AjouterEnseignantPage} from "../ajouter-enseignant/ajouter-enseignant";

/**
 * Generated class for the GestionEnseignantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-enseignant',
  templateUrl: 'gestion-enseignant.html',
  providers:[EnseignantService],
})
export class GestionEnseignantPage implements AfterViewInit{

  enseignants : Enseignant[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public viewCtrl: ViewController,
              public enseignantService:EnseignantService,
              public modalCtrl: ModalController) {
    this.enseignants = [];
  }

  ngAfterViewInit(): void {
    this.enseignantService.getEnseignant().subscribe(data => this.enseignants=data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  deleteEnseignant(enseignant: any){
    this.enseignantService.deleteEnseignant(enseignant.id).subscribe();
    this.enseignants.splice(this.enseignants.indexOf(enseignant,0),1);
  }

  editEnseignant(enseignant: any){
    let modal = this.modalCtrl.create(AjouterEnseignantPage,enseignant);
    modal.onDidDismiss(data => {
      this.enseignantService.getEnseignant().subscribe(data => this.enseignants = data);
    });
    modal.present();
  }

  openModal(){
    let modal = this.modalCtrl.create(AjouterEnseignantPage,{exist : 'pasExit'});
    modal.onDidDismiss(data => {
      if(data.nom) {
        this.enseignantService.getEnseignant().subscribe(data => this.enseignants = data);
      }
    });
    modal.present();
  }
}
