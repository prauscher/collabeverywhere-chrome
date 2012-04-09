chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	// In some cases, we are not the correct frame ;-)
	if (rightclicked_item == null) {
		return;
	}

	var textbox = $(rightclicked_item);
	var link = $.post("http://collabeverywhere.net/publicapi/0/createPad", { "text" : textbox.val() }, function (data) {
		var padURL = data.data.host + data.data.baseUrl + data.data.padID;

		var frame = $("<iframe>")	.attr("src", padURL + "?showControls=false")
						.css("border", "0px")
						.attr("height", "100%")
						.attr("width", "100%");
		var button = $("<button>")	.text(chrome.i18n.getMessage("cancelButtonLabel"));
		var linkText = $("<input>")	.attr("type", "text")
						.val(padURL)
						.click(function() {$(this).select();});
		var control = $("<div>")	.append(button).append(linkText).append(frame)
						.addClass("control")
						.attr("height", textbox.height())
						.attr("width", textbox.width());

		textbox.parent("form").submit(function() {
			if ($(this).find(".hiddenTextbox").size() > 0) {
				alert(chrome.i18n.getMessage("padsStillOpen"));
				return false;
			}
		});

		button.click(function () {
			$.get(padURL + "/export/txt", function (text) {
				textbox.val(text);
			});
			textbox.removeClass("hiddenTextbox");
			control.detach();
		});

		textbox.addClass("hiddenTextbox").after(control);
	}, "json");
});

