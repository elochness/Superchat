import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { Observable } from 'rxjs/internal/Observable';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient) { }

  public getMessages(): Observable<Message[]>{
    return this.httpClient.get<Message[]>('http://91.121.148.187:10000/messages');
  }
  public sendMessage(message: any){
    return this.httpClient.post<Message>('http://91.121.148.187:10000/messages', message).subscribe();
  }

  public getUsers(): Observable<any>{
    return this.httpClient
    .get<Message[]>('http://91.121.148.187:10000/messages')
    .mergeMap(res => res)
    .map(elem => elem.name)
    .distinct(elem => elem);
  }
   
  public getMessagesByUser(username: string): Observable<any>{
    return this.getMessages()
    .mergeMap(res => res)
    .filter(data => data.name === username);
  }
}
