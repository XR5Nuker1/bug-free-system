function getURInfo(url){
let data = AdminPanel.getFieldValue({
  panel_name: "Custom commands", // panel name
  field_name: "On Error Command" // field name
})
let data1 = AdminPanel.getFieldValue({
  panel_name: "Custom commands", // panel name
  field_name: "On Loading Command" // field name
})
if(!data||!data1){
HTTP.get( {
    url: url,
    success: '/onLoading',
    error: '/onError'
    
    // if you need pass headers.
    // By default header "content-type" = 'application/json'
    // headers: { "content-type": json }
    // folow_redirects: true, // if you need folow by redirects
    // background: true - if you have timeout error
  } )

/* also you can send POST request
  HTTP.post( {
    url: url,
    success: '/onLoading ',
    body: {},  // body params
    // cookies: "" // cookies
    // headers: { "content-type": json } // - if you need headers
    // folow_redirects: true, // if you need folow by redirects
  } )
*/
}else{
HTTP.get( {
    url: url,
    success: data1,
    error: data
    
    // if you need pass headers.
    // By default header "content-type" = 'application/json'
    // headers: { "content-type": json }
    // folow_redirects: true, // if you need folow by redirects
    // background: true - if you have timeout error
  } )

/* also you can send POST request
  HTTP.post( {
    url: url,
    success: data1,
    body: {},  // body params
    // cookies: "" // cookies
    // headers: { "content-type": json } // - if you need headers
    // folow_redirects: true, // if you need folow by redirects
  } )
*/
}
}

function setupcmd(){
var panel = {
    // Panel title
    title: "HTTP Get Custom commands",
    description: "You can setup http getter lib custom commands (setup both to work)",
    icon: "lock",

    fields: [
      {
        name: "On Loading Command",
        title: "on http loading",
        description: "This is for http loading",
        type: "string",
        placeholder: "/onLoading",
        icon: "key"
      },
      {
        name: "On Error Command",
        title: "on http error",
        description: "this command is for when http url can not be loaded",
        type: "string",
        placeholder: "/onError",
        icon: "key"
      }]
}

AdminPanel.setPanel({
    panel_name: "Custom commands",
    data: panel
  });
 
  Bot.sendMessage("Your admin panel has been setup. Setup both commands for custom commands to work")

}
publish({
    getUrlInfo: getURInfo,
    setupcmd: setupcmd
})
