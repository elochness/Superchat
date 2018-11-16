import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { Message } from '../models/message';
import { User } from '../models/user';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/find';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Message[]> {

  constructor(private MessagesService: MessagesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Message[]> {
    return this.MessagesService.getMessagesByUser(route.params.id);
  }
}