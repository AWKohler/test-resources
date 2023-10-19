
const initial_message = {"initial_message":"hey how are you?"}

if (document.createStyleSheet) {
  document.createStyleSheet("https://test-resources.vercel.app/embedai.css?v=2");
} else {
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://test-resources.vercel.app/embedai.css";
  link.media = "all";
  head.appendChild(link);
}

async function init(embedai_id) {
const htmlContent = `
<div class="embedai-welcome-message" id="welcome-message"></div>
<img class="embedai-logo" onclick="openIframe()" id="embedai-icon" />
<iframe class="embedai-iframe" frameBorder="0" id="embedai-iframe" style="display:none"/>
`

;
  const template = document.createElement("div");
  template.innerHTML = htmlContent;
  document.body.appendChild(template);


  //embedai-Qclufpg5
  /**
   * Append the source to the Iframe.
   * embedai_id : slug of the bot
   */
  let iframeSource =
    "https://embedai.thesamur.ai/embedai/embed/" + embedai_id;
  let widgetIframe = document.getElementById("embedai-iframe");
  widgetIframe.src = iframeSource;

  /**
   * Append the icon source to the button.
   * embedai_id : slug of the bot
   */
  let iconSource =
    "https://embedai.thesamur.ai/heybotnew/get_logo?slug=" + embedai_id;
  let iconItem = document.getElementById("embedai-icon");
  iconItem.src = iconSource;

  let initial_message_url = "https://embedai.thesamur.ai/heybotnew/get_initial_message?slug="+embedai_id;


  const response = await fetch(initial_message_url);
  const data = await response.json();	
  setTimeout(function(){
      setWelcomeMessage(data)
  },3000);	
}

function openIframe(){
  let getIframe = document.querySelector('.embedai-iframe')
  if(getIframe.style.display=='none'){
      getIframe.style.display='block'
      window.setTimeout(function(){
          getIframe.style.opacity = 1;
          getIframe.style.setProperty('transform','translateX(0px)')
      },100);
      getIframe.style.setProperty('pointer-events','auto')

  }else{
      getIframe.style.opacity = 0;
      getIframe.style.setProperty('transform','translateX(100px)')
      window.setTimeout(function(){
          getIframe.style.display = 'none';
      },100); 
      getIframe.style.setProperty('pointer-events','none')
  }

  const welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.style.setProperty('display','none')
}

function setWelcomeMessage(data){
  
  let welcomeMessageDiv =  document.getElementById("welcome-message");
  welcomeMessageDiv.innerHTML = '<p>'+data.initial_message+'</p>'
}

var id = ""
var getElement = document.querySelector('script[src^="https://test-resources.vercel.app/embedai.js"]')
// var getElement = document.querySelector('script[src^="https://embedai.thesamur.ai/embedai.js"]')
// var getElement = document.querySelector('script[src^="http://localhost:5000/embedai.js"]')

if(getElement.src.includes('?shop=')){
  id=getElement.src.split("=")[1]
}else{
  id=getElement.getAttribute("data-id")
}
init(id)
