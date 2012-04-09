chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
	if (request.type == "showPageAction") {
		chrome.pageAction.show(sender.tab.id);
	}
	if (request.type == "hidePageAction") {
		chrome.pageAction.hide(sender.tab.id);
	}
});

chrome.pageAction.onClicked.addListener(function (tab) {
	chrome.tabs.sendRequest(tab.id, {"type" : "generateLiteContainer_pageAction"});
});

function callGenerateLiteContainer(info, tab) {
	if (!info.editable) {
		return;
	}
	chrome.tabs.sendRequest(tab.id, {"type" : "generateLiteContainer_context"});
}

chrome.contextMenus.create({"title": chrome.i18n.getMessage("contextTitle"), "contexts":["editable"], "onclick": callGenerateLiteContainer});
