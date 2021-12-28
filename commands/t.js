/*CMD
  command: t
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


var button=[[{text: "ryryrrhrh", callback_data: "i"}]]
Api.sendMessage({
  text: "Validating Your Subscription...",
 reply_markup: {inline_keyboard: button}
})

