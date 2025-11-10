// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { ICalendarSelectedDates } from "@ui5/webcomponents";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

declare module "@ui5/webcomponents/dist/CalendarDateRange" {
  export interface $CalendarDateRangeSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Start of date range formatted according to the `formatPattern` property
     * of the `ui5-calendar` that hosts the component.
     */
    startValue?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * End of date range formatted according to the `formatPattern` property
     * of the `ui5-calendar` that hosts the component.
     */
    endValue?: string | PropertyBindingInfo | `{${string}}`;

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
  }

  export default class CalendarDateRange
    extends WebComponent
    implements ICalendarSelectedDates
  {
    __implements__ui5_webcomponents_ICalendarSelectedDates: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarDateRangeSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarDateRangeSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/CalendarDateRange" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, CalendarDateRange>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/CalendarDateRange".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getStartValue startValue}.
     * Start of date range formatted according to the `formatPattern` property
     * of the `ui5-calendar` that hosts the component.
     * Default value is ``.
     * @returns The content of the property
     */
    getStartValue(): string;

    /**
     * Sets a new value for property {@link #getStartValue startValue}.
     * Start of date range formatted according to the `formatPattern` property
     * of the `ui5-calendar` that hosts the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setStartValue(startValueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getEndValue endValue}.
     * End of date range formatted according to the `formatPattern` property
     * of the `ui5-calendar` that hosts the component.
     * Default value is ``.
     * @returns The content of the property
     */
    getEndValue(): string;

    /**
     * Sets a new value for property {@link #getEndValue endValue}.
     * End of date range formatted according to the `formatPattern` property
     * of the `ui5-calendar` that hosts the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEndValue(endValueValue?: string | null): this;

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
  }
}
