function generateLiteContainer() {
	var link = $.post("http://collabeverywhere.net/publicapi/0/createPad", { "text" : $(rightclicked_item).val() }, function (data) {
		var padURL = data.data.host + data.data.baseUrl + data.data.padID;

		var textbox = $(rightclicked_item);
		var frame = $("<iframe>")	.attr("src", padURL + "?showControls=false")
						.css("border", "0px")
						.attr("height", "100%")
						.attr("width", "100%");
		var button = $("<button>")	.text(chrome.i18n.getMessage("cancelButtonLabel"));
		var linkText = $("<a>")		.attr("href", padURL)
						.text(padURL);
		var control = $("<div>")	.append(button).append(linkText).append(frame)
						.addClass("control")
						.attr("height", textbox.height())
						.attr("width", textbox.width());

		button.click(function () {
			$.get(padURL + "/export/txt", function (text) {
				textbox.val(text);
			});
			textbox.removeClass("hiddenTextbox");
			control.detach();
		});

		textbox.addClass("hiddenTextbox").after(control);
	}, "json");
}
