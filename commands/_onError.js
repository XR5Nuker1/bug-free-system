/*CMD
  command: /onError
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

Bot.sendMessage("Error on downloading");

Bot.inspect(http_status);
Bot.inspect(http_headers);  // headers from response
Bot.inspect(cookies);
