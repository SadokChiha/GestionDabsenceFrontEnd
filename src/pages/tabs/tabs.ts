import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {AccueilPage} from "../accueil/accueil";
import {GestionPage} from "../gestion/gestion";
import {HistoriquePage} from "../historique/historique";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  accueilPage = AccueilPage;
  gestionPage = GestionPage;
  historiquePage = HistoriquePage;



  constructor(){
  }

}
