chrome.extension.onRequest.addListener(
  function(request, sender, fn_sendResponse) {
    var requestString = request.action;
    window.postMessage(requestString, document.location.origin);
  }
);
var script = document.createElement('script');
script.src = chrome.extension.getURL('loadscript.js');
document.body.appendChild(script);