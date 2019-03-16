console.log('Background running');

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'showPageAction') {
        chrome.pageAction.show(sender.tab.id);
    }
});

chrome.pageAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(tab)
	let msg = {
		txt: "click"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}
