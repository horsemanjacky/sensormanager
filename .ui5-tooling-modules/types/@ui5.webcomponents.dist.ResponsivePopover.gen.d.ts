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
  default as Popover,
  $PopoverSettings
} from "@ui5/webcomponents/dist/Popover";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type {
  PopoverPlacement,
  PopoverHorizontalAlign,
  PopoverVerticalAlign,
  PopupAccessibleRole
} from "@ui5/webcomponents";

import type { ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ResponsivePopover" {
  export interface $ResponsivePopoverSettings extends $PopoverSettings {
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
     * Determines on which side the component is placed at.
     */
    placement?:
      | PopoverPlacement
      | keyof typeof PopoverPlacement
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the horizontal alignment of the component.
     */
    horizontalAlign?:
      | PopoverHorizontalAlign
      | keyof typeof PopoverHorizontalAlign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the vertical alignment of the component.
     */
    verticalAlign?:
      | PopoverVerticalAlign
      | keyof typeof PopoverVerticalAlign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component should close when
     * clicking/tapping outside of the popover.
     * If enabled, it blocks any interaction with the background.
     */
    modal?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component arrow is hidden.
     */
    hideArrow?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines if there is no enough space, the component can be placed
     * over the target.
     */
    allowTargetOverlap?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Aggregations
     */

    /**
     * Defines the header HTML Element.
     */
    header?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the footer HTML Element.
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
     * Defines the ID or DOM Reference of the element at which the popover is shown.
     * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
     * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
     */
    opener?: Control | string | null;

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
    beforeOpen?: (oEvent: ResponsivePopover$BeforeOpenEvent) => void;

    /**
     * Fired after the component is opened.
     */
    open?: (oEvent: ResponsivePopover$OpenEvent) => void;

    /**
     * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.
     */
    beforeClose?: (oEvent: ResponsivePopover$BeforeCloseEvent) => void;

    /**
     * Fired after the component is closed.
     */
    close?: (oEvent: ResponsivePopover$CloseEvent) => void;
  }
  export interface ResponsivePopover$BeforeOpenEventParameters {}

  export type ResponsivePopover$BeforeOpenEvent = Event<
    ResponsivePopover$BeforeOpenEventParameters,
    ResponsivePopover
  >;
  export interface ResponsivePopover$OpenEventParameters {}

  export type ResponsivePopover$OpenEvent = Event<
    ResponsivePopover$OpenEventParameters,
    ResponsivePopover
  >;
  export interface ResponsivePopover$BeforeCloseEventParameters {
    /**
     * Indicates that `ESC` key has triggered the event.
     */
    escPressed?: boolean;
  }

  export type ResponsivePopover$BeforeCloseEvent = Event<
    ResponsivePopover$BeforeCloseEventParameters,
    ResponsivePopover
  >;
  export interface ResponsivePopover$CloseEventParameters {}

  export type ResponsivePopover$CloseEvent = Event<
    ResponsivePopover$CloseEventParameters,
    ResponsivePopover
  >;

  export default class ResponsivePopover extends Popover {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsivePopoverSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ResponsivePopoverSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ResponsivePopover" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ResponsivePopover>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ResponsivePopover".
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
     * Gets current value of property {@link #getPlacement placement}.
     * Determines on which side the component is placed at.
     * Default value is `End`.
     * @returns The content of the property
     */
    getPlacement(): PopoverPlacement | keyof typeof PopoverPlacement;

    /**
     * Sets a new value for property {@link #getPlacement placement}.
     * Determines on which side the component is placed at.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `End`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlacement(
      placementValue?: PopoverPlacement | keyof typeof PopoverPlacement | null
    ): this;

    /**
     * Gets current value of property {@link #getHorizontalAlign horizontalAlign}.
     * Determines the horizontal alignment of the component.
     * Default value is `Center`.
     * @returns The content of the property
     */
    getHorizontalAlign():
      | PopoverHorizontalAlign
      | keyof typeof PopoverHorizontalAlign;

    /**
     * Sets a new value for property {@link #getHorizontalAlign horizontalAlign}.
     * Determines the horizontal alignment of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Center`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHorizontalAlign(
      horizontalAlignValue?:
        | PopoverHorizontalAlign
        | keyof typeof PopoverHorizontalAlign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getVerticalAlign verticalAlign}.
     * Determines the vertical alignment of the component.
     * Default value is `Center`.
     * @returns The content of the property
     */
    getVerticalAlign():
      | PopoverVerticalAlign
      | keyof typeof PopoverVerticalAlign;

    /**
     * Sets a new value for property {@link #getVerticalAlign verticalAlign}.
     * Determines the vertical alignment of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Center`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setVerticalAlign(
      verticalAlignValue?:
        | PopoverVerticalAlign
        | keyof typeof PopoverVerticalAlign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getModal modal}.
     * Defines whether the component should close when
     * clicking/tapping outside of the popover.
     * If enabled, it blocks any interaction with the background.
     * Default value is `false`.
     * @returns The content of the property
     */
    getModal(): boolean;

    /**
     * Sets a new value for property {@link #getModal modal}.
     * Defines whether the component should close when
     * clicking/tapping outside of the popover.
     * If enabled, it blocks any interaction with the background.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setModal(modalValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHideArrow hideArrow}.
     * Determines whether the component arrow is hidden.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideArrow(): boolean;

    /**
     * Sets a new value for property {@link #getHideArrow hideArrow}.
     * Determines whether the component arrow is hidden.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideArrow(hideArrowValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAllowTargetOverlap allowTargetOverlap}.
     * Determines if there is no enough space, the component can be placed
     * over the target.
     * Default value is `false`.
     * @returns The content of the property
     */
    getAllowTargetOverlap(): boolean;

    /**
     * Sets a new value for property {@link #getAllowTargetOverlap allowTargetOverlap}.
     * Determines if there is no enough space, the component can be placed
     * over the target.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAllowTargetOverlap(allowTargetOverlapValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the header HTML Element.
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
     * ID of the element which is the current target of the association {@link #getOpener opener}.
     * @returns The content of the association
     */
    getOpener(): ID;

    /**
     * Sets the associated {@link #getOpener opener}.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpener(openerValue: Control | string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getBeforeOpen beforeOpen} event of this `ResponsivePopover`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
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
      fnFunctionValue: (p1: ResponsivePopover$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `ResponsivePopover`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
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
      fnFunctionValue: (p1: ResponsivePopover$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getBeforeClose beforeClose} event of this `ResponsivePopover`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
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
      fnFunctionValue: (p1: ResponsivePopover$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `ResponsivePopover`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ResponsivePopover$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `ResponsivePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ResponsivePopover` itself.
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
      fnFunctionValue: (p1: ResponsivePopover$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ResponsivePopover itself
       */
      oListenerValue?: object
    ): this;
  }
}
