import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http: HttpClient) { }
  
  getKolumna1Distinct (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/one/distinct`
      );
  }
  getKolumna1Repeated (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/one/repeated`
      );
  }
  getKolumna2Distinct (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/two/distinct`
      );
  }
  getKolumna2Repeated (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/two/repeated`
      );
  }
  getKolumna3Distinct (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/three/distinct`
      );
  }
  getKolumna3Repeated (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/three/repeated`
      );
  }
  getKolumna4Distinct (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/four/distinct`
      );
  }
  getKolumna4Repeated (): Observable<TableResponse[]>{
    return this.http.get<TableResponse[]>(
      `http://localhost:8080/four/repeated`
      );
  }

}
export interface TableResponse {
  id: number;
  kolumna1: string;
  kolumna2: string;
  kolumna3: string;
  kolumna4: number;
}
