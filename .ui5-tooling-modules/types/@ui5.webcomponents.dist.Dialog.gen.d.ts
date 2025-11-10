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
  default as Popup,
  $PopupSettings
} from "@ui5/webcomponents/dist/Popup";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { ValueState, CSSSize, ID } from "sap/ui/core/library";

import type { PopupAccessibleRole } from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Dialog" {
  export interface $DialogSettings extends $PopupSettings {
    /**
     * Properties
     */

    /**
     * Defines the header text.
     *
     * **Note:** If `header` slot is provided, the `headerText` is ignored.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines if the dialog will be stretched to full screen on mobile. On desktop,
     * the dialog will be stretched to approximately 90% of the viewport.
     *
     * **Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.
     */
    stretch?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component is draggable.
     * If this property is set to true, the Dialog will be draggable by its header.
     *
     * **Note:** The component can be draggable only in desktop mode.
     *
     * **Note:** This property overrides the default HTML "draggable" attribute native behavior.
     * When "draggable" is set to true, the native browser "draggable"
     * behavior is prevented and only the Dialog custom logic ("draggable by its header") works.
     */
    draggable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Configures the component to be resizable.
     * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
     * In RTL languages, the resize handle will be placed in the bottom left corner.
     *
     * **Note:** The component can be resizable only in desktop mode.
     *
     * **Note:** Upon resizing, externally defined height and width styling will be ignored.
     */
    resizable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the state of the `Dialog`.
     *
     * **Note:** If `"Negative"` and `"Critical"` states is set, it will change the
     * accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.
     */
    state?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

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
     * Defines the header HTML Element.
     *
     * **Note:** When a `ui5-bar` is used in the header, you should remove the default dialog's paddings.
     *
     * **Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer.
     * `accessibleName` should be used.
     */
    header?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the footer HTML Element.
     *
     * **Note:** When a `ui5-bar` is used in the footer, you should remove the default dialog's paddings.
     */
    footer?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

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
    beforeOpen?: (oEvent: Dialog$BeforeOpenEvent) => void;

    /**
     * Fired after the component is opened.
     */
    open?: (oEvent: Dialog$OpenEvent) => void;

    /**
     * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.
     */
    beforeClose?: (oEvent: Dialog$BeforeCloseEvent) => void;

    /**
     * Fired after the component is closed.
     */
    close?: (oEvent: Dialog$CloseEvent) => void;
  }
  export interface Dialog$BeforeOpenEventParameters {}

  export type Dialog$BeforeOpenEvent = Event<
    Dialog$BeforeOpenEventParameters,
    Dialog
  >;
  export interface Dialog$OpenEventParameters {}

  export type Dialog$OpenEvent = Event<Dialog$OpenEventParameters, Dialog>;
  export interface Dialog$BeforeCloseEventParameters {
    /**
     * Indicates that `ESC` key has triggered the event.
     */
    escPressed?: boolean;
  }

  export type Dialog$BeforeCloseEvent = Event<
    Dialog$BeforeCloseEventParameters,
    Dialog
  >;
  export interface Dialog$CloseEventParameters {}

  export type Dialog$CloseEvent = Event<Dialog$CloseEventParameters, Dialog>;

  export default class Dialog extends Popup {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DialogSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $DialogSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Dialog" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Dialog>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Dialog".
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
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines the header text.
     *
     * **Note:** If `header` slot is provided, the `headerText` is ignored.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines the header text.
     *
     * **Note:** If `header` slot is provided, the `headerText` is ignored.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getStretch stretch}.
     * Determines if the dialog will be stretched to full screen on mobile. On desktop,
     * the dialog will be stretched to approximately 90% of the viewport.
     *
     * **Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.
     * Default value is `false`.
     * @returns The content of the property
     */
    getStretch(): boolean;

    /**
     * Sets a new value for property {@link #getStretch stretch}.
     * Determines if the dialog will be stretched to full screen on mobile. On desktop,
     * the dialog will be stretched to approximately 90% of the viewport.
     *
     * **Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setStretch(stretchValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getDraggable draggable}.
     * Determines whether the component is draggable.
     * If this property is set to true, the Dialog will be draggable by its header.
     *
     * **Note:** The component can be draggable only in desktop mode.
     *
     * **Note:** This property overrides the default HTML "draggable" attribute native behavior.
     * When "draggable" is set to true, the native browser "draggable"
     * behavior is prevented and only the Dialog custom logic ("draggable by its header") works.
     * Default value is `false`.
     * @returns The content of the property
     */
    getDraggable(): boolean;

    /**
     * Sets a new value for property {@link #getDraggable draggable}.
     * Determines whether the component is draggable.
     * If this property is set to true, the Dialog will be draggable by its header.
     *
     * **Note:** The component can be draggable only in desktop mode.
     *
     * **Note:** This property overrides the default HTML "draggable" attribute native behavior.
     * When "draggable" is set to true, the native browser "draggable"
     * behavior is prevented and only the Dialog custom logic ("draggable by its header") works.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDraggable(draggableValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getResizable resizable}.
     * Configures the component to be resizable.
     * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
     * In RTL languages, the resize handle will be placed in the bottom left corner.
     *
     * **Note:** The component can be resizable only in desktop mode.
     *
     * **Note:** Upon resizing, externally defined height and width styling will be ignored.
     * Default value is `false`.
     * @returns The content of the property
     */
    getResizable(): boolean;

    /**
     * Sets a new value for property {@link #getResizable resizable}.
     * Configures the component to be resizable.
     * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
     * In RTL languages, the resize handle will be placed in the bottom left corner.
     *
     * **Note:** The component can be resizable only in desktop mode.
     *
     * **Note:** Upon resizing, externally defined height and width styling will be ignored.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setResizable(resizableValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getState state}.
     * Defines the state of the `Dialog`.
     *
     * **Note:** If `"Negative"` and `"Critical"` states is set, it will change the
     * accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.
     * Default value is `None`.
     * @returns The content of the property
     */
    getState(): ValueState | keyof typeof ValueState;

    /**
     * Sets a new value for property {@link #getState state}.
     * Defines the state of the `Dialog`.
     *
     * **Note:** If `"Negative"` and `"Critical"` states is set, it will change the
     * accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setState(stateValue?: ValueState | keyof typeof ValueState | null): this;

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
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the header HTML Element.
     *
     * **Note:** When a `ui5-bar` is used in the header, you should remove the default dialog's paddings.
     *
     * **Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer.
     * `accessibleName` should be used.
     * @returns The content of the aggregation
     */
    getHeader(): Array<Control> | Control;

    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;

    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeader(headerValue: Array<Control> | Control): this;

    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeader(
      headerValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     * @returns The removed header or `null`
     */
    removeHeader(
      headerValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeader(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getHeader header} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeader(headerValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getFooter footer}.
     * Defines the footer HTML Element.
     *
     * **Note:** When a `ui5-bar` is used in the footer, you should remove the default dialog's paddings.
     * @returns The content of the aggregation
     */
    getFooter(): Array<Control> | Control;

    /**
     * Destroys the footer in the aggregation {@link #getFooter footer}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyFooter(): this;

    /**
     * Adds some footer to the aggregation {@link #getFooter footer}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addFooter(footerValue: Array<Control> | Control): this;

    /**
     * Inserts a footer into the aggregation {@link #getFooter footer}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertFooter(
      footerValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a footer from the aggregation {@link #getFooter footer}.
     * @returns The removed footer or `null`
     */
    removeFooter(
      footerValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getFooter footer}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllFooter(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getFooter footer} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfFooter(footerValue: Array<Control> | Control): int;

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
     * Detaches event handler `fnFunction` from the {@link #getBeforeOpen beforeOpen} event of this `Dialog`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
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
      fnFunctionValue: (p1: Dialog$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `Dialog`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
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
      fnFunctionValue: (p1: Dialog$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getBeforeClose beforeClose} event of this `Dialog`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
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
      fnFunctionValue: (p1: Dialog$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `Dialog`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Dialog$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Dialog`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Dialog` itself.
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
      fnFunctionValue: (p1: Dialog$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Dialog itself
       */
      oListenerValue?: object
    ): this;
  }
}
