import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionEnseignantPage } from './gestion-enseignant';

@NgModule({
  declarations: [
    GestionEnseignantPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionEnseignantPage),
  ],
})
export class GestionEnseignantPageModule {}
