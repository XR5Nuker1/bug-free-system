/*CMD
  command: /onLoading
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// downloaded page stored on content field
Bot.sendMessage(content);

Bot.inspect(http_status);   // "200"
Bot.inspect(http_headers);  // headers from response
Bot.inspect(cookies); // it is blank for example.com
