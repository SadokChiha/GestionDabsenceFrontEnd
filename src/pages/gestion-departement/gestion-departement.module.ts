import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionDepartementPage } from './gestion-departement';

@NgModule({
  declarations: [
    GestionDepartementPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionDepartementPage),
  ],
})
export class GestionDepartementPageModule {}
