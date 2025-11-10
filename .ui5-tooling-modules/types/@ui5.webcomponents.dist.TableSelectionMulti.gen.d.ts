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

import type {
  TableSelectionMultiHeaderSelector,
  TableSelectionBehavior
} from "@ui5/webcomponents";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TableSelectionMulti" {
  export interface $TableSelectionMultiSettings
    extends $TableSelectionBaseSettings {
    /**
     * Properties
     */

    /**
     * Defines the `row-key` values of selected rows, with each value separated by a space.
     */
    selected?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the selector of the header row.
     */
    headerSelector?:
      | TableSelectionMultiHeaderSelector
      | keyof typeof TableSelectionMultiHeaderSelector
      | PropertyBindingInfo
      | `{${string}}`;

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
    change?: (oEvent: TableSelectionMulti$ChangeEvent) => void;
  }
  export interface TableSelectionMulti$ChangeEventParameters {}

  export type TableSelectionMulti$ChangeEvent = Event<
    TableSelectionMulti$ChangeEventParameters,
    TableSelectionMulti
  >;

  export default class TableSelectionMulti extends TableSelectionBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSelectionMultiSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSelectionMultiSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableSelectionMulti" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableSelectionMulti>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableSelectionMulti".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Returns an array of the selected rows.
     */
    getSelectedRows(): void;

    /**
     * Returns the `selected` property as a set of unique `row-key` values.
     */
    getSelectedAsSet(): void;

    /**
     * Sets the `selected` property using the provided set of unique `row-key` values.
     */
    setSelectedAsSet(
      /**
       * A set of `row-key` values
       */
      selectedSetValue: any
    ): void;

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
     * Defines the `row-key` values of selected rows, with each value separated by a space.
     * @returns The content of the property
     */
    getSelected(): string;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Defines the `row-key` values of selected rows, with each value separated by a space.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue: string | null): this;

    /**
     * Gets current value of property {@link #getHeaderSelector headerSelector}.
     * Defines the selector of the header row.
     * Default value is `SelectAll`.
     * @returns The content of the property
     */
    getHeaderSelector():
      | TableSelectionMultiHeaderSelector
      | keyof typeof TableSelectionMultiHeaderSelector;

    /**
     * Sets a new value for property {@link #getHeaderSelector headerSelector}.
     * Defines the selector of the header row.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `SelectAll`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderSelector(
      headerSelectorValue?:
        | TableSelectionMultiHeaderSelector
        | keyof typeof TableSelectionMultiHeaderSelector
        | null
    ): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `TableSelectionMulti`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelectionMulti$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelectionMulti itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TableSelectionMulti`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableSelectionMulti` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelectionMulti$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelectionMulti itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TableSelectionMulti`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableSelectionMulti` itself.
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
      fnFunctionValue: (p1: TableSelectionMulti$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelectionMulti itself
       */
      oListenerValue?: object
    ): this;
  }
}
