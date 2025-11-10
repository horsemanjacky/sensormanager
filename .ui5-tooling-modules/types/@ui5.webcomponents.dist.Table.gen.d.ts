// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { TableOverflowMode, ITableFeature } from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as TableRow } from "@ui5/webcomponents/dist/TableRow";

import type { default as TableHeaderRow } from "@ui5/webcomponents/dist/TableHeaderRow";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

import type { default as TableRowActionBase } from "@ui5/webcomponents/dist/TableRowActionBase";

declare module "@ui5/webcomponents/dist/Table" {
  export interface $TableSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text to be displayed when there are no rows in the component.
     */
    noDataText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the mode of the <code>ui5-table</code> overflow behavior.
     *
     * Available options are:
     *
     * <code>Scroll</code> - Columns are shown as regular columns and horizontal scrolling is enabled.
     * <code>Popin</code> - Columns are shown as pop-ins instead of regular columns.
     */
    overflowMode?:
      | TableOverflowMode
      | keyof typeof TableOverflowMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the loading indicator should be shown.
     *
     * **Note:** When the component is loading, it is not interactive.
     */
    loading?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
     */
    loadingDelay?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the maximum number of row actions that is displayed, which determines the width of the row action column.
     *
     * **Note:** It is recommended to use a maximum of 3 row actions, as exceeding this limit may take up too much space on smaller screens.
     */
    rowActionCount?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the table rows are displayed with alternating background colors.
     */
    alternateRowColors?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The text-content of the Web Component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'width' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the rows of the component.
     *
     * **Note:** Use `ui5-table-row` for the intended design.
     */
    rows?: Array<TableRow> | TableRow | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the header row of the component.
     *
     * **Note:** Use `ui5-table-header-row` for the intended design.
     */
    headerRow?:
      | Array<TableHeaderRow>
      | TableHeaderRow
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the custom visualization if there is no data available.
     */
    noData?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the features of the component.
     */
    features?:
      | Array<ITableFeature>
      | ITableFeature
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Identifies the element (or elements) that labels the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when an interactive row is clicked.
     *
     * **Note:** This event is not fired if the `behavior` property of the selection component is set to `RowOnly`.
     * In that case, use the `change` event of the selection component instead.
     */
    rowClick?: (oEvent: Table$RowClickEvent) => void;

    /**
     * Fired when a movable item is moved over a potential drop target during a dragging operation.
     *
     * If the new position is valid, prevent the default action of the event using `preventDefault()`.
     *
     * **Note:** If the dragging operation is a cross-browser operation or files are moved to a potential drop target,
     * the `source` parameter will be `null`.
     */
    moveOver?: (oEvent: Table$MoveOverEvent) => void;

    /**
     * Fired when a movable list item is dropped onto a drop target.
     *
     * **Notes:**
     *
     * The `move` event is fired only if there was a preceding `move-over` with prevented default action.
     *
     * If the dragging operation is a cross-browser operation or files are moved to a potential drop target,
     * the `source` parameter will be `null`.
     */
    move?: (oEvent: Table$MoveEvent) => void;

