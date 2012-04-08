// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function generateLiteContainer(info, tab) {
	if (!info.editable) {
		return;
	}

	console.log("tab: " + JSON.stringify(tab));
}

chrome.contextMenus.create({"title": chrome.i18n.getMessage("contextTitle"), "contexts":["editable"], "onclick": generateLiteContainer});
