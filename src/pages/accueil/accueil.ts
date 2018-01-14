import {AfterViewInit, Component} from '@angular/core';
import {IonicPage,NavController, NavParams} from 'ionic-angular';
import {Enseignement} from "../../Models/Enseignement";
import {EnseignementService} from "../../Services/Enseignement.Service";
import {PointageService} from "../../Services/Pointage.Service";
import {Pointage} from "../../Models/Pointage";

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
  providers:[EnseignementService,PointageService],
})
export class AccueilPage implements AfterViewInit{

  enseignements: Enseignement[];
  enseignementsAbcent : Enseignement[];
  pointage : Pointage = new Pointage();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public enseignementService: EnseignementService,
              public pointageService : PointageService) {
     this.enseignementsAbcent = [];
  }
  ngAfterViewInit(): void {
      this.enseignementService.getEnseignementAujour().subscribe(data => this.enseignements = data);
  }

  AddEnseignant(enseignement : any){
    if(this.enseignementsAbcent.indexOf(enseignement)>=0){
      this.enseignementsAbcent.splice(this.enseignementsAbcent.indexOf(enseignement),1);

    }else{
      this.enseignementsAbcent.push(enseignement);
    }
  }
  validerAbsent(){
   var d = new Date();
    for(let ens of this.enseignements){
      if(this.enseignementsAbcent.indexOf(ens)>=0){
        this.pointage.idBase = ens;
        this.pointage.absent = "Absent";
        this.pointage.date = d.getFullYear()+"-"+d.getMonth()+1+"-"+d.getDate();
        this.pointageService.putPointage(this.pointage).subscribe();
      }else{
        this.pointage.idBase = ens;
        this.pointage.absent = "Present";
        this.pointage.date = d.getFullYear()+"-"+d.getMonth()+1+"-"+d.getDate();
        this.pointageService.putPointage(this.pointage).subscribe();
      }
    }
  }
}
