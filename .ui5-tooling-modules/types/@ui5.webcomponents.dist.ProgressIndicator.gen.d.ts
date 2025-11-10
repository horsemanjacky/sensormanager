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

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { ValueState, CSSSize } from "sap/ui/core/library";

declare module "@ui5/webcomponents/dist/ProgressIndicator" {
  export interface $ProgressIndicatorSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component value is shown.
     */
    hideValue?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the numerical value in percent for the length of the component.
     *
     * **Note:**
     * If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
     */
    value?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the text value to be displayed in the bar.
     *
     * **Note:**
     *
     * - If there is no value provided or the value is empty, the default percentage value is shown.
     * - If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.
     */
    displayValue?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
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
  }

  export default class ProgressIndicator extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ProgressIndicatorSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ProgressIndicatorSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ProgressIndicator" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ProgressIndicator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ProgressIndicator".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getHideValue hideValue}.
     * Defines whether the component value is shown.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideValue(): boolean;

    /**
     * Sets a new value for property {@link #getHideValue hideValue}.
     * Defines whether the component value is shown.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideValue(hideValueValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getValue value}.
     * Specifies the numerical value in percent for the length of the component.
     *
     * **Note:**
     * If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
     * Default value is `0`.
     * @returns The content of the property
     */
    getValue(): float;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Specifies the numerical value in percent for the length of the component.
     *
     * **Note:**
     * If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: float | null): this;

    /**
     * Gets current value of property {@link #getDisplayValue displayValue}.
     * Specifies the text value to be displayed in the bar.
     *
     * **Note:**
     *
     * - If there is no value provided or the value is empty, the default percentage value is shown.
     * - If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.
     * @returns The content of the property
     */
    getDisplayValue(): string;

    /**
     * Sets a new value for property {@link #getDisplayValue displayValue}.
     * Specifies the text value to be displayed in the bar.
     *
     * **Note:**
     *
     * - If there is no value provided or the value is empty, the default percentage value is shown.
     * - If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplayValue(displayValueValue: string | null): this;

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
