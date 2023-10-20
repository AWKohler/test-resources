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
<div class="embedai-logo" onclick="openIframe()">
    <img class="embedai-icn" id="embedai-icon" />
</div>
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
  // let iframeSource =
  //   "https://embedai.thesamur.ai/embedai/embed/" + embedai_id;
  let iframeSource =
    "http://localhost:3003/chat/92";
  // let iframeSource =
  //   "https://chathn.vercel.app/";
  let widgetIframe = document.getElementById("embedai-iframe");
  widgetIframe.src = iframeSource;

  /**
   * Append the icon source to the button.
   * embedai_id : slug of the bot
   */
  // let iconSource =
  //   "https://embedai.thesamur.ai/heybotnew/get_logo?slug=" + embedai_id;
  let iconSource =
    "https://imgs.search.brave.com/o__KanFDuT4Bv1YoheAzOauIxvfMfZax7H7hFaHGtz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9jaGF0LWJ1/YmJsZS1pY29uLTI1/NngyNTYtNmZzdTRw/czUucG5n";
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

      // Change the image source to the down arrow when the iframe is open
      let iconItem = document.getElementById('embedai-icon');
      iconItem.src = 'https://www.svgrepo.com/show/80156/down-arrow.svg';
  }else{
      getIframe.style.opacity = 0;
      getIframe.style.setProperty('transform','translateX(100px)')
      window.setTimeout(function(){
          getIframe.style.display = 'none';
      },100); 
      getIframe.style.setProperty('pointer-events','none')

      // Change the image source back to the original source when the iframe is closed
      let iconItem = document.getElementById('embedai-icon');
      iconItem.src = 'https://imgs.search.brave.com/o__KanFDuT4Bv1YoheAzOauIxvfMfZax7H7hFaHGtz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9jaGF0LWJ1/YmJsZS1pY29uLTI1/NngyNTYtNmZzdTRw/czUucG5n';
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
