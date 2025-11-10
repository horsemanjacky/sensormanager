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

import type { CalendarType } from "@ui5/webcomponents-base";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CalendarWeekNumbering } from "@ui5/webcomponents";

declare module "@ui5/webcomponents/dist/DateComponentBase" {
  export interface $DateComponentBaseSettings extends $WebComponentSettings {
    /**
     * Properties
     */

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
  }

  export default class DateComponentBase extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DateComponentBaseSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $DateComponentBaseSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/DateComponentBase" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, DateComponentBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/DateComponentBase".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
  }
}
