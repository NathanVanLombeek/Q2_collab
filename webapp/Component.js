sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"joris/ide/myquotations2MyQuotations2/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("joris.ide.myquotations2MyQuotations2.Component", {
		metadata: {
			rootView: "joris.ide.myquotations2MyQuotations2.view.App",
			dependencies: {
				libs: [
					"sap.m",
					"sap.f"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"Component.js",
						"App.controller.js",
						"App.view.xml",
						"Master.controller.js",
						"Master.view.xml",
						"Detail.controller.js",
						"Detail.view.xml",
						"DetailDetail.view.xml"
					]
				}
			}
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});