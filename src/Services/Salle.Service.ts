import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Salle} from "../Models/Salle";
@Injectable()
export class SalleService {
  constructor(private http: HttpClient) { }

  getSalle(): Observable<Salle[]> {
    return this.http.get<Salle[]>('http://localhost:8080/ws_spring/salle');
  }

  putSalle(salle: Salle): Observable<Salle> {
    return this.http.put<Salle>('http://localhost:8080/ws_spring/salle', salle);
  }
  deleteSalle(id:number): Observable<Salle>{
    return this.http.delete<Salle>('http://localhost:8080/ws_spring/salle/'+id);
  }
  editSalle(salle: Salle,id:number): Observable<Salle>{
    return this.http.post<Salle>('http://localhost:8080/ws_spring/salle/'+id,salle);
  }

}
