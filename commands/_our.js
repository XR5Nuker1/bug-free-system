/*CMD
  command: /our
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

var nu = Libs.TGINFO.getTGID(user)

Bot.sendMessage(nu)
