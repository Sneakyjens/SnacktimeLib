sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend(
    "p36.SnacktimeLib.component.configurator.controller.Detail",
    {
      onInit: function () {
        console.log("Lib working");
        this.byId("test").addItem(
          new sap.m.Text({
            text: "123",
          })
        );
      },
    }
  );
});
