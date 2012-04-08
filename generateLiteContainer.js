function generateLiteContainer() {
	var link = $.post("http://collabeverywhere.net/publicapi/0/createPad", { "text" : $(rightclicked_item).text() }, function (data) {
		var frame = $("<iframe>")	.attr("src", data.data.host + data.data.baseUrl + data.data.padID)
						.css("border", "0px")
//						.attr("height", $(rightclicked_item).attr("height"))
//						.attr("width", $(rightclicked_item).attr("width"));
		$(rightclicked_item).after(frame);
	}, "json");
}
