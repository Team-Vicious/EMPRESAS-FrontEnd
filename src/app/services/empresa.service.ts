import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService  extends CommonService<Empresa>{

  protected baseEndPoint = 'http://localhost:8090/api/empresa';

  protected cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( http: HttpClient) {
    super(http);
  }

  //esto esta por las dudas- no se usa
  public editar(e: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(this.baseEndPoint + '/' + e.id, e,{headers: this.cabeceras});
    
  }

}
