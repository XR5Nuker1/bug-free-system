/*CMD
  command: ew
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

var accounts = "r, uy, gj"
var keyboard = [[]];
var account;
var keyboardRow = 0;

for(var ind in accounts){
  account = accounts[ind];
  keyboard[keyboardRow].push({
    title: account.currency.code,
    command: "/createWallet " + account.currency.code
  })
  
  if(ind==0){ continue }  
  if((ind%5)==0){
    // new row in keyboard
    keyboard.push([])
    keyboardRow = keyboardRow + 1
  }
}

Bot.sendInlineKeyboard(keyboard, "What payment method do you prefer?")
