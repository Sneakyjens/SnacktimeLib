sap.ui.define(function() {
	"use strict";

	return {
		name: "QUnit TestSuite for p36.SnacktimeLib",
		defaults: {
			bootCore: true,
			ui5: {
				libs: "sap.ui.core,p36.SnacktimeLib",
				theme: "sap_fiori_3",
				noConflict: true,
				preload: "auto"
			},
			qunit: {
				version: 2,
				reorder: false
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			},
			module: "./{name}.qunit"
		},
		tests: {
			// test file for the Example control
			Example: {
				title: "QUnit Test for Example",
				_alternativeTitle: "QUnit tests: p36.SnacktimeLib.Example"
			}
		}
	};

});
