//TODO: Get the color from the website
// have any questions?
if (document.createStyleSheet) {
  document.createStyleSheet("https://test-resources.vercel.app/embedchat.css?v=2");
} else {
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://test-resources.vercel.app/embedchat.css";
  link.media = "all";
  head.appendChild(link);
}

async function init(embedchat_id) {
const htmlContent = `
<div class="embedchat-welcome-message" id="welcome-message"></div>
<div class="embedchat-logo" onclick="openIframe()">
    <img class="embedchat-icn" id="embedchat-icon" />
</div>

<iframe class="embedchat-iframe" frameBorder="0" id="embedchat-iframe" style="display:none"/>
`
;

  const template = document.createElement("div");
  template.innerHTML = htmlContent;
  document.body.appendChild(template);

    let iframeSource = "";

    if (embedchat_id === "demo") {
        iframeSource = "https://botflow.io/demo";
    } else {
        // Set default values if the embedchat_id is not "demo"
        // You can modify these default values accordingly
        // iframeSource = "https://embedded.botflow.io/bot/" + embedchat_id;
        iframeSource = "https://embedded.botflow.io/liberty/" + embedchat_id;
    }

  // /**
  //  * Append the source to the Iframe.
  //  * embedchat_id : slug of the bot
  //  */
  // let iframeSource =
  //   // "http://localhost:3000/chat/" + embedchat_id;
  //   // "https://chatflow-ai-saas.vercel.app/chat/clrnuu3yo0001l408ppnmat73";
  //   // "https://chatflow-ai-saas.vercel.app";
  //   // "https://awkohler.dev";
  //   // "https://botflow.io/demo";
  //   "https://embedded.botflow.io/bot/" + embedchat_id;
  //   // "https://embedded.botflow.io/bot/clrnuu3yo0001l408ppnmat73";
  //   // "https://embedded.botflow.io/id/69";
  //   // "http://localhost:3000/demo";

  let widgetIframe = document.getElementById("embedchat-iframe");
  widgetIframe.src = iframeSource;

  /**
   * Append the icon source to the button.
   * embedchat_id : slug of the bot
   */
  // let iconSource =
  let iconSource =
    // "https://imgs.search.brave.com/o__KanFDuT4Bv1YoheAzOauIxvfMfZax7H7hFaHGtz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9jaGF0LWJ1/YmJsZS1pY29uLTI1/NngyNTYtNmZzdTRw/czUucG5n";
    "https://www.svgrepo.com/show/529484/chat-round-unread.svg";
  let iconItem = document.getElementById("embedchat-icon");
  iconItem.src = iconSource;

  // let initial_message_url = "https://website/get_initial_message?slug="+embedchat_id;

  // const response = await fetch(initial_message_url);
  // const data = await response.json();
  // setTimeout(function(){
  //     setWelcomeMessage(data)
  // },3000);

  setWelcomeMessage2("Hi there, ask me anything!")
}

function openIframe(){
  let getIframe = document.querySelector('.embedchat-iframe')
  if(getIframe.style.display=='none'){
      getIframe.style.display='block'
      window.setTimeout(function(){
          getIframe.style.opacity = 1;
          getIframe.style.setProperty('transform','translateX(0px)')
      },100);
      getIframe.style.setProperty('pointer-events','auto')

      // Change the image source to the down arrow when the iframe is open
      let iconItem = document.getElementById('embedchat-icon');
      iconItem.src = 'https://www.svgrepo.com/show/80156/down-arrow.svg';
  }else{
      getIframe.style.opacity = 0;
      getIframe.style.setProperty('transform','translateX(100px)')
      window.setTimeout(function(){
          getIframe.style.display = 'none';
      },100);
      getIframe.style.setProperty('pointer-events','none')

      // Change the image source back to the original source when the iframe is closed
      let iconItem = document.getElementById('embedchat-icon');
      iconItem.src = 'https://www.svgrepo.com/show/529484/chat-round-unread.svg';
  }

  const welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.style.setProperty('display','none')
}

function setWelcomeMessage(data){
  
  let welcomeMessageDiv =  document.getElementById("welcome-message");
  welcomeMessageDiv.innerHTML = '<p>'+data.initial_message+'</p>'
}

function setWelcomeMessage2(data){

  let welcomeMessageDiv =  document.getElementById("welcome-message");
  welcomeMessageDiv.innerHTML = '<p>'+data+'</p>'
}

var id = document.getElementById("embedchat").getAttribute("data-id");

init(id)
