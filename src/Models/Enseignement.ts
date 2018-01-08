import {Niveau} from "./Niveau";
import {Departement} from "./Departement";
import {Enseignant} from "./Enseignant";
import {Salle} from "./Salle";
import {Seance} from "./Seance";
export class Enseignement{
  idBase:number;
  date:any;
  niveau:Niveau;
  departement:Departement;
  enseignant:Enseignant;
  salle:Salle;
  seance:Seance;

  constructor(){
    this.niveau = new Niveau();
    this.departement = new Departement();
    this.enseignant = new Enseignant();
    this.salle = new Salle();
    this.seance = new Seance();
  }

}
