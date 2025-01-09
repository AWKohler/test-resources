// if (document.createStyleSheet) {
//     document.createStyleSheet("https://test-resources.vercel.app/embedchat.css?v=2");
// } else {
//     var head = document.getElementsByTagName("head")[0];
//     var link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.type = "text/css";
//     link.href = "https://test-resources.vercel.app/embedchat.css";
//     link.media = "all";
//     head.appendChild(link);
// }
//
// async function init(embedchat_id) {
//
//     const htmlContent = `
// <div class="embedchat-welcome-message" id="welcome-message"></div>
// <div class="embedchat-logo" onclick="openIframe()">
//
// <svg class="embedchat-icn" id="embedchat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path opacity="0.8" d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z" fill="#ffffff"/>
// </svg>
//
// </div>
//
// <iframe class="embedchat-iframe" frameBorder="0" id="embedchat-iframe" style="display:none"/>
// `;
//
//     window.addEventListener('message', function(event) {
//         if ((event.origin !== 'http://localhost:3000') && event.origin !== 'https://botflow.io') {
//             return; // Ignore messages from untrusted origins
//         }
//
//         // Handle the 'closeIframe' message
//         if (event.data === 'closeIframe') {
//             openIframe();
//         }
//     });
//
//     const template = document.createElement("div");
//     template.innerHTML = htmlContent;
//     document.body.appendChild(template);
//
//     let iframeSource = "";
//
//
//     // if (embedchat_id === "demo") {
//     //
//     //     iframeSource = "https://botflow.io/demo";
//     // } else if (embedchat_id === "grizzly") {
//     //     iframeSource = "https://embedded.botflow.io/grizzly";
//     // } else {
//     //     iframeSource = "https://embedded.botflow.io/bot/" + embedchat_id;
//     // }
//
//
//     // if (embedchat_id === "grizzly") {
//     if (embedchat_id === "cm0fqod6o0001jv0c6fugtef5") {
//         iframeSource = "https://embedded.botflow.io/grizzly";
//     } else {
//         // iframeSource = "http://localhost:3000/chat/" + embedchat_id;
//         iframeSource = "https://embedded.botflow.io/bot/" + embedchat_id;
//         // iframeSource = "http://localhost:3000/liberty";
//         // iframeSource = "https://embedded.botflow.io/grizzly";
//         // iframeSource = "http://localhost:3001/grizzly";
//     }
//
//     let widgetIframe = document.getElementById("embedchat-iframe");
//     widgetIframe.src = iframeSource;
//
//     await callApi(embedchat_id);
// }
//
// // Helper function to determine the accent color
// function getAccentColor(color) {
//     const hex = color.replace('#', '');
//     const r = parseInt(hex.substring(0, 2), 16);
//     const g = parseInt(hex.substring(2, 4), 16);
//     const b = parseInt(hex.substring(4, 6), 16);
//     const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
//     return luminance > 0.5 ? '#000000' : '#ffffff';
// }
//
// function setColor(color) {
//     let getLogo = document.querySelector('.embedchat-logo');
//     let getIcon = document.querySelector('#embedchat-icon');
//
//     getLogo.style.setProperty('background-color', color);
//     getLogo.style.setProperty('visibility', "visible");
//
//     const accentColor = getAccentColor(color);
//     getIcon.querySelector('path').setAttribute('fill', accentColor);
// }
//
// function openIframe() {
//     let getIframe = document.querySelector('.embedchat-iframe');
//     if (getIframe.style.display == 'none') {
//         getIframe.style.display = 'block';
//         window.setTimeout(function() {
//             getIframe.style.opacity = 1;
//             // getIframe.style.setProperty('transform', 'translateX(0px)');
//             getIframe.style.setProperty('transform', 'translateY(0px)');
//         }, 100);
//         getIframe.style.setProperty('pointer-events', 'auto');
//
//         let iconItem = document.getElementById('embedchat-icon');
//         iconItem.src = 'https://www.svgrepo.com/show/80156/down-arrow.svg';
//     } else {
//         getIframe.style.opacity = 0;
//         // getIframe.style.setProperty('transform', 'translateX(100px)');
//         getIframe.style.setProperty('transform', 'translateY(100px)');
//         window.setTimeout(function() {
//             getIframe.style.display = 'none';
//         }, 100);
//         getIframe.style.setProperty('pointer-events', 'none');
//
//         let iconItem = document.getElementById('embedchat-icon');
//         iconItem.src = 'https://www.svgrepo.com/show/529484/chat-round-unread.svg';
//     }
//
//     const welcomeMessage = document.getElementById("welcome-message");
//     welcomeMessage.style.setProperty('display', 'none');
// }
//
// const apiUrl = 'https://botflow.io/api/bot';
//
// async function callApi(chatbotID) {
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ chatbotID: chatbotID }),
//         });
//
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//
//         const data = await response.json();
//         console.log(data);
//
//         setWelcomeMessage2(data.welcomeMessage);
//         setColor(data.color);
//
//         let iframe = document.getElementById("embedchat-iframe");
//         if (iframe) {
//             iframe.style.borderRadius = data.cornerRadius;
//         }
//
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }
//
// function setWelcomeMessage(data) {
//     let welcomeMessageDiv = document.getElementById("welcome-message");
//     welcomeMessageDiv.innerHTML = '<p>' + data.initial_message + '</p>';
// }
//
// function setWelcomeMessage2(data) {
//     let welcomeMessageDiv = document.getElementById("welcome-message");
//     welcomeMessageDiv.innerHTML = '<p>' + data + '</p>';
// }
//
// var id = document.getElementById("embedchat").getAttribute("data-id");
//
// init(id);


