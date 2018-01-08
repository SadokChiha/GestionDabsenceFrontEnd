import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterSeancePage } from './ajouter-seance';

@NgModule({
  declarations: [
    AjouterSeancePage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterSeancePage),
  ],
})
export class AjouterSeancePageModule {}
