package com.example;

import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class MainBot extends ListenerAdapter {
    public static void main(String[] args) {
        try {
            // JDABuilder builder = JDABuilder.createDefault();
            builder.setActivity(Activity.playing("with Java!"));
            builder.addEventListeners(new MainBot());
            builder.build();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onMessageReceived(MessageReceivedEvent event) {
        String message = event.getMessage().getContentRaw();

        if (message.equalsIgnoreCase("!hello")) {
            event.getChannel().sendMessage("Hello, world!").queue();
        } else if (message.equalsIgnoreCase("!ping")) {
            event.getChannel().sendMessage("Pong!").queue();
        }
    }

}
