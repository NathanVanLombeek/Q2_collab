sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"joris/ide/myquotations2MyQuotations2/model/models",
	"joris/ide/myquotations2MyQuotations2/localService/mockserver"
], function(UIComponent, Device, models, mockserver) {
	"use strict";

	return UIComponent.extend("joris.ide.myquotations2MyQuotations2.Component", {
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			//start mock server
		//	mockserver.init();
			// set the device model
			this.setModel(models.createDeviceModel(), "device");

		}
	});
});