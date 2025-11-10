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

import type { ToastPlacement } from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Toast" {
  export interface $ToastSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the duration in milliseconds for which component
     * remains on the screen before it's automatically closed.
     *
     * **Note:** The minimum supported value is `500` ms
     * and even if a lower value is set, the duration would remain `500` ms.
     */
    duration?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the placement of the component.
     */
    placement?:
      | ToastPlacement
      | keyof typeof ToastPlacement
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Indicates whether the component is open (visible).
     */
    open?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired after the component is auto closed.
     */
    close?: (oEvent: Toast$CloseEvent) => void;
  }
  export interface Toast$CloseEventParameters {}

  export type Toast$CloseEvent = Event<Toast$CloseEventParameters, Toast>;

  export default class Toast extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToastSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToastSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Toast" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Toast>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Toast".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDuration duration}.
     * Defines the duration in milliseconds for which component
     * remains on the screen before it's automatically closed.
     *
     * **Note:** The minimum supported value is `500` ms
     * and even if a lower value is set, the duration would remain `500` ms.
     * Default value is `3000`.
     * @returns The content of the property
     */
    getDuration(): float;

    /**
     * Sets a new value for property {@link #getDuration duration}.
     * Defines the duration in milliseconds for which component
     * remains on the screen before it's automatically closed.
     *
     * **Note:** The minimum supported value is `500` ms
     * and even if a lower value is set, the duration would remain `500` ms.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `3000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDuration(durationValue?: float | null): this;

    /**
     * Gets current value of property {@link #getPlacement placement}.
     * Defines the placement of the component.
     * Default value is `BottomCenter`.
     * @returns The content of the property
     */
    getPlacement(): ToastPlacement | keyof typeof ToastPlacement;

    /**
     * Sets a new value for property {@link #getPlacement placement}.
     * Defines the placement of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `BottomCenter`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlacement(
      placementValue?: ToastPlacement | keyof typeof ToastPlacement | null
    ): this;

    /**
     * Gets current value of property {@link #getOpen open}.
     * Indicates whether the component is open (visible).
     * Default value is `false`.
     * @returns The content of the property
     */
    getOpen(): boolean;

    /**
     * Sets a new value for property {@link #getOpen open}.
     * Indicates whether the component is open (visible).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpen(openValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getContent content}.
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
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

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `Toast`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Toast$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Toast itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Toast`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Toast` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Toast$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Toast itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Toast`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Toast` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Toast$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Toast itself
       */
      oListenerValue?: object
    ): this;
  }
}
