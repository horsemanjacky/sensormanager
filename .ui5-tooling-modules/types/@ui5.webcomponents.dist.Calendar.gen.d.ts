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
  default as CalendarPart,
  $CalendarPartSettings
} from "@ui5/webcomponents/dist/CalendarPart";

import type {
  CalendarSelectionMode,
  CalendarWeekNumbering,
  ICalendarSelectedDates
} from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CalendarType } from "@ui5/webcomponents-base";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as CalendarLegend } from "@ui5/webcomponents/dist/CalendarLegend";

import type { default as SpecialCalendarDate } from "@ui5/webcomponents/dist/SpecialCalendarDate";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Calendar" {
  export interface $CalendarSettings extends $CalendarPartSettings {
    /**
     * Properties
     */

    /**
     * Defines the type of selection used in the calendar component.
     * Accepted property values are:
     *
     * - `CalendarSelectionMode.Single` - enables a single date selection.(default value)
     * - `CalendarSelectionMode.Range` - enables selection of a date range.
     * - `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
     */
    selectionMode?:
      | CalendarSelectionMode
      | keyof typeof CalendarSelectionMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the visibility of the week numbers column.
     *
     * **Note:** For calendars other than Gregorian,
     * the week numbers are not displayed regardless of what is set.
     */
    hideWeekNumbers?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets a calendar type used for display.
     * If not set, the calendar type of the global configuration is used.
     */
    primaryCalendarType?:
      | CalendarType
      | keyof typeof CalendarType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the secondary calendar type.
     * If not set, the calendar will only show the primary calendar type.
     */
    secondaryCalendarType?:
      | CalendarType
      | keyof typeof CalendarType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the format, displayed in the input field.
     */
    formatPattern?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the format, displayed in the input field.
     */
    displayFormat?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the format, used for the value attribute.
     */
    valueFormat?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the minimum date available for selection.
     *
     * **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).
     */
    minDate?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the maximum date available for selection.
     *
     * **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).
     */
    maxDate?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines how to calculate calendar weeks and first day of the week.
     * If not set, the calendar will be displayed according to the currently set global configuration.
     */
    calendarWeekNumbering?:
      | CalendarWeekNumbering
      | keyof typeof CalendarWeekNumbering
      | PropertyBindingInfo
      | `{${string}}`;

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
     * Defines the calendar legend of the component.
     */
    calendarLegend?:
      | Array<CalendarLegend>
      | CalendarLegend
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the selected date or dates (depending on the `selectionMode` property)
     * for this calendar as instances of `ui5-date` or `ui5-date-range`.
     * Use `ui5-date` for single or multiple selection, and `ui5-date-range` for range selection.
     */
    dates?:
      | Array<ICalendarSelectedDates>
      | ICalendarSelectedDates
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the special dates, visually emphasized in the calendar.
     */
    specialDates?:
      | Array<SpecialCalendarDate>
      | SpecialCalendarDate
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the selected dates change.
     *
     * **Note:** If you call `preventDefault()` for this event, the component will not
     * create instances of `ui5-date` for the newly selected dates. In that case you should do this manually.
     */
    selectionChange?: (oEvent: Calendar$SelectionChangeEvent) => void;
  }
  export interface Calendar$SelectionChangeEventParameters {
    /**
     * The selected dates
     */
    selectedValues?: Array<string> | string;

    /**
     * The selected dates as UTC timestamps
     */
    selectedDates?: Array<float> | float;
  }

  export type Calendar$SelectionChangeEvent = Event<
    Calendar$SelectionChangeEventParameters,
    Calendar
  >;

  export default class Calendar extends CalendarPart {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Calendar" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Calendar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Calendar".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     * Defines the type of selection used in the calendar component.
     * Accepted property values are:
     *
     * - `CalendarSelectionMode.Single` - enables a single date selection.(default value)
     * - `CalendarSelectionMode.Range` - enables selection of a date range.
     * - `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
     * Default value is `Single`.
     * @returns The content of the property
     */
    getSelectionMode():
      | CalendarSelectionMode
      | keyof typeof CalendarSelectionMode;

    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     * Defines the type of selection used in the calendar component.
     * Accepted property values are:
     *
     * - `CalendarSelectionMode.Single` - enables a single date selection.(default value)
     * - `CalendarSelectionMode.Range` - enables selection of a date range.
     * - `CalendarSelectionMode.Multiple` - enables selection of multiple dates.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Single`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionMode(
      selectionModeValue?:
        | CalendarSelectionMode
        | keyof typeof CalendarSelectionMode
        | null
    ): this;

    /**
     * Gets current value of property {@link #getHideWeekNumbers hideWeekNumbers}.
     * Defines the visibility of the week numbers column.
     *
     * **Note:** For calendars other than Gregorian,
     * the week numbers are not displayed regardless of what is set.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideWeekNumbers(): boolean;

    /**
     * Sets a new value for property {@link #getHideWeekNumbers hideWeekNumbers}.
     * Defines the visibility of the week numbers column.
     *
     * **Note:** For calendars other than Gregorian,
     * the week numbers are not displayed regardless of what is set.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideWeekNumbers(hideWeekNumbersValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
     * Sets a calendar type used for display.
     * If not set, the calendar type of the global configuration is used.
     * @returns The content of the property
     */
    getPrimaryCalendarType(): CalendarType | keyof typeof CalendarType;

    /**
     * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
     * Sets a calendar type used for display.
     * If not set, the calendar type of the global configuration is used.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPrimaryCalendarType(
      primaryCalendarTypeValue: CalendarType | keyof typeof CalendarType | null
    ): this;

    /**
     * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
     * Defines the secondary calendar type.
     * If not set, the calendar will only show the primary calendar type.
     * @returns The content of the property
     */
    getSecondaryCalendarType(): CalendarType | keyof typeof CalendarType;

    /**
     * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
     * Defines the secondary calendar type.
     * If not set, the calendar will only show the primary calendar type.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSecondaryCalendarType(
      secondaryCalendarTypeValue:
        | CalendarType
        | keyof typeof CalendarType
        | null
    ): this;

    /**
     * Gets current value of property {@link #getFormatPattern formatPattern}.
     * Determines the format, displayed in the input field.
     * @returns The content of the property
     */
    getFormatPattern(): string;

    /**
     * Sets a new value for property {@link #getFormatPattern formatPattern}.
     * Determines the format, displayed in the input field.
     * @returns Reference to `this` in order to allow method chaining
     */
    setFormatPattern(formatPatternValue: string | null): this;

    /**
     * Gets current value of property {@link #getDisplayFormat displayFormat}.
     * Determines the format, displayed in the input field.
     * @returns The content of the property
     */
    getDisplayFormat(): string;

    /**
     * Sets a new value for property {@link #getDisplayFormat displayFormat}.
     * Determines the format, displayed in the input field.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplayFormat(displayFormatValue: string | null): this;

    /**
     * Gets current value of property {@link #getValueFormat valueFormat}.
     * Determines the format, used for the value attribute.
     * @returns The content of the property
     */
    getValueFormat(): string;

    /**
     * Sets a new value for property {@link #getValueFormat valueFormat}.
     * Determines the format, used for the value attribute.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueFormat(valueFormatValue: string | null): this;

    /**
     * Gets current value of property {@link #getMinDate minDate}.
     * Determines the minimum date available for selection.
     *
     * **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).
     * Default value is ``.
     * @returns The content of the property
     */
    getMinDate(): string;

    /**
     * Sets a new value for property {@link #getMinDate minDate}.
     * Determines the minimum date available for selection.
     *
     * **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinDate(minDateValue?: string | null): this;

    /**
     * Gets current value of property {@link #getMaxDate maxDate}.
     * Determines the maximum date available for selection.
     *
     * **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).
     * Default value is ``.
     * @returns The content of the property
     */
    getMaxDate(): string;

    /**
     * Sets a new value for property {@link #getMaxDate maxDate}.
     * Determines the maximum date available for selection.
     *
     * **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxDate(maxDateValue?: string | null): this;

    /**
     * Gets current value of property {@link #getCalendarWeekNumbering calendarWeekNumbering}.
     * Defines how to calculate calendar weeks and first day of the week.
     * If not set, the calendar will be displayed according to the currently set global configuration.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getCalendarWeekNumbering():
      | CalendarWeekNumbering
      | keyof typeof CalendarWeekNumbering;

    /**
     * Sets a new value for property {@link #getCalendarWeekNumbering calendarWeekNumbering}.
     * Defines how to calculate calendar weeks and first day of the week.
     * If not set, the calendar will be displayed according to the currently set global configuration.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setCalendarWeekNumbering(
      calendarWeekNumberingValue?:
        | CalendarWeekNumbering
        | keyof typeof CalendarWeekNumbering
        | null
    ): this;

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
     * Gets content of aggregation {@link #getCalendarLegend calendarLegend}.
     * Defines the calendar legend of the component.
     * @returns The content of the aggregation
     */
    getCalendarLegend(): Array<CalendarLegend> | CalendarLegend;

    /**
     * Destroys the calendarLegend in the aggregation {@link #getCalendarLegend calendarLegend}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCalendarLegend(): this;

    /**
     * Adds some calendarLegend to the aggregation {@link #getCalendarLegend calendarLegend}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addCalendarLegend(
      calendarLegendValue: Array<CalendarLegend> | CalendarLegend
    ): this;

    /**
     * Inserts a calendarLegend into the aggregation {@link #getCalendarLegend calendarLegend}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertCalendarLegend(
      calendarLegendValue: Array<CalendarLegend> | CalendarLegend,

      indexValue: int
    ): this;

    /**
     * Removes a calendarLegend from the aggregation {@link #getCalendarLegend calendarLegend}.
     * @returns The removed calendarLegend or `null`
     */
    removeCalendarLegend(
      calendarLegendValue: Array<CalendarLegend> | CalendarLegend | int | ID
    ): Array<CalendarLegend> | CalendarLegend | null;

    /**
     * Removes all the controls from the aggregation {@link #getCalendarLegend calendarLegend}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllCalendarLegend(): Array<CalendarLegend> | CalendarLegend;

    /**
     * Checks for the provided 'CalendarLegend' in the aggregation {@link #getCalendarLegend calendarLegend} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCalendarLegend(
      calendarLegendValue: Array<CalendarLegend> | CalendarLegend
    ): int;

    /**
     * Gets content of aggregation {@link #getDates dates}.
     * Defines the selected date or dates (depending on the `selectionMode` property)
     * for this calendar as instances of `ui5-date` or `ui5-date-range`.
     * Use `ui5-date` for single or multiple selection, and `ui5-date-range` for range selection.
     * @returns The content of the aggregation
     */
    getDates(): Array<ICalendarSelectedDates> | ICalendarSelectedDates;

    /**
     * Destroys the dates in the aggregation {@link #getDates dates}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDates(): this;

    /**
     * Adds some dates to the aggregation {@link #getDates dates}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addDate(
      dateValue: Array<ICalendarSelectedDates> | ICalendarSelectedDates
    ): this;

    /**
     * Inserts a dates into the aggregation {@link #getDates dates}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertDate(
      dateValue: Array<ICalendarSelectedDates> | ICalendarSelectedDates,

      indexValue: int
    ): this;

    /**
     * Removes a dates from the aggregation {@link #getDates dates}.
     * @returns The removed dates or `null`
     */
    removeDate(
      dateValue:
        | Array<ICalendarSelectedDates>
        | ICalendarSelectedDates
        | int
        | ID
    ): Array<ICalendarSelectedDates> | ICalendarSelectedDates | null;

    /**
     * Removes all the controls from the aggregation {@link #getDates dates}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDates(): Array<ICalendarSelectedDates> | ICalendarSelectedDates;

    /**
     * Checks for the provided 'ICalendarSelectedDates' in the aggregation {@link #getDates dates} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfDate(
      dateValue: Array<ICalendarSelectedDates> | ICalendarSelectedDates
    ): int;

    /**
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     * Defines the special dates, visually emphasized in the calendar.
     * @returns The content of the aggregation
     */
    getSpecialDates(): Array<SpecialCalendarDate> | SpecialCalendarDate;

    /**
     * Destroys the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySpecialDates(): this;

    /**
     * Adds some specialDates to the aggregation {@link #getSpecialDates specialDates}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addSpecialDate(
      specialDateValue: Array<SpecialCalendarDate> | SpecialCalendarDate
    ): this;

    /**
     * Inserts a specialDates into the aggregation {@link #getSpecialDates specialDates}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSpecialDate(
      specialDateValue: Array<SpecialCalendarDate> | SpecialCalendarDate,

      indexValue: int
    ): this;

    /**
     * Removes a specialDates from the aggregation {@link #getSpecialDates specialDates}.
     * @returns The removed specialDates or `null`
     */
    removeSpecialDate(
      specialDateValue:
        | Array<SpecialCalendarDate>
        | SpecialCalendarDate
        | int
        | ID
    ): Array<SpecialCalendarDate> | SpecialCalendarDate | null;

    /**
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSpecialDates(): Array<SpecialCalendarDate> | SpecialCalendarDate;

    /**
     * Checks for the provided 'SpecialCalendarDate' in the aggregation {@link #getSpecialDates specialDates} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSpecialDate(
      specialDateValue: Array<SpecialCalendarDate> | SpecialCalendarDate
    ): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelectionChange selectionChange} event of this `Calendar`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Calendar$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Calendar itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Calendar`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Calendar` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Calendar$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Calendar itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Calendar`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Calendar` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Calendar$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Calendar itself
       */
      oListenerValue?: object
    ): this;
  }
}
