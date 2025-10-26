import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ChatService, ChatMessage } from '../chat';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  templateUrl: './chat-box.html',
  styleUrls: ['./chat-box.css'],
  imports: [NgFor, NgIf, FormsModule, DatePipe],
})


export class ChatBoxComponent implements OnInit {
  username: string = '';
  message: string = '';
  messages: ChatMessage[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.username = prompt('Enter your name')?.trim() || 'Anonymous';

    this.chatService.getMessages().subscribe((msg: ChatMessage) => {
      this.messages.push(msg);
    });
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage({
        user: this.username,
        text: this.message,
        timestamp: Date.now()
      });
      this.message = '';
    }
  }
}
