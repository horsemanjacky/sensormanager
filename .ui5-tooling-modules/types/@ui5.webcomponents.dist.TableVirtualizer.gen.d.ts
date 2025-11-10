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

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TableVirtualizer" {
  export interface $TableVirtualizerSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the height of the rows in the table.
     *
     * **Note:** For virtualization to work properly, this property is mandatory.
     */
    rowHeight?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the total count of rows in the table.
     *
     * **Note:** For virtualization to work properly, this property is mandatory.
     */
    rowCount?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the count of extra rows to be rendered at the top and bottom of the table.
     *
     * **Note:** This property is experimental and may be changed or deleted in the future.
     */
    extraRows?: float | PropertyBindingInfo | `{${string}}`;

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
     * Events
     */

    /**
     * Fired when the virtualizer is changed by user interaction e.g. on scrolling.
     */
    rangeChange?: (oEvent: TableVirtualizer$RangeChangeEvent) => void;
  }
  export interface TableVirtualizer$RangeChangeEventParameters {
    /**
     * The 0-based index of the first children currently rendered
     */
    first?: float;

    /**
     * The 0-based index of the last children currently rendered
     */
    last?: float;
  }

  export type TableVirtualizer$RangeChangeEvent = Event<
    TableVirtualizer$RangeChangeEventParameters,
    TableVirtualizer
  >;

  export default class TableVirtualizer extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableVirtualizerSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableVirtualizerSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableVirtualizer" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableVirtualizer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableVirtualizer".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Resets the virtualizer to its initial state and triggers the `range-change` event.
     */
    reset(): void;

    /**
     * Gets current value of property {@link #getRowHeight rowHeight}.
     * Defines the height of the rows in the table.
     *
     * **Note:** For virtualization to work properly, this property is mandatory.
     * Default value is `45`.
     * @returns The content of the property
     */
    getRowHeight(): float;

    /**
     * Sets a new value for property {@link #getRowHeight rowHeight}.
     * Defines the height of the rows in the table.
     *
     * **Note:** For virtualization to work properly, this property is mandatory.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `45`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowHeight(rowHeightValue?: float | null): this;

    /**
     * Gets current value of property {@link #getRowCount rowCount}.
     * Defines the total count of rows in the table.
     *
     * **Note:** For virtualization to work properly, this property is mandatory.
     * Default value is `100`.
     * @returns The content of the property
     */
    getRowCount(): float;

    /**
     * Sets a new value for property {@link #getRowCount rowCount}.
     * Defines the total count of rows in the table.
     *
     * **Note:** For virtualization to work properly, this property is mandatory.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRowCount(rowCountValue?: float | null): this;

    /**
     * Gets current value of property {@link #getExtraRows extraRows}.
     * Defines the count of extra rows to be rendered at the top and bottom of the table.
     *
     * **Note:** This property is experimental and may be changed or deleted in the future.
     * Default value is `0`.
     * @returns The content of the property
     */
    getExtraRows(): float;

    /**
     * Sets a new value for property {@link #getExtraRows extraRows}.
     * Defines the count of extra rows to be rendered at the top and bottom of the table.
     *
     * **Note:** This property is experimental and may be changed or deleted in the future.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setExtraRows(extraRowsValue?: float | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getRangeChange rangeChange} event of this `TableVirtualizer`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachRangeChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableVirtualizer$RangeChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableVirtualizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getRangeChange rangeChange} event of this `TableVirtualizer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableVirtualizer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRangeChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableVirtualizer$RangeChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableVirtualizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getRangeChange rangeChange} event of this `TableVirtualizer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableVirtualizer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachRangeChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableVirtualizer$RangeChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableVirtualizer itself
       */
      oListenerValue?: object
    ): this;
  }
}
