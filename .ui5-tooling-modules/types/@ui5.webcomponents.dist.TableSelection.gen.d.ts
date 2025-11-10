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

import type { TableSelectionMode } from "@ui5/webcomponents";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TableSelection" {
  export interface $TableSelectionSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the selection mode.
     */
    mode?:
      | TableSelectionMode
      | keyof typeof TableSelectionMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the selected rows separated by a space.
     */
    selected?: string | PropertyBindingInfo | `{${string}}`;

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
     * Fired when the selection is changed by user interaction.
     */
    change?: (oEvent: TableSelection$ChangeEvent) => void;
  }
  export interface TableSelection$ChangeEventParameters {}

  export type TableSelection$ChangeEvent = Event<
    TableSelection$ChangeEventParameters,
    TableSelection
  >;

  export default class TableSelection extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSelectionSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableSelectionSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableSelection" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableSelection>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableSelection".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getMode mode}.
     * Defines the selection mode.
     * Default value is `Multiple`.
     * @returns The content of the property
     */
    getMode(): TableSelectionMode | keyof typeof TableSelectionMode;

    /**
     * Sets a new value for property {@link #getMode mode}.
     * Defines the selection mode.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Multiple`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMode(
      modeValue?: TableSelectionMode | keyof typeof TableSelectionMode | null
    ): this;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Defines the selected rows separated by a space.
     * Default value is ``.
     * @returns The content of the property
     */
    getSelected(): string;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Defines the selected rows separated by a space.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue?: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `TableSelection`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelection$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelection itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TableSelection`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableSelection` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableSelection$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelection itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TableSelection`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableSelection` itself.
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
      fnFunctionValue: (p1: TableSelection$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableSelection itself
       */
      oListenerValue?: object
    ): this;
  }
}
