function generateLiteContainer(info, tab) {
	if (!info.editable) {
		return;
	}
	chrome.tabs.sendRequest(tab.id, {"type" : "generateLiteContainer"});
}

chrome.contextMenus.create({"title": chrome.i18n.getMessage("contextTitle"), "contexts":["editable"], "onclick": generateLiteContainer});
