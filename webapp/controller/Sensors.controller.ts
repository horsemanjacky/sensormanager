/* eslint-disable @typescript-eslint/no-unsafe-call */
// import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Filter from "sap/ui/model/Filter";
import { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
// import List from "sap/m/List";
import ListBinding from "sap/ui/model/ListBinding";
import FilterOperator from "sap/ui/model/FilterOperator";
import { Threshold } from "../model/formatter";
import Control from "sap/ui/core/Control";
import Dialog from "@ui5/webcomponents/dist/Dialog";
import Page from "sap/m/Page";
import List from "@ui5/webcomponents/dist/List";
import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard";
import UIComponent from "sap/ui/core/UIComponent";
import { ListItemBase$PressEvent } from "sap/m/ListItemBase";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class Sensors extends BaseController {

    public onInit(): void | undefined {
        this.getSensorModel().dataLoaded().then(async () => {
            const resourceBundle = await this.getResourceBundle();
            MessageToast.show(resourceBundle.getText("sensorModelLoaded"), { closeOnBrowserNavigation: false });


        }).catch(async (error: Error) => {
            const resourceBundle = await this.getResourceBundle();
            MessageToast.show(resourceBundle.getText("sensorModelLoadError", [error.message]), { closeOnBrowserNavigation: false });

        })
    }

    public getSensorModel(): JSONModel {
        return (this.getOwnerComponent().getModel("sensorModel") as JSONModel);
    }


    public sayHello(): void {
        MessageToast.show("Hello World!");
    }


    private customFilters: Filter[] = [];
    private statusFilters: Filter[] = [];


    onSensorSelect(event: IconTabBar$SelectEvent): void {

        const listBinding = this.getView().byId("sensorsList")?.getBinding("items") as ListBinding;
        const key = event.getParameter("key");

        if (key === "Cold") {
            this.statusFilters = [new Filter("temperature", FilterOperator.LT, Threshold.Warm, false)];
        } else if (key === "Warm") {
            this.statusFilters = [new Filter("temperature", FilterOperator.BT, Threshold.Warm, Threshold.Hot)];
        } else if (key === "Hot") {
            this.statusFilters = [new Filter("temperature", FilterOperator.GE, Threshold.Hot, false)];
        } else {
            this.statusFilters = [];
        }

        // const allFilters = this.customFilters.concat(this.statusFilters);
        listBinding.filter(this.statusFilters);
        listBinding.filter(this.statusFilters.concat(this.customFilters));


        // MessageToast.show("Sensor selected!");
    }

    private dialogPromise: Promise<Dialog>;

    onCustomerSelect(): void {
        if (!(this.dialogPromise instanceof Promise)) {
            this.dialogPromise = this.loadFragment({
                name: "keepcool.sensormanager.view.CustomerSelectDialog"
            }).then((control: Control | Control[]) => (control instanceof Array ? control[0] : control) as Dialog);
        }


        this.dialogPromise.then((dialog: Dialog) => {
            const page = this.byId("sensors") as Page;
            page.addContent(dialog);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            dialog.setOpen(true);
        }).catch((err: Error) => {
            MessageToast.show(err.message);
        });
    }

    onCustomerSelectConfirm(): void {
        const selectCustomersList = this.byId("selectCustomers") as List;

        const listItems = selectCustomersList.getListItems() as ListItemStandard[];
        const selectedItems = listItems.filter(item => item.getSelected());

        this.customFilters = selectedItems.map(function (item: ListItemStandard) {
            return new Filter("customer", FilterOperator.EQ, item.getText());
        });

        const listBinding = this.getView()?.byId("sensorsList")?.getBinding("items") as ListBinding;
        listBinding.filter(this.customFilters.concat(this.statusFilters));

        this.dialogPromise.then((dialog) => {
            dialog.setOpen(false);
        }).catch((err: Error) => {
            MessageToast.show(err.message);
        });
    }

    onCustomerSelectCancel(): void {
        this.dialogPromise.then((dialog) => {
            dialog.setOpen(false);
        }).catch((err: Error) => {
            MessageToast.show(err.message);
        });
    }

    onNavToSensorStatus(): void {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("sensorStatus");
    }

    navToSensorStatus(event: ListItemBase$PressEvent): void {
        const sensorIndex = (event.getSource() as Control).getBindingContext("sensorModel")?.getProperty("index") as number;
        this.navTo("sensorStatus", { index: sensorIndex });
    }

}
