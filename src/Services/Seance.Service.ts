import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Seance} from "../Models/Seance";
@Injectable()
export class SeanceService {
  constructor(private http: HttpClient) { }

  getSeance(): Observable<Seance[]> {
    return this.http.get<Seance[]>('http://localhost:8080/ws_spring/seance');
  }

  putSeance(seance: Seance): Observable<Seance> {
    return this.http.put<Seance>('http://localhost:8080/ws_spring/seance', seance);
  }
  deleteSeance(id:number): Observable<Seance>{
    return this.http.delete<Seance>('http://localhost:8080/ws_spring/seance/'+id);
  }
  editSeance(seance: Seance,id:number): Observable<Seance>{
    return this.http.post<Seance>('http://localhost:8080/ws_spring/seance/'+id,seance);
  }

}
