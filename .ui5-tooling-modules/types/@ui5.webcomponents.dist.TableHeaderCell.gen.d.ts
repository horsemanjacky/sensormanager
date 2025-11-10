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
  default as TableCellBase,
  $TableCellBaseSettings
} from "@ui5/webcomponents/dist/TableCellBase";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { SortOrder } from "@ui5/webcomponents-base";

import type { TableCellHorizontalAlign } from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as TableHeaderCellActionBase } from "@ui5/webcomponents/dist/TableHeaderCellActionBase";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/TableHeaderCell" {
  export interface $TableHeaderCellSettings extends $TableCellBaseSettings {
    /**
     * Properties
     */

    /**
     * Defines the width of the column.
     *
     * By default, the column will grow and shrink according to the available space.
     * This will distribute the space proportionally among all columns with no specific width set.
     *
     * See [\<length\>](https://developer.mozilla.org/en-US/docs/Web/CSS/length) and
     * [\<percentage\>](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) for possible width values.
     */
    width?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the minimum width of the column.
     *
     * If the table is in `Popin` mode and the minimum width does not fit anymore,
     * the column will move into the popin.
     *
     * By default, the table prevents the column from becoming too small.
     * Changing this value to a small value might lead to accessibility issues.
     *
     * **Note:** This property only takes effect for columns with a [\<percentage\>](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) value
     * or the default width.
     */
    minWidth?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the importance of the column.
     *
     * This property affects the popin behaviour.
     * Columns with higher importance will move into the popin area later then less important
     * columns.
     */
    importance?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * The text for the column when it pops in.
     */
    popinText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the sort indicator of the column.
     */
    sortIndicator?:
      | SortOrder
      | keyof typeof SortOrder
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the column is hidden in the popin.
     *
     * **Note:** Please be aware that hiding the column in the popin might lead to accessibility issues as
     * users might not be able to access the content of the column on small screens.
     */
    popinHidden?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the horizontal alignment of table cells.
     */
    horizontalAlign?:
      | TableCellHorizontalAlign
      | keyof typeof TableCellHorizontalAlign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the action of the column.
     *
     * **Note:** While multiple actions are technically possible, this is not supported.
     */
    action?:
      | Array<TableHeaderCellActionBase>
      | TableHeaderCellActionBase
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the content of the component.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;
  }

  export default class TableHeaderCell extends TableCellBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableHeaderCellSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableHeaderCellSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableHeaderCell" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableHeaderCell>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableHeaderCell".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getWidth width}.
     * Defines the width of the column.
     *
     * By default, the column will grow and shrink according to the available space.
     * This will distribute the space proportionally among all columns with no specific width set.
     *
     * See [\<length\>](https://developer.mozilla.org/en-US/docs/Web/CSS/length) and
     * [\<percentage\>](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) for possible width values.
     * @returns The content of the property
     */
    getWidth(): string;

    /**
     * Sets a new value for property {@link #getWidth width}.
     * Defines the width of the column.
     *
     * By default, the column will grow and shrink according to the available space.
     * This will distribute the space proportionally among all columns with no specific width set.
     *
     * See [\<length\>](https://developer.mozilla.org/en-US/docs/Web/CSS/length) and
     * [\<percentage\>](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) for possible width values.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(widthValue: string | null): this;

    /**
     * Gets current value of property {@link #getMinWidth minWidth}.
     * Defines the minimum width of the column.
     *
     * If the table is in `Popin` mode and the minimum width does not fit anymore,
     * the column will move into the popin.
     *
     * By default, the table prevents the column from becoming too small.
     * Changing this value to a small value might lead to accessibility issues.
     *
     * **Note:** This property only takes effect for columns with a [\<percentage\>](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) value
     * or the default width.
     * @returns The content of the property
     */
    getMinWidth(): string;

    /**
     * Sets a new value for property {@link #getMinWidth minWidth}.
     * Defines the minimum width of the column.
     *
     * If the table is in `Popin` mode and the minimum width does not fit anymore,
     * the column will move into the popin.
     *
     * By default, the table prevents the column from becoming too small.
     * Changing this value to a small value might lead to accessibility issues.
     *
     * **Note:** This property only takes effect for columns with a [\<percentage\>](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) value
     * or the default width.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinWidth(minWidthValue: string | null): this;

    /**
     * Gets current value of property {@link #getImportance importance}.
     * Defines the importance of the column.
     *
     * This property affects the popin behaviour.
     * Columns with higher importance will move into the popin area later then less important
     * columns.
     * Default value is `0`.
     * @returns The content of the property
     */
    getImportance(): float;

    /**
     * Sets a new value for property {@link #getImportance importance}.
     * Defines the importance of the column.
     *
     * This property affects the popin behaviour.
     * Columns with higher importance will move into the popin area later then less important
     * columns.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setImportance(importanceValue?: float | null): this;

    /**
     * Gets current value of property {@link #getPopinText popinText}.
     * The text for the column when it pops in.
     * @returns The content of the property
     */
    getPopinText(): string;

    /**
     * Sets a new value for property {@link #getPopinText popinText}.
     * The text for the column when it pops in.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPopinText(popinTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getSortIndicator sortIndicator}.
     * Defines the sort indicator of the column.
     * Default value is `None`.
     * @returns The content of the property
     */
    getSortIndicator(): SortOrder | keyof typeof SortOrder;

    /**
     * Sets a new value for property {@link #getSortIndicator sortIndicator}.
     * Defines the sort indicator of the column.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSortIndicator(
      sortIndicatorValue?: SortOrder | keyof typeof SortOrder | null
    ): this;

    /**
     * Gets current value of property {@link #getPopinHidden popinHidden}.
     * Defines if the column is hidden in the popin.
     *
     * **Note:** Please be aware that hiding the column in the popin might lead to accessibility issues as
     * users might not be able to access the content of the column on small screens.
     * Default value is `false`.
     * @returns The content of the property
     */
    getPopinHidden(): boolean;

    /**
     * Sets a new value for property {@link #getPopinHidden popinHidden}.
     * Defines if the column is hidden in the popin.
     *
     * **Note:** Please be aware that hiding the column in the popin might lead to accessibility issues as
     * users might not be able to access the content of the column on small screens.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPopinHidden(popinHiddenValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHorizontalAlign horizontalAlign}.
     * Determines the horizontal alignment of table cells.
     * @returns The content of the property
     */
    getHorizontalAlign():
      | TableCellHorizontalAlign
      | keyof typeof TableCellHorizontalAlign;

    /**
     * Sets a new value for property {@link #getHorizontalAlign horizontalAlign}.
     * Determines the horizontal alignment of table cells.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHorizontalAlign(
      horizontalAlignValue:
        | TableCellHorizontalAlign
        | keyof typeof TableCellHorizontalAlign
        | null
    ): this;

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
     * Gets content of aggregation {@link #getAction action}.
     * Defines the action of the column.
     *
     * **Note:** While multiple actions are technically possible, this is not supported.
     * @returns The content of the aggregation
     */
    getAction(): Array<TableHeaderCellActionBase> | TableHeaderCellActionBase;

    /**
     * Destroys the action in the aggregation {@link #getAction action}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAction(): this;

    /**
     * Adds some action to the aggregation {@link #getAction action}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(
      actionValue: Array<TableHeaderCellActionBase> | TableHeaderCellActionBase
    ): this;

    /**
     * Inserts an action into the aggregation {@link #getAction action}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      actionValue: Array<TableHeaderCellActionBase> | TableHeaderCellActionBase,

      indexValue: int
    ): this;

    /**
     * Removes an action from the aggregation {@link #getAction action}.
     * @returns The removed action or `null`
     */
    removeAction(
      actionValue:
        | Array<TableHeaderCellActionBase>
        | TableHeaderCellActionBase
        | int
        | ID
    ): Array<TableHeaderCellActionBase> | TableHeaderCellActionBase | null;

    /**
     * Removes all the controls from the aggregation {@link #getAction action}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAction():
      | Array<TableHeaderCellActionBase>
      | TableHeaderCellActionBase;

    /**
     * Checks for the provided 'TableHeaderCellActionBase' in the aggregation {@link #getAction action} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(
      actionValue: Array<TableHeaderCellActionBase> | TableHeaderCellActionBase
    ): int;

    /**
     * Gets content of aggregation {@link #getContent content}.
     * Defines the content of the component.
     * @returns The content of the aggregation
     */
    getContent(): Array<Control> | Control;

    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(contentValue: Array<Control> | Control): this;

    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertContent(
      contentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a content from the aggregation {@link #getContent content}.
     * @returns The removed content or `null`
     */
    removeContent(
      contentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getContent content} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(contentValue: Array<Control> | Control): int;
  }
}
