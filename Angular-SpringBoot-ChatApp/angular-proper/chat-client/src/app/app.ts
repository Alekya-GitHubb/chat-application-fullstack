import { Component } from '@angular/core';
import { ChatBoxComponent } from './chat-box/chat-box';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatBoxComponent],
  template: `<app-chat-box></app-chat-box>`,
  styleUrls: ['./app.css']
})
export class AppComponent {}
