import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamacaoApiService {

  readonly reclamacaoAPIUrl = "https://localhost:7240/api";

  constructor(private http:HttpClient) { }

  getReclamacaoList():Observable<any[]> {
    return this.http.get<any>(this.reclamacaoAPIUrl + '/reclamacao');
  }

  addReclamacao(data:any) {
    return this.http.post(this.reclamacaoAPIUrl + '/reclamacao', data);
  }

  updateReclamacao(id:number|string, data:any) {
    return this.http.put(this.reclamacaoAPIUrl + `/reclamacao/${id}`, data);
  }

  deleteReclamacao(id:number|string) {
    return this.http.delete(this.reclamacaoAPIUrl + `/reclamacao/${id}`);
  }
}
