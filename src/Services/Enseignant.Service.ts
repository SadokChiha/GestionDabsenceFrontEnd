import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Enseignant} from "../Models/Enseignant";
@Injectable()
export class EnseignantService {
  constructor(private http: HttpClient) { }

  getEnseignant(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>('http://localhost:8080/ws_spring/enseignant');
  }

  putEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>('http://localhost:8080/ws_spring/enseignant', enseignant);
  }
  deleteEnseignant(id:number): Observable<Enseignant>{
    return this.http.delete<Enseignant>('http://localhost:8080/ws_spring/enseignant/'+id);
  }
  editEnseignant(enseignant: Enseignant,id:number): Observable<Enseignant>{
    return this.http.post<Enseignant>('http://localhost:8080/ws_spring/enseignant/'+id,enseignant);
  }

}
