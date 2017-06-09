chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(null, {file: "shades.js"});
  chrome.tabs.insertCSS(null, {file: "grayscale.css"})
});