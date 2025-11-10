// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IFormContent, ValueState, ID } from "sap/ui/core/library";

import type {
  default as DatePicker,
  $DatePickerSettings
} from "@ui5/webcomponents/dist/DatePicker";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CalendarType } from "@ui5/webcomponents-base";

import type { CalendarWeekNumbering } from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/DateRangePicker" {
  export interface $DateRangePickerSettings extends $DatePickerSettings {
    /**
     * Properties
     */

    /**
     * Determines the symbol which separates the dates.
     * If not supplied, the default time interval delimiter for the current locale will be used.
     */
    delimiter?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a formatted date value.
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component is displayed as disabled.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component is displayed as read-only.
     */
    readonly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a short hint, intended to aid the user with data entry when the
     * component has no value.
     *
     * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
     * Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
     */
    placeholder?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the week numbers column.
     *
     * **Note:** For calendars other than Gregorian,
     * the week numbers are not displayed regardless of what is set.
     */
    hideWeekNumbers?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the open or closed state of the popover.
     */
    open?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the aria-label attribute for the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Receives id(or many ids) of the elements that describe the input.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

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
     * Defines the value state message that will be displayed as pop up under the component.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     */
    valueStateText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the input operation has finished by pressing Enter or on focusout.
     */
    change?: (oEvent: DateRangePicker$ChangeEvent) => void;

    /**
     * Fired when the value of the component is changed at each key stroke.
     */
    input?: (oEvent: DateRangePicker$InputEvent) => void;

    /**
     * Fired before the value state of the component is updated internally.
     * The event is preventable, meaning that if it's default action is
     * prevented, the component will not update the value state.
     */
    valueStateChange?: (oEvent: DateRangePicker$ValueStateChangeEvent) => void;

    /**
     * Fired after the component's picker is opened.
     */
    open?: (oEvent: DateRangePicker$OpenEvent) => void;

    /**
     * Fired after the component's picker is closed.
     */
    close?: (oEvent: DateRangePicker$CloseEvent) => void;
  }
  export interface DateRangePicker$ChangeEventParameters {
    /**
     * The submitted value.
     */
    value?: string;

    /**
     * Indicator if the value is in correct format pattern and in valid range.
     */
    valid?: boolean;
  }

  export type DateRangePicker$ChangeEvent = Event<
    DateRangePicker$ChangeEventParameters,
    DateRangePicker
  >;
  export interface DateRangePicker$InputEventParameters {
    /**
     * The submitted value.
     */
    value?: string;

    /**
     * Indicator if the value is in correct format pattern and in valid range.
     */
    valid?: boolean;
  }

  export type DateRangePicker$InputEvent = Event<
    DateRangePicker$InputEventParameters,
    DateRangePicker
  >;
  export interface DateRangePicker$ValueStateChangeEventParameters {
    /**
     * The new `valueState` that will be set.
     */
    valueState?: string;

    /**
     * Indicator if the value is in correct format pattern and in valid range.
     */
    valid?: boolean;
  }

  export type DateRangePicker$ValueStateChangeEvent = Event<
    DateRangePicker$ValueStateChangeEventParameters,
    DateRangePicker
  >;
  export interface DateRangePicker$OpenEventParameters {}

  export type DateRangePicker$OpenEvent = Event<
    DateRangePicker$OpenEventParameters,
    DateRangePicker
  >;
  export interface DateRangePicker$CloseEventParameters {}

  export type DateRangePicker$CloseEvent = Event<
    DateRangePicker$CloseEventParameters,
    DateRangePicker
  >;

  export default class DateRangePicker
    extends DatePicker
    implements IFormContent
  {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $DateRangePickerSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $DateRangePickerSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/DateRangePicker" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, DateRangePicker>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/DateRangePicker".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Checks if a value is valid against the current date format of the DatePicker.
     */
    isValid(
      /**
       * A value to be tested against the current date format
       */
      valueValue: string
    ): void;

    /**
     * Checks if a value is valid against the current date format of the DatePicker.
     */
    isValidValue(
      /**
       * A value to be tested against the current date format
       */
      valueValue: string
    ): void;

    /**
     * Checks if a value is valid against the current date format of the DatePicker.
     */
    isValidDisplayValue(
      /**
       * A value to be tested against the current date format
       */
      valueValue: string
    ): void;

    /**
     * Checks if a date is between the minimum and maximum date.
     */
    isInValidRange(
      /**
       * A value to be checked
       */
      valueValue: string
    ): void;

    /**
     * Formats a Java Script date object into a string representing a locale date
     * according to the `formatPattern` property of the DatePicker instance
     */
    formatValue(
      /**
       * A Java Script date object to be formatted as string
       */
      dateValue: Date
    ): void;

    /**
     * Gets current value of property {@link #getDelimiter delimiter}.
     * Determines the symbol which separates the dates.
     * If not supplied, the default time interval delimiter for the current locale will be used.
     * Default value is `-`.
     * @returns The content of the property
     */
    getDelimiter(): string;

    /**
     * Sets a new value for property {@link #getDelimiter delimiter}.
     * Determines the symbol which separates the dates.
     * If not supplied, the default time interval delimiter for the current locale will be used.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelimiter(delimiterValue?: string | null): this;

    /**
     * Gets current value of property {@link #getDateValue dateValue}.
     * **Note:** The getter method is inherited and not supported. If called it will return an empty value.
     * @returns The content of the property
     */
    getDateValue(): Date | null;

    /**
     * Gets current value of property {@link #getDateValueUTC dateValueUTC}.
     * **Note:** The getter method is inherited and not supported. If called it will return an empty value.
     * @returns The content of the property
     */
    getDateValueUTC(): Date | null;

    /**
     * Gets current value of property {@link #getStartDateValue startDateValue}.
     * Returns the start date of the currently selected range as JavaScript Date instance.
     * @returns The content of the property
     */
    getStartDateValue(): Date | null;

    /**
     * Gets current value of property {@link #getEndDateValue endDateValue}.
     * Returns the end date of the currently selected range as JavaScript Date instance.
     * @returns The content of the property
     */
    getEndDateValue(): Date | null;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines a formatted date value.
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines a formatted date value.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getValueState valueState}.
     * Defines the value state of the component.
     * Default value is `None`.
     * @returns The content of the property
     */
    getValueState(): ValueState | keyof typeof ValueState;

    /**
     * Sets a new value for property {@link #getValueState valueState}.
     * Defines the value state of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueState(
      valueStateValue?: ValueState | keyof typeof ValueState | null
    ): this;

    /**
     * Gets current value of property {@link #getRequired required}.
     * Defines whether the component is required.
     * Default value is `false`.
     * @returns The content of the property
     */
    getRequired(): boolean;

    /**
     * Sets a new value for property {@link #getRequired required}.
     * Defines whether the component is required.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(requiredValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Determines whether the component is displayed as disabled.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Determines whether the component is displayed as disabled.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getReadonly readonly}.
     * Determines whether the component is displayed as read-only.
     * Default value is `false`.
     * @returns The content of the property
     */
    getReadonly(): boolean;

    /**
     * Sets a new value for property {@link #getReadonly readonly}.
     * Determines whether the component is displayed as read-only.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setReadonly(readonlyValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getPlaceholder placeholder}.
     * Defines a short hint, intended to aid the user with data entry when the
     * component has no value.
     *
     * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
     * Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
     * @returns The content of the property
     */
    getPlaceholder(): string;

    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     * Defines a short hint, intended to aid the user with data entry when the
     * component has no value.
     *
     * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
     * Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlaceholder(placeholderValue: string | null): this;

    /**
     * Gets current value of property {@link #getName name}.
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * @returns The content of the property
     */
    getName(): string;

    /**
     * Sets a new value for property {@link #getName name}.
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(nameValue: string | null): this;

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
     * Gets current value of property {@link #getOpen open}.
     * Defines the open or closed state of the popover.
     * Default value is `false`.
     * @returns The content of the property
     */
    getOpen(): boolean;

    /**
     * Sets a new value for property {@link #getOpen open}.
     * Defines the open or closed state of the popover.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpen(openValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the aria-label attribute for the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the aria-label attribute for the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

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
     * Receives id(or many ids) of the elements that describe the input.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Receives id(or many ids) of the elements that describe the input.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
    ): this;

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
     * Gets current value of property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     * @returns The content of the property
     */
    getValueStateText(): string;

    /**
     * Sets a new value for property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueStateText(valueStateTextValue: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `DateRangePicker`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getInput input} event of this `DateRangePicker`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getValueStateChange valueStateChange} event of this `DateRangePicker`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachValueStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$ValueStateChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getValueStateChange valueStateChange} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachValueStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$ValueStateChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getValueStateChange valueStateChange} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachValueStateChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$ValueStateChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `DateRangePicker`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
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
      fnFunctionValue: (p1: DateRangePicker$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `DateRangePicker`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: DateRangePicker$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `DateRangePicker`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `DateRangePicker` itself.
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
      fnFunctionValue: (p1: DateRangePicker$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this DateRangePicker itself
       */
      oListenerValue?: object
    ): this;
  }
}
