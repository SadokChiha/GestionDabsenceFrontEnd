import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {Departement} from "../../Models/Departement";
import {DepartementService} from "../../Services/Departement.Service";
import {AjouterDepartementPage} from "../ajouter-departement/ajouter-departement";

/**
 * Generated class for the GestionDepartementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-departement',
  templateUrl: 'gestion-departement.html',
  providers:[DepartementService],
})
export class GestionDepartementPage implements AfterViewInit{


  departemens : Departement[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public viewCtrl: ViewController,
              public departementService: DepartementService,
              public modalCtrl: ModalController) {
    this.departemens = [];
  }

  ngAfterViewInit(): void {
    this.departementService.getDepartement().subscribe(data => this.departemens = data);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  deleteDepartement(departement : any){
    this.departementService.deleteDepartement(departement.id).subscribe();
    this.departemens.splice(this.departemens.indexOf(departement,0),1);
  }

  editDepartement(departement:any){
    let modal = this.modalCtrl.create(AjouterDepartementPage,departement);
    modal.onDidDismiss(data => {
      this.departementService.getDepartement().subscribe(data => this.departemens = data);
    });
    modal.present();
  }

  openModal(){
    let modal = this.modalCtrl.create(AjouterDepartementPage,{exist : 'pasExit'});
    modal.onDidDismiss(data => {
      if(data.nom) {
        this.departementService.getDepartement().subscribe(data => this.departemens = data);
      }
    });
    modal.present();
  }
}
