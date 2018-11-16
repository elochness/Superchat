import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-messages',
  templateUrl: './private-messages.component.html',
  styleUrls: ['./private-messages.component.css']
})
export class PrivateMessagesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public messages ;
  
  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.messages = data;
    });
  }

}
