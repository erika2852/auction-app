package com.example.Kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class MessageListener {

    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(
            topics = KafkaConstants.KAFKA_TOPIC,
            groupId = KafkaConstants.GROUP_ID
    )
    public void listen(Message message) {
        log.info("sending via kafka listener..");
        template.convertAndSend("/topic/group", message);
    }
}