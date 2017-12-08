sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init: function () {
			// create
			var oMockServer = new MockServer({
				rootUri: "/destinations/northwind/V2/Northwind/Northwind.svc/"
			}); 
			var oUriParameters = jQuery.sap.getUriParameters();
			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			// simulate
			var sPath = jQuery.sap.getModulePath("joris.ide.myquotations2MyQuotations2.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			
			var aRequests = oMockServer.getRequests();
			aRequests.push({
				method: "GET",
				path: new RegExp("FindUpcomingMeetups"),
				response: function(oXhr, sUrlParams) {
					var oResponse = jQuery.sap.sjax({
						url: oMockServer.getRootUri()+"Meetups"
					});
					oXhr.respondJSON(200, {}, oResponse.data);
					return true;
				}
			});
			aRequests.push({
				method: "POST",
				path: new RegExp("addMeetups"),
				response: function(oXhr) {
					//var postData = oXhr.requestBody;
					var meetsUpList = oMockServer.getEntitySetData('Meetups');
					meetsUpList.push({
						"MeetupID": 5,
						"Title": "123414532",
						"EventDate": "/Date(1278450000000)/",
						"Description": "The best way to expand your knowledge and network of the Toronto technology community"
					});
					 oMockServer.setEntitySetData("Meetups", meetsUpList);
					 oXhr.respondJSON(200, {}, JSON.stringify({
						d: {success:meetsUpList}
					}));
					 return true;
				}.bind(this)
			});
			oMockServer.setRequests(aRequests);
			// start
			oMockServer.start();
		}
	};
});