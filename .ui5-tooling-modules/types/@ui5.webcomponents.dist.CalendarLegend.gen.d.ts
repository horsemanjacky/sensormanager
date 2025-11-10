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

import type { default as CalendarLegendItem } from "@ui5/webcomponents/dist/CalendarLegendItem";

declare module "@ui5/webcomponents/dist/CalendarLegend" {
  export interface $CalendarLegendSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Hides the Today item in the legend.
     */
    hideToday?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Hides the Selected day item in the legend.
     */
    hideSelectedDay?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Hides the Non-Working day item in the legend.
     */
    hideNonWorkingDay?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Hides the Working day item in the legend.
     */
    hideWorkingDay?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the items of the component.
     */
    items?:
      | Array<CalendarLegendItem>
      | CalendarLegendItem
      | AggregationBindingInfo
      | `{${string}}`;
  }

  export default class CalendarLegend extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarLegendSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarLegendSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/CalendarLegend" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, CalendarLegend>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/CalendarLegend".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHideToday hideToday}.
     * Hides the Today item in the legend.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideToday(): boolean;

    /**
     * Sets a new value for property {@link #getHideToday hideToday}.
     * Hides the Today item in the legend.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideToday(hideTodayValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHideSelectedDay hideSelectedDay}.
     * Hides the Selected day item in the legend.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideSelectedDay(): boolean;

    /**
     * Sets a new value for property {@link #getHideSelectedDay hideSelectedDay}.
     * Hides the Selected day item in the legend.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideSelectedDay(hideSelectedDayValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHideNonWorkingDay hideNonWorkingDay}.
     * Hides the Non-Working day item in the legend.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideNonWorkingDay(): boolean;

    /**
     * Sets a new value for property {@link #getHideNonWorkingDay hideNonWorkingDay}.
     * Hides the Non-Working day item in the legend.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideNonWorkingDay(hideNonWorkingDayValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHideWorkingDay hideWorkingDay}.
     * Hides the Working day item in the legend.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideWorkingDay(): boolean;

    /**
     * Sets a new value for property {@link #getHideWorkingDay hideWorkingDay}.
     * Hides the Working day item in the legend.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideWorkingDay(hideWorkingDayValue?: boolean | null): this;

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
     * Defines the items of the component.
     * @returns The content of the aggregation
     */
    getItems(): Array<CalendarLegendItem> | CalendarLegendItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<CalendarLegendItem> | CalendarLegendItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<CalendarLegendItem> | CalendarLegendItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<CalendarLegendItem> | CalendarLegendItem | int | ID
    ): Array<CalendarLegendItem> | CalendarLegendItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<CalendarLegendItem> | CalendarLegendItem;

    /**
     * Checks for the provided 'CalendarLegendItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<CalendarLegendItem> | CalendarLegendItem): int;
  }
}
