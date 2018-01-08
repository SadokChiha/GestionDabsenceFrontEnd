import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Enseignement} from "../Models/Enseignement";
@Injectable()
export class EnseignementService {
  constructor(private http: HttpClient) { }

  getEnseignement(): Observable<Enseignement[]> {
    return this.http.get<Enseignement[]>('http://localhost:8080/ws_spring/enseignement');
  }

  putEnseignement(enseignement: Enseignement): Observable<Enseignement> {
    return this.http.put<Enseignement>('http://localhost:8080/ws_spring/enseignement', enseignement);
  }
  deleteEnseignement(id:number): Observable<Enseignement>{
    return this.http.delete<Enseignement>('http://localhost:8080/ws_spring/enseignement/'+id);
  }
  editEnseignement(enseignement: Enseignement,id:number): Observable<Enseignement>{
    return this.http.post<Enseignement>('http://localhost:8080/ws_spring/enseignement/'+id,enseignement);
  }

}
