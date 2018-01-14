import {Enseignement} from "./Enseignement";
export class Pointage{
  id:number;
  date:string;
  idBase:Enseignement;
  absent : string;
  constructor (){
    this.idBase = new Enseignement();
  }
}
