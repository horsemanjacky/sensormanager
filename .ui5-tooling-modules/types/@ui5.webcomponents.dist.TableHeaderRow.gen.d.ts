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

import type { default as TableHeaderCell } from "@ui5/webcomponents/dist/TableHeaderCell";

declare module "@ui5/webcomponents/dist/TableHeaderRow" {
  export interface $TableHeaderRowSettings extends $TableRowBaseSettings {
    /**
     * Properties
     */

    /**
     * Sticks the `ui5-table-header-row` to the top of a table.
     *
     * Note: If used in combination with overflowMode "Scroll", the table needs a defined height for the sticky header to work as expected.
     */
    sticky?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * **Note:** Use `ui5-table-header-cell` for the intended design.
     */
    cells?:
      | Array<TableHeaderCell>
      | TableHeaderCell
      | AggregationBindingInfo
      | `{${string}}`;
  }

  export default class TableHeaderRow extends TableRowBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableHeaderRowSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableHeaderRowSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableHeaderRow" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableHeaderRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableHeaderRow".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getSticky sticky}.
     * Sticks the `ui5-table-header-row` to the top of a table.
     *
     * Note: If used in combination with overflowMode "Scroll", the table needs a defined height for the sticky header to work as expected.
     * Default value is `false`.
     * @returns The content of the property
     */
    getSticky(): boolean;

    /**
     * Sets a new value for property {@link #getSticky sticky}.
     * Sticks the `ui5-table-header-row` to the top of a table.
     *
     * Note: If used in combination with overflowMode "Scroll", the table needs a defined height for the sticky header to work as expected.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSticky(stickyValue?: boolean | null): this;

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
     * **Note:** Use `ui5-table-header-cell` for the intended design.
     * @returns The content of the aggregation
     */
    getCells(): Array<TableHeaderCell> | TableHeaderCell;

    /**
     * Destroys the cells in the aggregation {@link #getCells cells}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCells(): this;

    /**
     * Adds some cells to the aggregation {@link #getCells cells}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addCell(cellValue: Array<TableHeaderCell> | TableHeaderCell): this;

    /**
     * Inserts a cells into the aggregation {@link #getCells cells}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertCell(
      cellValue: Array<TableHeaderCell> | TableHeaderCell,

      indexValue: int
    ): this;

    /**
     * Removes a cells from the aggregation {@link #getCells cells}.
     * @returns The removed cells or `null`
     */
    removeCell(
      cellValue: Array<TableHeaderCell> | TableHeaderCell | int | ID
    ): Array<TableHeaderCell> | TableHeaderCell | null;

    /**
     * Removes all the controls from the aggregation {@link #getCells cells}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllCells(): Array<TableHeaderCell> | TableHeaderCell;

    /**
     * Checks for the provided 'TableHeaderCell' in the aggregation {@link #getCells cells} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCell(cellValue: Array<TableHeaderCell> | TableHeaderCell): int;
  }
}
