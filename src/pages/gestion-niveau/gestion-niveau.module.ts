import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionNiveauPage } from './gestion-niveau';

@NgModule({
  declarations: [
    GestionNiveauPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionNiveauPage),
  ],
})
export class GestionNiveauPageModule {}
