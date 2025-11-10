// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { DynamicDateRangeValue } from "@ui5/webcomponents/dist/DynamicDateRange";

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

declare module "@ui5/webcomponents/dist/DynamicDateRange" {
  export interface $DynamicDateRangeSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the value object.
     */
    value?: DynamicDateRangeValue | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the options listed as a string, separated by commas and using capital case.
     * Example: "TODAY, YESTERDAY, DATERANGE"
     */
    options?: string | PropertyBindingInfo | `{${string}}`;

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
     * Fired when the input operation has finished by pressing Enter or on focusout or a value is selected in the popover.
     */
    change?: (oEvent: DynamicDateRange$ChangeEvent) => void;
  }
  export interface DynamicDateRange$ChangeEventParameters {}

  export type DynamicDateRange$ChangeEvent = Event<
    DynamicDateRange$ChangeEventParameters,
    DynamicDateRange
  >;

  export default class DynamicDateRange extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicDateRangeSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $DynamicDateRangeSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/DynamicDateRange" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, DynamicDateRange>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/DynamicDateRange".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Converts a `value` into concrete `startDate` and `endDate` JavaScript `Date` objects.
     */
    toDates(
      /**
       * The option to convert into an array of date ranges
       */
      valueValue: DynamicDateRangeValue
    ): void;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines the value object.
     * @returns The content of the property
     */
    getValue(): DynamicDateRangeValue;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the value object.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue: DynamicDateRangeValue | null): this;

    /**
     * Gets current value of property {@link #getOptions options}.
     * Defines the options listed as a string, separated by commas and using capital case.
     * Example: "TODAY, YESTERDAY, DATERANGE"
     * Default value is ``.
     * @returns The content of the property
     */
    getOptions(): string;

    /**
     * Sets a new value for property {@link #getOptions options}.
     * Defines the options listed as a string, separated by commas and using capital case.
     * Example: "TODAY, YESTERDAY, DATERANGE"
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOptions(optionsValue?: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `DynamicDateRange`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DynamicDateRange$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DynamicDateRange itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `DynamicDateRange`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DynamicDateRange` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DynamicDateRange$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DynamicDateRange itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `DynamicDateRange`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DynamicDateRange` itself.
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
      fnFunctionValue: (p1: DynamicDateRange$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DynamicDateRange itself
       */
      oListenerValue?: object
    ): this;
  }
}
