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

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ColorPalette" {
  export interface $ColorPaletteSettings extends $WebComponentSettings {
    /**
     * Properties
     */

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
     * Defines the `ui5-color-palette-item` elements.
     */
    colors?:
      | Array<IColorPaletteItem>
      | IColorPaletteItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the user selects a color.
     */
    itemClick?: (oEvent: ColorPalette$ItemClickEvent) => void;
  }
  export interface ColorPalette$ItemClickEventParameters {
    /**
     * the selected color
     */
    color?: string;
  }

  export type ColorPalette$ItemClickEvent = Event<
    ColorPalette$ItemClickEventParameters,
    ColorPalette
  >;

  export default class ColorPalette extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPaletteSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPaletteSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ColorPalette" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ColorPalette>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ColorPalette".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Defines the `ui5-color-palette-item` elements.
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
     * Detaches event handler `fnFunction` from the {@link #getItemClick itemClick} event of this `ColorPalette`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ColorPalette$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalette itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `ColorPalette`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ColorPalette` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ColorPalette$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalette itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `ColorPalette`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ColorPalette` itself.
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
      fnFunctionValue: (p1: ColorPalette$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ColorPalette itself
       */
      oListenerValue?: object
    ): this;
  }
}
