package com.sbvadmin.mailserver.receiver;

import com.rabbitmq.client.Channel;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;

/**
 * Notes:
 * Author: 涛声依旧 likeboat@163.com
 * Time: 2022/7/28 14:34
 */
@Component
public class MailReceiver {

    @Autowired
    JavaMailSender javaMailSender;

    @Autowired
    TemplateEngine templateEngine;

//    @RabbitListener(queues = "add-user")
//    public void handler(Message message, Channel channel) throws IOException {
//        User user = (User) message.getPayload();
//        System.out.println("有新用户添加进来了:" + user.getNickname());
//
//        Context ctx = new Context();
//        ctx.setVariable("username",user.getUsername());
//        ctx.setVariable("name",user.getNickname());
//        String mail = templateEngine.process("register.html", ctx);
//
//        sendHtmlMail("493058179@qq.com",
//                user.getEmail(),
//                "likeboat@163.com",
//                "svbadmin新用户注册邮件",
//                mail);
//    }

    /**
     * Notes:  发送html格式的邮件
     * @param: [from, to, cc, subject, content]
     * @return: void
     * Author: 涛声依旧 likeboat@163.com
     * Time: 2022/7/29 17:00
     **/
    public void sendHtmlMail(String from, String to, String cc, String subject, String content){
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(from);
            helper.setTo(to);
            helper.setBcc(cc);
            helper.setSubject(subject);
            helper.setText(content,true);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendSimpleMail(String from, String to, String cc, String subject, String content) {
        SimpleMailMessage simpMsg = new SimpleMailMessage();
        simpMsg.setFrom(from);
        simpMsg.setTo(to);
        simpMsg.setCc(cc);
        simpMsg.setSubject(subject);
        simpMsg.setText(content);
        javaMailSender.send(simpMsg);
    }

    @RabbitListener(queues = "QUD_OPEN_S")
    public void handlerDnake(Message message, Channel channel) throws IOException {
        System.out.println("有新报警来了");
    }
}
