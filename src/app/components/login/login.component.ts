import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public login(username: HTMLInputElement){
    if(username.value !== ''){
     this.AuthService.setUser(username.value);
     this.router.navigate(['/messages']);
    }
  }

}
