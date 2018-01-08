import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionSallePage } from './gestion-salle';

@NgModule({
  declarations: [
    GestionSallePage,
  ],
  imports: [
    IonicPageModule.forChild(GestionSallePage),
  ],
})
export class GestionSallePageModule {}
