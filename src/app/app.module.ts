import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginGuard } from './guards/login.guard';
import { MessagesResolver } from './resolvers/messages-resolver.service';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { UniquePipe } from './pipes/unique.pipe';
import { PrivateMessagesComponent } from './components/private-messages/private-messages.component';
import { UserResolver } from './resolvers/user-resolver.service';

export const ROUTES: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "messages", component: MessagesComponent, canActivate: [LoginGuard], resolve: { msg: MessagesResolver } },
  { 
    path: "private", 
    component: PrivateComponent, 
    canActivate: [LoginGuard], 
    resolve: { msg: MessagesResolver },
    children: [
      { 
        path: ":id", 
        component: PrivateMessagesComponent,
        resolve: { user: UserResolver }
       }
    ] },
  { path: "**", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    MessageComponent,
    PrivateComponent,
    MessageFormComponent,
    UniquePipe,
    PrivateMessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
