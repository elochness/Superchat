import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Message } from 'src/app/models/message';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  public message = new Message('', false);
  public messageForm: FormGroup;
  public messageCtrl: FormControl;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private AuthService: AuthService, private MessagesService: MessagesService) { }

  ngOnInit() {
    this.messageCtrl = this.fb.control('', [Validators.required]);
    this.messageForm = this.fb.group({
      message: this.messageCtrl,
    });
  }
  
  public send(){
    const messageSend = this.messageCtrl.value;
    const user = {
      name : this.AuthService.getUser().name,
      message : {
        content : messageSend
      }
    };  
    this.MessagesService.sendMessage(user);
  }


}
