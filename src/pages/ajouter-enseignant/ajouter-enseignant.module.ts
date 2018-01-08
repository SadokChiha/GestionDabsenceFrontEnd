import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterEnseignantPage } from './ajouter-enseignant';

@NgModule({
  declarations: [
    AjouterEnseignantPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterEnseignantPage),
  ],
})
export class AjouterEnseignantPageModule {}
