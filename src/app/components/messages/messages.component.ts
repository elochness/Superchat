import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public  msg: Array<Message>;

  constructor(private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.route.data.subscribe(data => this.msg = data['msg']);
  }

}
