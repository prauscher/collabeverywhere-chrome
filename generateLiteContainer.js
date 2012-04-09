function generateLiteContainer() {
	var link = $.post("http://collabeverywhere.net/publicapi/0/createPad", { "text" : $(rightclicked_item).val() }, function (data) {
		var frame = $("<iframe>")	.attr("src", data.data.host + data.data.baseUrl + data.data.padID)
						.css("border", "0px")
						.attr("height", $(rightclicked_item).height())
						.attr("width", $(rightclicked_item).width());
		var button = $("<button>").text("Rev").click(function () {
			$.get(data.data.host + data.data.baseUrl + data.data.padID + "/export/txt", function (text) {
				alert(text);
				$(this).prev().val(text);
			});
			$(this).prev().removeClass("hiddenTextbox");
			$(this).next().detach();
			$(this).detach();
		});

		$(rightclicked_item).addClass("hiddenTextbox").after(frame).after(button);
	}, "json");
}
