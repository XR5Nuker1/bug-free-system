function getNameFor(member){
  let haveAnyNames = member.username||member.first_name||member.last_name;
  if(!haveAnyNames){ return ""}

  if(member.username){
    return "@" + member.username
  }

  return member.first_name ? member.first_name : member.last_name
}

function getLinkFor(member){
  return "[" + getNameFor(member) + "](tg://user?id=" + member.telegramid + ")";
}

function getIDFor(member){
 return member.telegramid
}
function getLastnameFor(member){
 return member.last_name
}
function getFirstnameFor(member){
 return member.first_name
}
function getFullInfo(member){
let Names = member.username
if(!Names){
return "â¹ï¸*First Name*: " + member.first_name +  "\nâ¹ï¸*Last Name*: " + member.last_name + "\n*ð³ID*: `" + member.telegramid + "`\nð©âð*Username*: None"
}else{
return "â¹ï¸*First Name*: " + member.first_name +  "\nâ¹ï¸*Last Name*: " + member.last_name + "\n*ð³ID*: `" + member.telegramid + "`\nð©âð*Username*: @" + member.username
}
}
publish({
    getNameFor: getNameFor,
    getLinkFor: getLinkFor,
    getTGID: getIDFor,
    getLastName: getLastnameFor,
    getFirstName: getFirstnameFor,
    getInfo: getFullInfo
})
