/*CMD
  command: i
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var button=[{title:"⬅️Return",command:"Mainmenu"}]
Bot.sendInlineKeyboard(button,""+iteration_quota.progress+" Iterations")
