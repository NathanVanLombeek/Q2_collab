sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("joris.ide.myquotations2MyQuotations2.controller.Master", {
		onInit: function () {
			this.bus = sap.ui.getCore().getEventBus();
		},
		handleMasterPress: function () {
			MessageToast.show("Loading mid column...");
			this.bus.publish("flexible", "setDetailPage");
		}
	});
}, true);