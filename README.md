# Chat Application – Full Stack (React + Node.js & Angular + Spring Boot)

This repository contains two real-time chat applications built with different frontend and backend frameworks to compare architecture and functionality.

---

##  Project Variants

| Version | Frontend | Backend | Real-Time Protocol |
|---------|----------|---------|---------------------|
| 1    | React    | Node.js | Socket.io           |
| 2    | Angular  | Spring Boot | WebSocket (STOMP + SockJS) |

---

##  Technologies Used

###  React + Node.js Version
- **Frontend**: React, Socket.io-client
- **Backend**: Node.js, Express, Socket.io
- **Communication**: Bidirectional WebSocket (Socket.io)

###  Angular + Spring Boot Version
- **Frontend**: Angular 17+, RxJS, StompJS, SockJS
- **Backend**: Spring Boot, Spring WebSocket, STOMP protocol
- **Communication**: WebSocket + STOMP messaging

---

##  Folder Structure

chat-application-fullstack/
│
├── React-Node-ChatApp/
│ ├── chat_app/ # Node.js Backend
│ └── chat_client/ # React Frontend
│
├── Angular-SpringBoot-ChatApp/
│ ├── chat_springboot/ # Spring Boot Backend
│ └── angular-proper/ # Angular Frontend


## ✅ 1. Run React + Node.js Chat App (Locally)

### 🔹 Step 1: Start Node.js Server
```bash
cd React-Node-ChatApp/chat_app
npm install
node index.js
✅ Runs on → http://localhost:3001

🔹 Step 2: Start React Frontend
bash
Copy code
cd React-Node-ChatApp/chat_client
npm install
npm start
✅ App opens at → http://localhost:3000


✅ 2. Run Angular + Spring Boot Chat App (Locally)
🔹 Step 1: Start Spring Boot Backend
cd Angular-SpringBoot-ChatApp/chat_springboot
mvn spring-boot:run


✅ Runs on → http://localhost:8080

🔹 Step 2: Start Angular Frontend
cd Angular-SpringBoot-ChatApp/chat-client
npm install
ng serve --open


✅ App opens at → http://localhost:4200


📦 React + Node.js
| Package          | Purpose                      |
| ---------------- | ---------------------------- |
| express          | HTTP server                  |
| socket.io        | Real-time communication      |
| cors             | Enable cross-origin requests |
| socket.io-client | Frontend WebSocket           |


📦 Angular + Spring Boot
| Package                       | Purpose                    |
| ----------------------------- | -------------------------- |
| @stomp/stompjs                | STOMP client for WebSocket |
| sockjs-client                 | WebSocket fallback support |
| spring-boot-starter-websocket | Backend WebSockets         |
| spring-messaging              | STOMP message handling     |


