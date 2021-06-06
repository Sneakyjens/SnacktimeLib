sap.ui.loader.config({
  paths: {
    "p36/SnacktimeLib": "/resources/p36/SnacktimeLib/",
  },
});

sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device", "sap/ui/model/json/JSONModel"],
  function (UIComponent, Device, JSONModel) {
    "use strict";

    return UIComponent.extend(
      "p36.SnacktimeLib.component.configurator.Component",
      {
        metadata: {
          manifest: "json",
          library: "p36.SnacktimeLib",
          properties: {
            context: { type: "string", defaultValue: "Basic" },
          },
          aggregations: {},
          events: {
            configCompleted: {
              parameters: {
                config: { type: "object" },
              },
            },
          },
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
          // call the base component's init function

          UIComponent.prototype.init.apply(this, arguments);

          // enable routing
          this.getRouter().initialize();

          console.log("Component loaded");
          // set the device model
        },
      }
    );
  }
);
