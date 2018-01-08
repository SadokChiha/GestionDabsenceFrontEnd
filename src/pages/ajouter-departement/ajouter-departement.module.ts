import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterDepartementPage } from './ajouter-departement';

@NgModule({
  declarations: [
    AjouterDepartementPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterDepartementPage),
  ],
})
export class AjouterDepartementPageModule {}
