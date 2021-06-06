/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library p36.SnacktimeLib.
 */
sap.ui.define(["sap/ui/core/library"], function () {
  "use strict";

  // delegate further initialization of this library to the Core
  // Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
  sap.ui.getCore().initLibrary({
    name: "p36.SnacktimeLib",
    version: "1.0",
    dependencies: [
      // keep in sync with the ui5.yaml and .library files
      "sap.ui.core",
    ],
    types: [],
    interfaces: [],
    controls: [],
    elements: [],
    noLibraryCSS: false, // if no CSS is provided, you can disable the library.css load here
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

  return p36.SnacktimeLib;
});
