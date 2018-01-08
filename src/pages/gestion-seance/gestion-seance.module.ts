import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionSeancePage } from './gestion-seance';

@NgModule({
  declarations: [
    GestionSeancePage,
  ],
  imports: [
    IonicPageModule.forChild(GestionSeancePage),
  ],
})
export class GestionSeancePageModule {}
