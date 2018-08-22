import { Injectable } from '@angular/core';
import { Imessage } from '../models/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages: Array<Imessage> = [];

  constructor() { }
 
  add(message: Imessage) {
    this.messages.push(message);
  }
 
  clearAll() {
    this.messages = [];
  }
 
  clear(index:number) {
    this.messages.splice(index, 1);
  }
}
