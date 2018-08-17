import { Component, OnInit } from '@angular/core';
import { Imessage } from './models/messages';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {

  }

  /* FUNCTIONS */
  closeMsg() {
    this.messageService.clear();
  }
  /* FUNCTIONS */
}
