sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend(
    "p36.SnacktimeLib.component.configurator.controller.Base",
    {
      onInit: function () {
        console.log("Lib working");
        this.byId("test").addItem(
          new sap.m.Text({
            text: "123",
          })
        );
        // this.router = sap.ui.core.UIComponent.getRouterFor(this);
        // this.router.attachRouteMatched(this.onRouteMatched, this);

        this.getView().addEventDelegate({
          onBeforeShow: () => {
            console.log("OnBeforeShow");
          },
        });
      },

      onAfterRendering: async function () {
        console.log("rendered");
      },
      onBeforeRendering: async function () {
        debugger;
      },

      // onRouteMatched: function (event) {
      //   let orderpath = event.getParameter("arguments").orderpath;
      //   this.getView().bindElement({
      //     path: `/suppliers/${orderpath}`,
      //     model: "order",
      //   });
      // },
    }
  );
});
