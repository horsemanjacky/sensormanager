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
  default as TableSelectionBase,
  $TableSelectionBaseSettings
} from "@ui5/webcomponents/dist/TableSelectionBase";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { TableSelectionBehavior } from "@ui5/webcomponents";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TableSelectionSingle" {
  export interface $TableSelectionSingleSettings
    extends $TableSelectionBaseSettings {
    /**
     * Properties
     */

    /**
     * Defines the `row-key` value of the selected row.
     */
    selected?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the selection behavior.
     */
    behavior?:
      | TableSelectionBehavior
      | keyof typeof TableSelectionBehavior
      | PropertyBindingInfo
      | `{${string}}`;

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
     * Fired when the selection is changed by user interaction.
     */
    change?: (oEvent: TableSelectionSingle$ChangeEvent) => void;
  }
  export interface TableSelectionSingle$ChangeEventParameters {}

  export type TableSelectionSingle$ChangeEvent = Event<
    TableSelectionSingle$ChangeEventParameters,
    TableSelectionSingle
  >;

  export default class TableSelectionSingle extends TableSelectionBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSelectionSingleSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSelectionSingleSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableSelectionSingle" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableSelectionSingle>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableSelectionSingle".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Returns the selected row.
     */
    getSelectedRow(): void;

    /**
     * Returns the table row instance for the given row key.
     */
    getRowByKey(
      /**
       * The row key
       */
      rowKeyValue: string
    ): void;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Defines the `row-key` value of the selected row.
     * @returns The content of the property
     */
    getSelected(): string;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Defines the `row-key` value of the selected row.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue: string | null): this;

    /**
     * Gets current value of property {@link #getBehavior behavior}.
     * Defines the selection behavior.
     * Default value is `RowSelector`.
     * @returns The content of the property
     */
    getBehavior(): TableSelectionBehavior | keyof typeof TableSelectionBehavior;

    /**
     * Sets a new value for property {@link #getBehavior behavior}.
     * Defines the selection behavior.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `RowSelector`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setBehavior(
      behaviorValue?:
        | TableSelectionBehavior
        | keyof typeof TableSelectionBehavior
        | null
    ): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `TableSelectionSingle`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelectionSingle$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelectionSingle itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TableSelectionSingle`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableSelectionSingle` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelectionSingle$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelectionSingle itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TableSelectionSingle`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableSelectionSingle` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelectionSingle$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelectionSingle itself
       */
      oListenerValue?: object
    ): this;
  }
}
