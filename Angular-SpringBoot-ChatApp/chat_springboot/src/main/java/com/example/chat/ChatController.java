// src/main/java/com/example/chat/ChatController.java
package com.example.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public ChatMessage send(ChatMessage message) {
        // If the client doesn’t set a timestamp, add one here
        if (message.getTimestamp() == 0) {
            message.setTimestamp(System.currentTimeMillis());
        }
        return message;
    }
}
