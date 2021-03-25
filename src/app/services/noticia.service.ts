import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {


  protected baseEndPoint = 'http://localhost:8090/api/empresa';

  protected cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
 
  
  //trae todas las noticias de la empresa
  public verNoticiasPorId(id: number): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.baseEndPoint}/${id}/noticias`);
  }

  //trae las noticias por termino y id de la empresa en desc
  public verNoticiasPorTerminoAndId(id: number,term: string): Observable<Noticia>{
    return this.http.get<Noticia>(`${this.baseEndPoint}/${id}/noticias-filtrar/${term}`);
  }

  //trae las noticias por termino y id de la empresa en desc paginadas
  public verNoticiasPorTerminoAndIdPaginadas(id: number,term: string,page: string, size: string): Observable<Noticia>{
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<Noticia>(`${this.baseEndPoint}/${id}/noticias-filtrar/${term}/paged`,{params: params});
  }
}
