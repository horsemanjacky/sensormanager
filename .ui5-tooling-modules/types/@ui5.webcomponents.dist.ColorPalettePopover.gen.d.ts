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

import type { CSSSize, ID } from "sap/ui/core/library";

import type { IColorPaletteItem } from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ColorPalettePopover" {
  export interface $ColorPalettePopoverSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the user can see the last used colors in the bottom of the component
     */
    showRecentColors?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the user can choose a custom color from a component.
     */
    showMoreColors?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the user can choose the default color from a button.
     */
    showDefaultColor?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the default color of the component.
     *
     * **Note:** The default color should be a part of the ColorPalette colors`
     */
    defaultColor?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the open | closed state of the popover.
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
     * Defines the content of the component.
     */
    colors?:
      | Array<IColorPaletteItem>
      | IColorPaletteItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines the ID or DOM Reference of the element that the popover is shown at.
     * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
     * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
     */
    opener?: Control | string | null;

    /**
     * Events
     */

    /**
     * Fired when the user selects a color.
     */
    itemClick?: (oEvent: ColorPalettePopover$ItemClickEvent) => void;

    /**
     * Fired when the `ui5-color-palette-popover` is closed due to user interaction.
     */
    close?: (oEvent: ColorPalettePopover$CloseEvent) => void;
  }
  export interface ColorPalettePopover$ItemClickEventParameters {
    /**
     * the selected color
     */
    color?: string;
  }

  export type ColorPalettePopover$ItemClickEvent = Event<
    ColorPalettePopover$ItemClickEventParameters,
    ColorPalettePopover
  >;
  export interface ColorPalettePopover$CloseEventParameters {}

  export type ColorPalettePopover$CloseEvent = Event<
    ColorPalettePopover$CloseEventParameters,
    ColorPalettePopover
  >;

  export default class ColorPalettePopover extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPalettePopoverSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPalettePopoverSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ColorPalettePopover" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ColorPalettePopover>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ColorPalettePopover".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getShowRecentColors showRecentColors}.
     * Defines whether the user can see the last used colors in the bottom of the component
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowRecentColors(): boolean;

    /**
     * Sets a new value for property {@link #getShowRecentColors showRecentColors}.
     * Defines whether the user can see the last used colors in the bottom of the component
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowRecentColors(showRecentColorsValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getShowMoreColors showMoreColors}.
     * Defines whether the user can choose a custom color from a component.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowMoreColors(): boolean;

    /**
     * Sets a new value for property {@link #getShowMoreColors showMoreColors}.
     * Defines whether the user can choose a custom color from a component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowMoreColors(showMoreColorsValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getShowDefaultColor showDefaultColor}.
     * Defines whether the user can choose the default color from a button.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowDefaultColor(): boolean;

    /**
     * Sets a new value for property {@link #getShowDefaultColor showDefaultColor}.
     * Defines whether the user can choose the default color from a button.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowDefaultColor(showDefaultColorValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getDefaultColor defaultColor}.
     * Defines the default color of the component.
     *
     * **Note:** The default color should be a part of the ColorPalette colors`
     * @returns The content of the property
     */
    getDefaultColor(): string;

    /**
     * Sets a new value for property {@link #getDefaultColor defaultColor}.
     * Defines the default color of the component.
     *
     * **Note:** The default color should be a part of the ColorPalette colors`
     * @returns Reference to `this` in order to allow method chaining
     */
    setDefaultColor(defaultColorValue: string | null): this;

    /**
     * Gets current value of property {@link #getOpen open}.
     * Defines the open | closed state of the popover.
     * Default value is `false`.
     * @returns The content of the property
     */
    getOpen(): boolean;

    /**
     * Sets a new value for property {@link #getOpen open}.
     * Defines the open | closed state of the popover.
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
     * Gets content of aggregation {@link #getColors colors}.
     * Defines the content of the component.
     * @returns The content of the aggregation
     */
    getColors(): Array<IColorPaletteItem> | IColorPaletteItem;

    /**
     * Destroys the colors in the aggregation {@link #getColors colors}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyColors(): this;

    /**
     * Adds some colors to the aggregation {@link #getColors colors}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addColor(colorValue: Array<IColorPaletteItem> | IColorPaletteItem): this;

    /**
     * Inserts a colors into the aggregation {@link #getColors colors}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertColor(
      colorValue: Array<IColorPaletteItem> | IColorPaletteItem,

      indexValue: int
    ): this;

    /**
     * Removes a colors from the aggregation {@link #getColors colors}.
     * @returns The removed colors or `null`
     */
    removeColor(
      colorValue: Array<IColorPaletteItem> | IColorPaletteItem | int | ID
    ): Array<IColorPaletteItem> | IColorPaletteItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getColors colors}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllColors(): Array<IColorPaletteItem> | IColorPaletteItem;

    /**
     * Checks for the provided 'IColorPaletteItem' in the aggregation {@link #getColors colors} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfColor(colorValue: Array<IColorPaletteItem> | IColorPaletteItem): int;

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
     * Detaches event handler `fnFunction` from the {@link #getItemClick itemClick} event of this `ColorPalettePopover`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ColorPalettePopover$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalettePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `ColorPalettePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ColorPalettePopover` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ColorPalettePopover$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalettePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `ColorPalettePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ColorPalettePopover` itself.
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
      fnFunctionValue: (p1: ColorPalettePopover$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalettePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `ColorPalettePopover`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ColorPalettePopover$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalettePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `ColorPalettePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ColorPalettePopover` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ColorPalettePopover$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalettePopover itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `ColorPalettePopover`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ColorPalettePopover` itself.
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
      fnFunctionValue: (p1: ColorPalettePopover$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalettePopover itself
       */
      oListenerValue?: object
    ): this;
  }
}
