import {Enseignement} from "./Enseignement";
export class Pointage{
  id:number;
  Date:string;
  idBase:Enseignement;
  constructor (){
    this.idBase = new Enseignement();
  }
}
