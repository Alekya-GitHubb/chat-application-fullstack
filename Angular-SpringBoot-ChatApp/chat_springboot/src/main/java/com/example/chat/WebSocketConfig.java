// src/main/java/com/example/chat/WebSocketConfig.java
package com.example.chat;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // The client will connect to /chat via WebSocket or SockJS
        registry.addEndpoint("/chat")
                .setAllowedOriginPatterns("*")
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // Messages sent to destinations starting with /app will be routed to controller methods
        registry.setApplicationDestinationPrefixes("/app");
        // Enable a simple in-memory broker for broadcasting messages to subscribers of /topic/*
        registry.enableSimpleBroker("/topic");
    }
}
