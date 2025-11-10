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

import type { PopupAccessibleRole } from "@ui5/webcomponents";

import type { ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Popup" {
  export interface $PopupSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the ID of the HTML Element, which will get the initial focus.
     *
     * **Note:** If an element with `autofocus` attribute is added inside the component,
     * `initialFocus` won't take effect.
     */
    initialFocus?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the focus should be returned to the previously focused element,
     * when the popup closes.
     */
    preventFocusRestore?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Allows setting a custom role.
     */
    accessibleRole?:
      | PopupAccessibleRole
      | keyof typeof PopupAccessibleRole
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Receives id(or many ids) of the elements that describe the component.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether initial focus should be prevented.
     */
    preventInitialFocus?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates if the element is open
     */
    open?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The text-content of the Web Component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the content of the Popup.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines the IDs of the elements that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.
     */
    beforeOpen?: (oEvent: Popup$BeforeOpenEvent) => void;

    /**
     * Fired after the component is opened.
     */
    open?: (oEvent: Popup$OpenEvent) => void;

    /**
     * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.
     */
    beforeClose?: (oEvent: Popup$BeforeCloseEvent) => void;

    /**
     * Fired after the component is closed.
     */
    close?: (oEvent: Popup$CloseEvent) => void;
  }
  export interface Popup$BeforeOpenEventParameters {}

  export type Popup$BeforeOpenEvent = Event<
    Popup$BeforeOpenEventParameters,
    Popup
  >;
  export interface Popup$OpenEventParameters {}

  export type Popup$OpenEvent = Event<Popup$OpenEventParameters, Popup>;
  export interface Popup$BeforeCloseEventParameters {
    /**
     * Indicates that `ESC` key has triggered the event.
     */
    escPressed?: boolean;
  }

  export type Popup$BeforeCloseEvent = Event<
    Popup$BeforeCloseEventParameters,
    Popup
  >;
  export interface Popup$CloseEventParameters {}

  export type Popup$CloseEvent = Event<Popup$CloseEventParameters, Popup>;

  export default class Popup extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $PopupSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $PopupSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Popup" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Popup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Popup".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Focuses the element denoted by `initialFocus`, if provided,
     * or the first focusable element otherwise.
     */
    applyFocus(): void;

    /**
     * Gets current value of property {@link #getInitialFocus initialFocus}.
     * Defines the ID of the HTML Element, which will get the initial focus.
     *
     * **Note:** If an element with `autofocus` attribute is added inside the component,
     * `initialFocus` won't take effect.
     * @returns The content of the property
     */
    getInitialFocus(): string;

    /**
     * Sets a new value for property {@link #getInitialFocus initialFocus}.
     * Defines the ID of the HTML Element, which will get the initial focus.
     *
     * **Note:** If an element with `autofocus` attribute is added inside the component,
     * `initialFocus` won't take effect.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitialFocus(initialFocusValue: string | null): this;

    /**
     * Gets current value of property {@link #getPreventFocusRestore preventFocusRestore}.
     * Defines if the focus should be returned to the previously focused element,
     * when the popup closes.
     * Default value is `false`.
     * @returns The content of the property
     */
    getPreventFocusRestore(): boolean;

    /**
     * Sets a new value for property {@link #getPreventFocusRestore preventFocusRestore}.
     * Defines if the focus should be returned to the previously focused element,
     * when the popup closes.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPreventFocusRestore(preventFocusRestoreValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleRole accessibleRole}.
     * Allows setting a custom role.
     * Default value is `Dialog`.
     * @returns The content of the property
     */
    getAccessibleRole(): PopupAccessibleRole | keyof typeof PopupAccessibleRole;

    /**
     * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
     * Allows setting a custom role.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Dialog`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleRole(
      accessibleRoleValue?:
        | PopupAccessibleRole
        | keyof typeof PopupAccessibleRole
        | null
    ): this;

    /**
     * Gets current value of property {@link #getAccessibleDescription accessibleDescription}.
     * Defines the accessible description of the component.
     * @returns The content of the property
     */
    getAccessibleDescription(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescription accessibleDescription}.
     * Defines the accessible description of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescription(accessibleDescriptionValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Receives id(or many ids) of the elements that describe the component.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Receives id(or many ids) of the elements that describe the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
    ): this;

    /**
     * Gets current value of property {@link #getPreventInitialFocus preventInitialFocus}.
     * Indicates whether initial focus should be prevented.
     * Default value is `false`.
     * @returns The content of the property
     */
    getPreventInitialFocus(): boolean;

    /**
     * Sets a new value for property {@link #getPreventInitialFocus preventInitialFocus}.
     * Indicates whether initial focus should be prevented.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPreventInitialFocus(preventInitialFocusValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getOpen open}.
     * Indicates if the element is open
     * Default value is `false`.
     * @returns The content of the property
     */
    getOpen(): boolean;

    /**
     * Sets a new value for property {@link #getOpen open}.
     * Indicates if the element is open
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
     * Gets content of aggregation {@link #getContent content}.
     * Defines the content of the Popup.
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
     * Detaches event handler `fnFunction` from the {@link #getBeforeOpen beforeOpen} event of this `Popup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `Popup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getBeforeClose beforeClose} event of this `Popup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `Popup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Popup$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Popup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Popup` itself.
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
      fnFunctionValue: (p1: Popup$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Popup itself
       */
      oListenerValue?: object
    ): this;
  }
}
