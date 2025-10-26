// src/main/java/com/example/chat/ChatMessage.java
package com.example.chat;

public class ChatMessage {
    private String user;
    private String text;
    private long timestamp;

    public ChatMessage() {
    }

    public ChatMessage(String user, String text, long timestamp) {
        this.user = user;
        this.text = text;
        this.timestamp = timestamp;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}
        