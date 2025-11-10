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

import type {
  PopoverPlacement,
  PopoverHorizontalAlign,
  IMenuItem
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Menu" {
  export interface $MenuSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the header text of the menu (displayed on mobile).
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates if the menu is open.
     */
    open?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines on which side the component is placed at.
     */
    placement?:
      | PopoverPlacement
      | keyof typeof PopoverPlacement
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the horizontal alignment of the menu relative to its opener control.
     */
    horizontalAlign?:
      | PopoverHorizontalAlign
      | keyof typeof PopoverHorizontalAlign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.
     */
    loading?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
     */
    loadingDelay?: float | PropertyBindingInfo | `{${string}}`;

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
     * Defines the items of this component.
     *
     * **Note:** Use `ui5-menu-item` and `ui5-menu-separator` for their intended design.
     */
    items?:
      | Array<IMenuItem>
      | IMenuItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines the ID or DOM Reference of the element at which the menu is shown.
     * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
     * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
     */
    opener?: Control | string | null;

    /**
     * Events
     */

    /**
     * Fired when an item is being clicked.
     *
     * **Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.
     */
    itemClick?: (oEvent: Menu$ItemClickEvent) => void;

    /**
     * Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening.
     *
     * **Note:** Since 1.14.0 the event is also fired before a sub-menu opens.
     */
    beforeOpen?: (oEvent: Menu$BeforeOpenEvent) => void;

    /**
     * Fired after the menu is opened.
     */
    open?: (oEvent: Menu$OpenEvent) => void;

    /**
     * Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing.
     */
    beforeClose?: (oEvent: Menu$BeforeCloseEvent) => void;

    /**
     * Fired after the menu is closed.
     */
    close?: (oEvent: Menu$CloseEvent) => void;
  }
  export interface Menu$ItemClickEventParameters {
    /**
     * The currently clicked menu item.
     */
    item?: Control;

    /**
     * The text of the currently clicked menu item.
     */
    text?: string;
  }

  export type Menu$ItemClickEvent = Event<Menu$ItemClickEventParameters, Menu>;
  export interface Menu$BeforeOpenEventParameters {
    /**
     * The `ui5-menu-item` that triggers opening of the sub-menu or undefined when fired upon root menu opening.
     */
    item?: Control;
  }

  export type Menu$BeforeOpenEvent = Event<
    Menu$BeforeOpenEventParameters,
    Menu
  >;
  export interface Menu$OpenEventParameters {}

  export type Menu$OpenEvent = Event<Menu$OpenEventParameters, Menu>;
  export interface Menu$BeforeCloseEventParameters {
    /**
     * Indicates that `ESC` key has triggered the event.
     */
    escPressed?: boolean;
  }

  export type Menu$BeforeCloseEvent = Event<
    Menu$BeforeCloseEventParameters,
    Menu
  >;
  export interface Menu$CloseEventParameters {}

  export type Menu$CloseEvent = Event<Menu$CloseEventParameters, Menu>;

  export default class Menu extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Menu" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Menu>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Menu".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines the header text of the menu (displayed on mobile).
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines the header text of the menu (displayed on mobile).
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getOpen open}.
     * Indicates if the menu is open.
     * Default value is `false`.
     * @returns The content of the property
     */
    getOpen(): boolean;

    /**
     * Sets a new value for property {@link #getOpen open}.
     * Indicates if the menu is open.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpen(openValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getPlacement placement}.
     * Determines on which side the component is placed at.
     * Default value is `Bottom`.
     * @returns The content of the property
     */
    getPlacement(): PopoverPlacement | keyof typeof PopoverPlacement;

    /**
     * Sets a new value for property {@link #getPlacement placement}.
     * Determines on which side the component is placed at.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Bottom`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlacement(
      placementValue?: PopoverPlacement | keyof typeof PopoverPlacement | null
    ): this;

    /**
     * Gets current value of property {@link #getHorizontalAlign horizontalAlign}.
     * Determines the horizontal alignment of the menu relative to its opener control.
     * Default value is `Start`.
     * @returns The content of the property
     */
    getHorizontalAlign():
      | PopoverHorizontalAlign
      | keyof typeof PopoverHorizontalAlign;

    /**
     * Sets a new value for property {@link #getHorizontalAlign horizontalAlign}.
     * Determines the horizontal alignment of the menu relative to its opener control.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Start`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHorizontalAlign(
      horizontalAlignValue?:
        | PopoverHorizontalAlign
        | keyof typeof PopoverHorizontalAlign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getLoading loading}.
     * Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.
     * Default value is `false`.
     * @returns The content of the property
     */
    getLoading(): boolean;

    /**
     * Sets a new value for property {@link #getLoading loading}.
     * Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoading(loadingValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
     * Default value is `1000`.
     * @returns The content of the property
     */
    getLoadingDelay(): float;

    /**
     * Sets a new value for property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoadingDelay(loadingDelayValue?: float | null): this;

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
     * Gets content of aggregation {@link #getItems items}.
     * Defines the items of this component.
     *
     * **Note:** Use `ui5-menu-item` and `ui5-menu-separator` for their intended design.
     * @returns The content of the aggregation
     */
    getItems(): Array<IMenuItem> | IMenuItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<IMenuItem> | IMenuItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<IMenuItem> | IMenuItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<IMenuItem> | IMenuItem | int | ID
    ): Array<IMenuItem> | IMenuItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<IMenuItem> | IMenuItem;

    /**
     * Checks for the provided 'IMenuItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<IMenuItem> | IMenuItem): int;

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
     * Detaches event handler `fnFunction` from the {@link #getItemClick itemClick} event of this `Menu`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getBeforeOpen beforeOpen} event of this `Menu`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
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
      fnFunctionValue: (p1: Menu$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `Menu`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
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
      fnFunctionValue: (p1: Menu$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getBeforeClose beforeClose} event of this `Menu`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
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
      fnFunctionValue: (p1: Menu$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `Menu`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Menu$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Menu`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Menu` itself.
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
      fnFunctionValue: (p1: Menu$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Menu itself
       */
      oListenerValue?: object
    ): this;
  }
}
