(function() {
  'use strict';

  // Widget configuration
  let config = {
    chatUrl: '',
    primaryColor: '#6366f1',
    position: 'bottom-left'
  };

  let isOpen = false;
  let widgetContainer = null;

  // Initialize the widget
  function init(options) {
    config = { ...config, ...options };
    createWidget();
    loadStyles();
  }

  // Load widget styles
  function loadStyles() {
    const style = document.createElement('style');
    style.id = 'chat-widget-styles';
    style.innerHTML = getStyles();
    document.head.appendChild(style);
  }

  // Create widget HTML
  function createWidget() {
    // Remove existing widget if any
    if (widgetContainer) {
      widgetContainer.remove();
    }

    // Create container
    widgetContainer = document.createElement('div');
    widgetContainer.id = 'chat-widget-container';
    widgetContainer.className = `chat-widget-${config.position}`;
    
    // Create button
    const button = document.createElement('button');
    button.id = 'chat-widget-button';
    button.innerHTML = `
      <svg class="chat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor"/>
      </svg>
      <svg class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
      </svg>
    `;
    button.addEventListener('click', toggleChat);

    // Create chat iframe container
    const chatFrame = document.createElement('div');
    chatFrame.id = 'chat-widget-frame';
    chatFrame.innerHTML = `
      <iframe 
        src="${config.chatUrl}" 
        title="Chat"
        frameborder="0"
        allow="microphone; camera"
      ></iframe>
    `;

    // Assemble widget
    widgetContainer.appendChild(button);
    widgetContainer.appendChild(chatFrame);
    document.body.appendChild(widgetContainer);
  }

  // Toggle chat visibility
  function toggleChat() {
    isOpen = !isOpen;
    const button = document.getElementById('chat-widget-button');
    const frame = document.getElementById('chat-widget-frame');
    
    if (isOpen) {
      button.classList.add('open');
      frame.classList.add('open');
    } else {
      button.classList.remove('open');
      frame.classList.remove('open');
    }
  }

  // Destroy widget
  function destroy() {
    if (widgetContainer) {
      widgetContainer.remove();
    }
    const styles = document.getElementById('chat-widget-styles');
    if (styles) {
      styles.remove();
    }
  }

  // Get CSS styles
  function getStyles() {
    return `
      #chat-widget-container {
        position: fixed;
        z-index: 9999;
      }

      #chat-widget-container.chat-widget-bottom-left {
        bottom: 20px;
        left: 20px;
      }

      #chat-widget-container.chat-widget-bottom-right {
        bottom: 20px;
        right: 20px;
      }

      #chat-widget-button {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background: ${config.primaryColor};
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      #chat-widget-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      }

      #chat-widget-button:active {
        transform: scale(0.95);
      }

      #chat-widget-button svg {
        width: 28px;
        height: 28px;
        color: white;
        position: absolute;
        transition: all 0.3s ease;
      }

      #chat-widget-button .chat-icon {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }

      #chat-widget-button .close-icon {
        opacity: 0;
        transform: scale(0.5) rotate(-90deg);
      }

      #chat-widget-button.open .chat-icon {
        opacity: 0;
        transform: scale(0.5) rotate(90deg);
      }

      #chat-widget-button.open .close-icon {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }

      #chat-widget-frame {
        position: absolute;
        bottom: 80px;
        left: 0;
        width: 380px;
        height: 600px;
        max-height: calc(100vh - 120px);
        border-radius: 16px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 10px 40px rgba(0, 0, 0, 0.1);
        background: white;
        opacity: 0;
        transform: scale(0.9) translateY(20px);
        pointer-events: none;
        transition: all 0.3s ease;
        overflow: hidden;
      }

      #chat-widget-frame.open {
        opacity: 1;
        transform: scale(1) translateY(0);
        pointer-events: all;
      }

      #chat-widget-frame iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 16px;
      }

      @media (max-width: 640px) {
        #chat-widget-frame {
          width: calc(100vw - 40px);
          height: calc(100vh - 120px);
          left: 50%;
          transform: translateX(-50%) scale(0.9) translateY(20px);
        }

        #chat-widget-frame.open {
          transform: translateX(-50%) scale(1) translateY(0);
        }

        #chat-widget-container.chat-widget-bottom-left,
        #chat-widget-container.chat-widget-bottom-right {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      /* Entrance animation */
      @keyframes widgetEntrance {
        from {
          opacity: 0;
          transform: scale(0.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      #chat-widget-button {
        animation: widgetEntrance 0.5s ease-out;
      }
    `;
  }

  // Public API
  window.chatWidget = function(action, options) {
    switch(action) {
      case 'init':
        init(options);
        break;
      case 'open':
        if (!isOpen) toggleChat();
        break;
      case 'close':
        if (isOpen) toggleChat();
        break;
      case 'destroy':
        destroy();
        break;
    }
  };
})();