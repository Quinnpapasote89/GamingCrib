import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailsendService {

  constructor(private http: HttpClient) { }

  httpGet(url: string) {
    return this.http.get(url);
  }

  httpPost(url: string, {}) {
    return this.http.post(url, {name : "Tech"});
  }
  
  enviarEmail(url: string, data: { nombreF: string; emailF: string; asuntoF: string; mensajeF: string; }){
    console.log(data);
    return this.http.post(url, data);
  }
}
