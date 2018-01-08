import {AfterViewInit, Component} from '@angular/core';
import {IonicPage,NavController, NavParams} from 'ionic-angular';
import {Enseignement} from "../../Models/Enseignement";
import {EnseignementService} from "../../Services/Enseignement.Service";

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
  providers:[EnseignementService],
})
export class AccueilPage implements AfterViewInit{

  enseignements: Enseignement[];
  enseignementsAbcent : Enseignement[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public enseignementService: EnseignementService) {
     this.enseignementsAbcent = [];
  }
  ngAfterViewInit(): void {
      this.enseignementService.getEnseignement().subscribe(data => this.enseignements = data);
  }

  AddEnseignant(enseignement : any){
    if(this.enseignementsAbcent.indexOf(enseignement)>=0){
      this.enseignementsAbcent.splice(enseignement,1);
    }else{
      this.enseignementsAbcent.push(enseignement);
    }
  }
}
