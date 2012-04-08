function generateLiteContainer(info, tab) {
	if (!info.editable) {
		return;
	}
	chrome.tabs.executeScript(undefined, {"code": "generateLiteContainer()"});
}

chrome.contextMenus.create({"title": chrome.i18n.getMessage("contextTitle"), "contexts":["editable"], "onclick": generateLiteContainer});
