import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import SockJS from 'sockjs-client';  // ✅ default import
import { Observable, Subject } from 'rxjs';

export interface ChatMessage {
  user: string;
  text: string;
  timestamp?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private client: Client;
  private messageSubject = new Subject<ChatMessage>();

  constructor() {
    this.client = new Client({
  webSocketFactory: () => new SockJS('http://localhost:8080/chat'),
  reconnectDelay: 5000,
});
  

    this.client.onConnect = () => {
      this.client.subscribe('/topic/messages', (frame: Message) => {
        const body: ChatMessage = JSON.parse(frame.body);
        this.messageSubject.next(body);
      });
    };

    this.client.activate();
  }

  getMessages(): Observable<ChatMessage> {
    return this.messageSubject.asObservable();
  }

  sendMessage(message: ChatMessage) {
    this.client.publish({
      destination: '/app/send',
      body: JSON.stringify(message),
    });
  }
}
