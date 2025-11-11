import BaseController from "./BaseController";
import History from "sap/ui/core/routing/History";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class SensorStatus extends BaseController {
    public onInit(): void {
        // Initialization code
    }

    public onNavBack(): void {
        const sPreviousHash = History.getInstance().getPreviousHash();
        if (sPreviousHash !== undefined) {
            window.history.go(-1);
        } else {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("sensors", {}, undefined, true);
        }
    }
}
