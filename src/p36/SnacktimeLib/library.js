/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library p36.SnacktimeLib.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "p36.SnacktimeLib",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"p36.SnacktimeLib.ExampleColor"
		],
		interfaces: [],
		controls: [
			"p36.SnacktimeLib.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>SnacktimeLib</code>
	 *
	 * @namespace
	 * @name p36.SnacktimeLib
	 * @author Daniel Kawkab
	 * @version ${version}
	 * @public
	 */
	var thisLib = p36.SnacktimeLib;

	/**
	 * Semantic Colors of the <code>p36.SnacktimeLib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
