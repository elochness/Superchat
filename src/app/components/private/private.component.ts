import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  public  msg: Array<Message>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.msg = data['msg']);
  }
  public loadMessage(name: string){
    this.router.navigate(['/private',name]);
  }

  
}
