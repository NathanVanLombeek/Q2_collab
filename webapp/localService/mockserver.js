sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {
		/**
		 * Initializes the mock server.
		 * You can configure the delay with the URL parameter "serverDelay".
		 * The local mock data in this folder is returned instead of the real data for testing.
		 * @public
		 */
		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "/"
			});

			/*oMockServer.simulate("localService/metadata.xml", {
				sMockdataBaseUrl: "localService/mockdata",
				bGenerateMissingMockData: true
			});*/
			var oUriParameters = jQuery.sap.getUriParameters();
			
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			// simulate
			var sPath = jQuery.sap.getModulePath("joris.ide.myquotations2MyQuotations2.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			
			oMockServer.start();

			// handling custom URL parameter step
			/*var fnCustom = function(oEvent) {
				var oXhr = oEvent.getParameter("oXhr");
				if (oXhr && oXhr.url.indexOf("first") > -1) {
					oEvent.getParameter("oFilteredData").results.splice(3, 100);
				}
			};
			oMockServer.attachAfter("GET", fnCustom, "Meetups");*/

			// start
			//oMockServer.start();

			jQuery.sap.log.info("Running the app with mock data");
		}

	};

});