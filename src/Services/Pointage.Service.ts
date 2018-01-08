import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Pointage} from "../Models/Pointage";
@Injectable()
export class PointageService {
  constructor(private http: HttpClient) { }

  getPointage(): Observable<Pointage[]> {
    return this.http.get<Pointage[]>('http://localhost:8080/ws_spring/pointage');
  }

  putPointage(pointage: Pointage): Observable<Pointage> {
    return this.http.put<Pointage>('http://localhost:8080/ws_spring/pointage', pointage);
  }
  deletePointage(id:number): Observable<Pointage>{
    return this.http.delete<Pointage>('http://localhost:8080/ws_spring/pointage/'+id);
  }
  editPointage(pointage: Pointage,id:number): Observable<Pointage>{
    return this.http.post<Pointage>('http://localhost:8080/ws_spring/pointage/'+id,pointage);
  }

}
