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
  default as TableRowBase,
  $TableRowBaseSettings
} from "@ui5/webcomponents/dist/TableRowBase";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as TableCell } from "@ui5/webcomponents/dist/TableCell";

import type { default as TableRowActionBase } from "@ui5/webcomponents/dist/TableRowActionBase";

declare module "@ui5/webcomponents/dist/TableRow" {
  export interface $TableRowSettings extends $TableRowBaseSettings {
    /**
     * Properties
     */

    /**
     * Unique identifier of the row.
     *
     * **Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.
     */
    rowKey?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the 0-based position of the row related to the total number of rows within the table when the `ui5-table-virtualizer` feature is used.
     */
    position?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the interactive state of the row.
     */
    interactive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the navigated state of the row.
     */
    navigated?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the row is movable.
     */
    movable?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the cells of the component.
     *
     * **Note:** Use `ui5-table-cell` for the intended design.
     */
    cells?:
      | Array<TableCell>
      | TableCell
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the actions of the component.
     *
     * **Note:** Use `ui5-table-row-action` or `ui5-table-row-action-navigation` for the intended design.
     */
    actions?:
      | Array<TableRowActionBase>
      | TableRowActionBase
      | AggregationBindingInfo
      | `{${string}}`;
  }

  export default class TableRow extends TableRowBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableRowSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableRowSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableRow" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableRow".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getRowKey rowKey}.
     * Unique identifier of the row.
     *
     * **Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.
     * @returns The content of the property
     */
    getRowKey(): string;

    /**
     * Sets a new value for property {@link #getRowKey rowKey}.
     * Unique identifier of the row.
     *
     * **Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowKey(rowKeyValue: string | null): this;

    /**
     * Gets current value of property {@link #getPosition position}.
     * Defines the 0-based position of the row related to the total number of rows within the table when the `ui5-table-virtualizer` feature is used.
     * @returns The content of the property
     */
    getPosition(): float;

    /**
     * Sets a new value for property {@link #getPosition position}.
     * Defines the 0-based position of the row related to the total number of rows within the table when the `ui5-table-virtualizer` feature is used.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPosition(positionValue: float | null): this;

    /**
     * Gets current value of property {@link #getInteractive interactive}.
     * Defines the interactive state of the row.
     * Default value is `false`.
     * @returns The content of the property
     */
    getInteractive(): boolean;

    /**
     * Sets a new value for property {@link #getInteractive interactive}.
     * Defines the interactive state of the row.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractive(interactiveValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getNavigated navigated}.
     * Defines the navigated state of the row.
     * Default value is `false`.
     * @returns The content of the property
     */
    getNavigated(): boolean;

    /**
     * Sets a new value for property {@link #getNavigated navigated}.
     * Defines the navigated state of the row.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigated(navigatedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getMovable movable}.
     * Defines whether the row is movable.
     * Default value is `false`.
     * @returns The content of the property
     */
    getMovable(): boolean;

    /**
     * Sets a new value for property {@link #getMovable movable}.
     * Defines whether the row is movable.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMovable(movableValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getCells cells}.
     * Defines the cells of the component.
     *
     * **Note:** Use `ui5-table-cell` for the intended design.
     * @returns The content of the aggregation
     */
    getCells(): Array<TableCell> | TableCell;

    /**
     * Destroys the cells in the aggregation {@link #getCells cells}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCells(): this;

    /**
     * Adds some cells to the aggregation {@link #getCells cells}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addCell(cellValue: Array<TableCell> | TableCell): this;

    /**
     * Inserts a cells into the aggregation {@link #getCells cells}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertCell(
      cellValue: Array<TableCell> | TableCell,

      indexValue: int
    ): this;

    /**
     * Removes a cells from the aggregation {@link #getCells cells}.
     * @returns The removed cells or `null`
     */
    removeCell(
      cellValue: Array<TableCell> | TableCell | int | ID
    ): Array<TableCell> | TableCell | null;

    /**
     * Removes all the controls from the aggregation {@link #getCells cells}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllCells(): Array<TableCell> | TableCell;

    /**
     * Checks for the provided 'TableCell' in the aggregation {@link #getCells cells} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCell(cellValue: Array<TableCell> | TableCell): int;

    /**
     * Gets content of aggregation {@link #getActions actions}.
     * Defines the actions of the component.
     *
     * **Note:** Use `ui5-table-row-action` or `ui5-table-row-action-navigation` for the intended design.
     * @returns The content of the aggregation
     */
    getActions(): Array<TableRowActionBase> | TableRowActionBase;

    /**
     * Destroys the actions in the aggregation {@link #getActions actions}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActions(): this;

    /**
     * Adds some actions to the aggregation {@link #getActions actions}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      actionValue: Array<TableRowActionBase> | TableRowActionBase
    ): this;

    /**
     * Inserts an actions into the aggregation {@link #getActions actions}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      actionValue: Array<TableRowActionBase> | TableRowActionBase,

      indexValue: int
    ): this;

    /**
     * Removes an actions from the aggregation {@link #getActions actions}.
     * @returns The removed actions or `null`
     */
    removeAction(
      actionValue: Array<TableRowActionBase> | TableRowActionBase | int | ID
    ): Array<TableRowActionBase> | TableRowActionBase | null;

    /**
     * Removes all the controls from the aggregation {@link #getActions actions}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActions(): Array<TableRowActionBase> | TableRowActionBase;

    /**
     * Checks for the provided 'TableRowActionBase' in the aggregation {@link #getActions actions} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      actionValue: Array<TableRowActionBase> | TableRowActionBase
    ): int;
  }
}
