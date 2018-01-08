import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Departement} from "../Models/Departement";
@Injectable()
export class DepartementService {
  constructor(private http: HttpClient) { }

  getDepartement(): Observable<Departement[]> {
    return this.http.get<Departement[]>('http://localhost:8080/ws_spring/departement');
  }

  putDepartement(departement: Departement): Observable<Departement> {
    return this.http.put<Departement>('http://localhost:8080/ws_spring/departement', departement);
  }
  deleteDepartement(id:number): Observable<Departement>{
    return this.http.delete<Departement>('http://localhost:8080/ws_spring/departement/'+id);
  }
  editDepartement(departement: Departement,id:number): Observable<Departement>{
    return this.http.post<Departement>('http://localhost:8080/ws_spring/departement/'+id,departement);
  }

}