    /**
     * Fired when a row action is clicked.
     */
    rowActionClick?: (oEvent: Table$RowActionClickEvent) => void;
  }
  export interface Table$RowClickEventParameters {
    /**
     * The row instance
     */
    row?: TableRow;
  }

  export type Table$RowClickEvent = Event<Table$RowClickEventParameters, Table>;
  export interface Table$MoveOverEventParameters {
    /**
     * The original `dragover` event
     */
    originalEvent?: Event;

    /**
     * The source object
     */
    source?: object;

    /**
     * The destination object
     */
    destination?: object;
  }

  export type Table$MoveOverEvent = Event<Table$MoveOverEventParameters, Table>;
  export interface Table$MoveEventParameters {
    /**
     * The original `drop` event
     */
    originalEvent?: Event;

    /**
     * The source object
     */
    source?: object;

    /**
     * The destination object
     */
    destination?: object;
  }

  export type Table$MoveEvent = Event<Table$MoveEventParameters, Table>;
  export interface Table$RowActionClickEventParameters {
    /**
     * The row action instance
     */
    action?: TableRowActionBase;

    /**
     * The row instance
     */
    row?: TableRow;
  }

  export type Table$RowActionClickEvent = Event<
    Table$RowActionClickEventParameters,
    Table
  >;

  export default class Table extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Table" with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     *
     *
     * @returns Created class / constructor function
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Table>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Table".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getNoDataText noDataText}.
     * Defines the text to be displayed when there are no rows in the component.
     * @returns The content of the property
     */
    getNoDataText(): string;

    /**
     * Sets a new value for property {@link #getNoDataText noDataText}.
     * Defines the text to be displayed when there are no rows in the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoDataText(noDataTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getOverflowMode overflowMode}.
     * Defines the mode of the <code>ui5-table</code> overflow behavior.
     *
     * Available options are:
     *
     * <code>Scroll</code> - Columns are shown as regular columns and horizontal scrolling is enabled.
     * <code>Popin</code> - Columns are shown as pop-ins instead of regular columns.
     * Default value is `Scroll`.
     * @returns The content of the property
     */
    getOverflowMode(): TableOverflowMode | keyof typeof TableOverflowMode;

    /**
     * Sets a new value for property {@link #getOverflowMode overflowMode}.
     * Defines the mode of the <code>ui5-table</code> overflow behavior.
     *
     * Available options are:
     *
     * <code>Scroll</code> - Columns are shown as regular columns and horizontal scrolling is enabled.
     * <code>Popin</code> - Columns are shown as pop-ins instead of regular columns.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Scroll`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOverflowMode(
      overflowModeValue?:
        | TableOverflowMode
        | keyof typeof TableOverflowMode
        | null
    ): this;

    /**
     * Gets current value of property {@link #getLoading loading}.
     * Defines if the loading indicator should be shown.
     *
     * **Note:** When the component is loading, it is not interactive.
     * Default value is `false`.
     * @returns The content of the property
     */
    getLoading(): boolean;

    /**
     * Sets a new value for property {@link #getLoading loading}.
     * Defines if the loading indicator should be shown.
     *
     * **Note:** When the component is loading, it is not interactive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoading(loadingValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
     * Default value is `1000`.
     * @returns The content of the property
     */
    getLoadingDelay(): float;

    /**
     * Sets a new value for property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoadingDelay(loadingDelayValue?: float | null): this;

    /**
     * Gets current value of property {@link #getRowActionCount rowActionCount}.
     * Defines the maximum number of row actions that is displayed, which determines the width of the row action column.
     *
     * **Note:** It is recommended to use a maximum of 3 row actions, as exceeding this limit may take up too much space on smaller screens.
     * Default value is `0`.
     * @returns The content of the property
     */
    getRowActionCount(): float;

    /**
     * Sets a new value for property {@link #getRowActionCount rowActionCount}.
     * Defines the maximum number of row actions that is displayed, which determines the width of the row action column.
     *
     * **Note:** It is recommended to use a maximum of 3 row actions, as exceeding this limit may take up too much space on smaller screens.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowActionCount(rowActionCountValue?: float | null): this;

    /**
     * Gets current value of property {@link #getAlternateRowColors alternateRowColors}.
     * Determines whether the table rows are displayed with alternating background colors.
     * Default value is `false`.
     * @returns The content of the property
     */
    getAlternateRowColors(): boolean;

    /**
     * Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.
     * Determines whether the table rows are displayed with alternating background colors.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAlternateRowColors(alternateRowColorsValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getText text}.
     * The text-content of the Web Component.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * The text-content of the Web Component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getWidth width}.
     * The 'width' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     * @returns The content of the property
     */
    getWidth(): CSSSize;

    /**
     * Sets a new value for property {@link #getWidth width}.
     * The 'width' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(widthValue: CSSSize | null): this;

    /**
     * Gets current value of property {@link #getHeight height}.
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     * @returns The content of the property
     */
    getHeight(): CSSSize;

    /**
     * Sets a new value for property {@link #getHeight height}.
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(heightValue: CSSSize | null): this;

    /**
     * Gets content of aggregation {@link #getRows rows}.
     * Defines the rows of the component.
     *
     * **Note:** Use `ui5-table-row` for the intended design.
     * @returns The content of the aggregation
     */
    getRows(): Array<TableRow> | TableRow;

    /**
     * Destroys the rows in the aggregation {@link #getRows rows}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyRows(): this;

    /**
     * Adds some rows to the aggregation {@link #getRows rows}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addRow(rowValue: Array<TableRow> | TableRow): this;

    /**
     * Inserts a rows into the aggregation {@link #getRows rows}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertRow(
      rowValue: Array<TableRow> | TableRow,

      indexValue: int
    ): this;

    /**
     * Removes a rows from the aggregation {@link #getRows rows}.
     * @returns The removed rows or `null`
     */
    removeRow(
      rowValue: Array<TableRow> | TableRow | int | ID
    ): Array<TableRow> | TableRow | null;

    /**
     * Removes all the controls from the aggregation {@link #getRows rows}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllRows(): Array<TableRow> | TableRow;

    /**
     * Checks for the provided 'TableRow' in the aggregation {@link #getRows rows} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfRow(rowValue: Array<TableRow> | TableRow): int;

    /**
     * Gets content of aggregation {@link #getHeaderRow headerRow}.
     * Defines the header row of the component.
     *
     * **Note:** Use `ui5-table-header-row` for the intended design.
     * @returns The content of the aggregation
     */
    getHeaderRow(): Array<TableHeaderRow> | TableHeaderRow;

    /**
     * Destroys the headerRow in the aggregation {@link #getHeaderRow headerRow}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeaderRow(): this;

    /**
     * Adds some headerRow to the aggregation {@link #getHeaderRow headerRow}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeaderRow(headerRowValue: Array<TableHeaderRow> | TableHeaderRow): this;

    /**
     * Inserts a headerRow into the aggregation {@link #getHeaderRow headerRow}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeaderRow(
      headerRowValue: Array<TableHeaderRow> | TableHeaderRow,

      indexValue: int
    ): this;

    /**
     * Removes a headerRow from the aggregation {@link #getHeaderRow headerRow}.
     * @returns The removed headerRow or `null`
     */
    removeHeaderRow(
      headerRowValue: Array<TableHeaderRow> | TableHeaderRow | int | ID
    ): Array<TableHeaderRow> | TableHeaderRow | null;

    /**
     * Removes all the controls from the aggregation {@link #getHeaderRow headerRow}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeaderRow(): Array<TableHeaderRow> | TableHeaderRow;

    /**
     * Checks for the provided 'TableHeaderRow' in the aggregation {@link #getHeaderRow headerRow} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeaderRow(
      headerRowValue: Array<TableHeaderRow> | TableHeaderRow
    ): int;

    /**
     * Gets content of aggregation {@link #getNoData noData}.
     * Defines the custom visualization if there is no data available.
     * @returns The content of the aggregation
     */
    getNoData(): Array<Control> | Control;

    /**
     * Destroys the noData in the aggregation {@link #getNoData noData}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyNoData(): this;

    /**
     * Adds some noData to the aggregation {@link #getNoData noData}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addNoData(noDataValue: Array<Control> | Control): this;

    /**
     * Inserts a noData into the aggregation {@link #getNoData noData}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertNoData(
      noDataValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a noData from the aggregation {@link #getNoData noData}.
     * @returns The removed noData or `null`
     */
    removeNoData(
      noDataValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getNoData noData}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllNoData(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getNoData noData} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfNoData(noDataValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getFeatures features}.
     * Defines the features of the component.
     * @returns The content of the aggregation
     */
    getFeatures(): Array<ITableFeature> | ITableFeature;

    /**
     * Destroys the features in the aggregation {@link #getFeatures features}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFeatures(): this;

    /**
     * Adds some features to the aggregation {@link #getFeatures features}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addFeature(featureValue: Array<ITableFeature> | ITableFeature): this;

    /**
     * Inserts a features into the aggregation {@link #getFeatures features}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFeature(
      featureValue: Array<ITableFeature> | ITableFeature,

      indexValue: int
    ): this;

    /**
     * Removes a features from the aggregation {@link #getFeatures features}.
     * @returns The removed features or `null`
     */
    removeFeature(
      featureValue: Array<ITableFeature> | ITableFeature | int | ID
    ): Array<ITableFeature> | ITableFeature | null;

    /**
     * Removes all the controls from the aggregation {@link #getFeatures features}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFeatures(): Array<ITableFeature> | ITableFeature;

    /**
     * Checks for the provided 'ITableFeature' in the aggregation {@link #getFeatures features} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFeature(featureValue: Array<ITableFeature> | ITableFeature): int;

    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns The content of the association
     */
    getAriaLabelledBy(): Array<ID> | ID;

    /**
     * Adds some ariaLabelledBy to the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaLabelledBy(ariaLabelledByValue: Array<Control> | Control | ID): this;

    /**
     * Removes an ariaLabelledBy from the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns The removed ariaLabelledBy or `null`
     */
    removeAriaLabelledBy(
      ariaLabelledByValue: Array<Control> | Control | int | ID
    ): ID | null;

    /**
     * Removes all the controls from the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): Array<ID> | ID;

    /**
     * Detaches event handler `fnFunction` from the {@link #getRowClick rowClick} event of this `Table`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRowClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$RowClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getRowClick rowClick} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$RowClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getRowClick rowClick} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$RowClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMoveOver moveOver} event of this `Table`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMove move} event of this `Table`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getRowActionClick rowActionClick} event of this `Table`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRowActionClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$RowActionClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getRowActionClick rowActionClick} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowActionClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$RowActionClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getRowActionClick rowActionClick} event of this `Table`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Table` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRowActionClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Table$RowActionClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Table itself
       */
      oListenerValue?: object
    ): this;
  }
}
