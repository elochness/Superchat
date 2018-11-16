import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesResolver implements Resolve<Message[]> {

  constructor(private MessagesService: MessagesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Message[]> {
    return this.MessagesService.getMessages();
  }
}