if (document.createStyleSheet) {
    document.createStyleSheet("https://botflow.io/embedchat.css?v=2");
} else {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://botflow.io/embedchat.css";
    link.media = "all";
    head.appendChild(link);
}

async function init(embedchat_id) {
    const htmlContent = `
<div class="embedchat-welcome-message" id="welcome-message"></div>
<div class="embedchat-logo" onclick="openIframe()">

<svg class="embedchat-icn" id="embedchat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z" fill="#ffffff"/>
</svg>

</div>

<iframe class="embedchat-iframe" frameBorder="0" id="embedchat-iframe" style="display:none"/>
`;

    window.addEventListener("message", function (event) {
        if (
            event.origin !== "https://localhost:3000" &&
            event.origin !== "https://botflow.io" &&
            event.origin !== "https://embedded.botflow.io"
        ) {
            return; // Ignore messages from untrusted origins
        }

        // Handle the 'closeIframe' message
        if (event.data === "closeIframe") {
            openIframe();
        }
    });

    const template = document.createElement("div");
    template.innerHTML = htmlContent;
    document.body.appendChild(template);

    let iframeSource = "";

    // if (embedchat_id === "cm14bbjru0001l70c0v1yl4ls") {
    if (embedchat_id === "cm0fqod6o0001jv0c6fugtef5") {
        // iframeSource = "https://embedded.botflow.io/grizzly";
        iframeSource = "https://embedded.botflow.io/grizzly";
    } else if (embedchat_id === "cm1p958z00001la0cazv58xlf") {
        iframeSource = "http://localhost:3000/voice";
        // iframeSource = "https://embedded.botflow.io/liberty";
    } else {
        // iframeSource = "https://embedded.botflow.io/bot/" + embedchat_id;
        // iframeSource = "http://localhost:3000/bot/" + embedchat_id;
        iframeSource = "http://localhost:3002/botflow";
    }

    let widgetIframe = document.getElementById("embedchat-iframe");
    widgetIframe.src = iframeSource;

    await callApi(embedchat_id);
}

// Helper function to determine the accent color
function getAccentColor(color) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
}

function setColor(color) {
    let getLogo = document.querySelector(".embedchat-logo");
    let getIcon = document.querySelector("#embedchat-icon");

    getLogo.style.setProperty("background-color", color);
    getLogo.style.setProperty("visibility", "visible");

    const accentColor = getAccentColor(color);
    getIcon.querySelector("path").setAttribute("fill", accentColor);
}

function openIframe() {
    let getIframe = document.querySelector(".embedchat-iframe");
    if (getIframe.style.display == "none") {
        getIframe.style.display = "block";
        window.setTimeout(function () {
            getIframe.style.opacity = 1;
            getIframe.style.setProperty("transform", "translateX(0px)");
        }, 100);
        getIframe.style.setProperty("pointer-events", "auto");

        let iconItem = document.getElementById("embedchat-icon");
        iconItem.src = "https://www.svgrepo.com/show/80156/down-arrow.svg";
    } else {
        getIframe.style.opacity = 0;
        getIframe.style.setProperty("transform", "translateX(100px)");
        window.setTimeout(function () {
            getIframe.style.display = "none";
        }, 100);
        getIframe.style.setProperty("pointer-events", "none");

        let iconItem = document.getElementById("embedchat-icon");
        iconItem.src = "https://www.svgrepo.com/show/529484/chat-round-unread.svg";
    }

    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.style.setProperty("display", "none");
}

const apiUrl = "https://botflow.io/api/bot";

async function callApi(chatbotID) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chatbotID: chatbotID }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        setWelcomeMessage2(data.welcomeMessage);
        setColor(data.color);

        let iframe = document.getElementById("embedchat-iframe");
        if (iframe) {
            iframe.style.borderRadius = data.cornerRadius;
        }
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

function setWelcomeMessage(data) {
    let welcomeMessageDiv = document.getElementById("welcome-message");
    welcomeMessageDiv.innerHTML = "<p>" + data.initial_message + "</p>";
}

function setWelcomeMessage2(data) {
    let welcomeMessageDiv = document.getElementById("welcome-message");
    welcomeMessageDiv.innerHTML = "<p class=\"welcome-text\">" + data + "</p>";
}

var id = document.getElementById("embedchat").getAttribute("data-id");

init(id);
