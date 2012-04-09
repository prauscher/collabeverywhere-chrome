// Copied from AdBlock

// Record the last element to be right-clicked, since that information isn't
// passed to the contextmenu click handler that calls top_open_blacklist_ui
var rightclicked_item = null;
var clicked_item = null;

if (document.body) {
	document.body.addEventListener("contextmenu", function(e) {
		rightclicked_item = e.srcElement;
	});
	document.body.addEventListener("click", function(e) {
		if (e.srcElement.type == "textarea") {
			clicked_item = e.srcElement;
			chrome.extension.sendRequest({"type":"showPageAction"});
		} else {
			chrome.extension.sendRequest({"type":"hidePageAction"});
			clicked_item = null;	
		}
		rightclicked_item = null;
	});
}
