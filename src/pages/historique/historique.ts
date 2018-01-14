import {AfterViewInit, Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PointageService} from "../../Services/Pointage.Service";
import {Pointage} from "../../Models/Pointage";

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
  providers: [PointageService],
})
export class HistoriquePage implements AfterViewInit{


  myDate: any;
  pointages: Pointage[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public pointageService:PointageService) {
  }
  ngAfterViewInit(): void {
    this.pointageService.getPointage().subscribe(data => this.pointages = data);
  }
  valide(){
    this.pointageService.getPointageDate(this.myDate).subscribe(data => this.pointages = data);
  }
}
