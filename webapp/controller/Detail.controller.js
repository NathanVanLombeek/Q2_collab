sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("joris.ide.myquotations2MyQuotations2.controller.Detail", {
		onInit: function () {
			this.bus = sap.ui.getCore().getEventBus();
		},
		handleDetailPress: function () {
			MessageToast.show("Loading end column...");
			this.bus.publish("flexible", "setDetailDetailPage");
		}
	});
}, true);