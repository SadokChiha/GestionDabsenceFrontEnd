import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {GestionNiveauPage} from "../gestion-niveau/gestion-niveau";
import {GestionEnseignantPage} from "../gestion-enseignant/gestion-enseignant";
import {GestionSallePage} from "../gestion-salle/gestion-salle";
import {GestionDepartementPage} from "../gestion-departement/gestion-departement";
import {GestionSeancePage} from "../gestion-seance/gestion-seance";

/**
 * Generated class for the GestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion',
  templateUrl: 'gestion.html',
})
export class GestionPage {

  gestionGenerique : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  openModal(pageName) {

    switch(pageName){
      case 'pageEnseignant':
        this.gestionGenerique = GestionEnseignantPage;
        break;
      case 'pageNiveau':
        this.gestionGenerique = GestionNiveauPage;
        break;
      case 'pageSalle':
        this.gestionGenerique = GestionSallePage;
        break;
      case 'pageDepartement':
        this.gestionGenerique = GestionDepartementPage;
        break;
      case 'pageSeance':
        this.gestionGenerique = GestionSeancePage;
        break;
      default:
        this.gestionGenerique = null;
    }
    let modal = this.modalCtrl.create(this.gestionGenerique);
    modal.present();
  }

}
