import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterSallePage } from './ajouter-salle';

@NgModule({
  declarations: [
    AjouterSallePage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterSallePage),
  ],
})
export class AjouterSallePageModule {}
