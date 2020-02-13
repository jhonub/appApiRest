import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  private API_Server = 'http://127.0.0.1:8000/api/';
  constructor(
    private http:HttpClient
  ) { }
  getListUsuarios():Observable<any>{
    return this.http.get(this.API_Server + 'usuarios/' );
  }
  getByIdUsuario(id):Observable<any>{
    return this.http.get(this.API_Server + 'usuarios/' + id);
  }
  postUsuario(tareas):Observable<any>{
    return this.http.post(this.API_Server + 'usuarios/',tareas);
  }
  putUsuario(tareas, id):Observable<any>{
    return this.http.put(this.API_Server + 'usuarios/'+ id,tareas);
  }
  deleteUsuario(id):Observable<any>{
    return this.http.delete(this.API_Server + 'usuarios/' + id);
  }
}
