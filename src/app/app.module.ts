import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {AccueilPage} from "../pages/accueil/accueil";
import {HttpClientModule} from "@angular/common/http";
import {EnseignementService} from "../Services/Enseignement.Service";
import {TabsPage} from "../pages/tabs/tabs";
import {HistoriquePage} from "../pages/historique/historique";
import {GestionPage} from "../pages/gestion/gestion";
import {GestionDepartementPage} from "../pages/gestion-departement/gestion-departement";
import {GestionEnseignantPage} from "../pages/gestion-enseignant/gestion-enseignant";
import {GestionSallePage} from "../pages/gestion-salle/gestion-salle";
import {GestionSeancePage} from "../pages/gestion-seance/gestion-seance";
import {GestionNiveauPage} from "../pages/gestion-niveau/gestion-niveau";
import {AjouterDepartementPage} from "../pages/ajouter-departement/ajouter-departement";
import {AjouterEnseignantPage} from "../pages/ajouter-enseignant/ajouter-enseignant";
import {AjouterNiveauPage} from "../pages/ajouter-niveau/ajouter-niveau";
import {AjouterSallePage} from "../pages/ajouter-salle/ajouter-salle";
import {AjouterSeancePage} from "../pages/ajouter-seance/ajouter-seance";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AccueilPage,
    TabsPage,
    HistoriquePage,
    GestionPage,
    GestionDepartementPage,
    GestionEnseignantPage,
    GestionSallePage,
    GestionSeancePage,
    GestionNiveauPage,
    AjouterDepartementPage,
    AjouterEnseignantPage,
    AjouterNiveauPage,
    AjouterSallePage,
    AjouterSeancePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AccueilPage,
    TabsPage,
    HistoriquePage,
    GestionPage,
    GestionDepartementPage,
    GestionEnseignantPage,
    GestionSallePage,
    GestionSeancePage,
    GestionNiveauPage,
    AjouterDepartementPage,
    AjouterEnseignantPage,
    AjouterNiveauPage,
    AjouterSallePage,
    AjouterSeancePage
  ],
  providers: [
    StatusBar,
    EnseignementService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
