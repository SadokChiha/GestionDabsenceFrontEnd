import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {User} from "../../Models/User";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{

newuser : User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit(): void {
  }


  Verif(){
    if(this.newuser.login=="admin" && this.newuser.password=="admin"){
      this.navCtrl.setRoot(TabsPage);
    }else{
      let toast = this.toastCtrl.create({
        message: 'Login ou(et) mot de passe est incorrect !',
        duration: 2000,
        position: 'middle'
      });

      toast.present(toast);
    }

  }
}
