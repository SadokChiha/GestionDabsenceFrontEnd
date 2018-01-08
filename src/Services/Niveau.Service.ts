import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Niveau} from "../Models/Niveau";
@Injectable()
export class NiveauService {
  constructor(private http: HttpClient) { }

  getNiveau(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>('http://localhost:8080/ws_spring/niveau');
  }

  putNiveau(niveau: Niveau): Observable<Niveau> {
    return this.http.put<Niveau>('http://localhost:8080/ws_spring/niveau', niveau);
  }
  deleteNiveau(id:number): Observable<Niveau>{
    return this.http.delete<Niveau>('http://localhost:8080/ws_spring/niveau/'+id);
  }
  editNiveau(niveau: Niveau,id:number): Observable<Niveau>{
    return this.http.post<Niveau>('http://localhost:8080/ws_spring/niveau/'+id,niveau);
  }

}
