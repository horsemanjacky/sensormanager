// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IFormContent, CSSSize } from "sap/ui/core/library";

import type {
  default as SliderBase,
  $SliderBaseSettings
} from "@ui5/webcomponents/dist/SliderBase";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/RangeSlider" {
  export interface $RangeSliderSettings extends $SliderBaseSettings {
    /**
     * Properties
     */

    /**
     * Defines start point of a selection - position of a first handle on the slider.
     */
    startValue?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines end point of a selection - position of a second handle on the slider.
     */
    endValue?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the minimum value of the slider.
     */
    min?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the maximum value of the slider.
     */
    max?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
     *
     * **Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.
     */
    step?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Displays a label with a value on every N-th step.
     *
     * **Note:** The step and tickmarks properties must be enabled.
     * Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
     * tickmark will be labelled, which means every 4th value number.
     */
    labelInterval?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Enables tickmarks visualization for each step.
     *
     * **Note:** The step must be a positive number.
     */
    showTickmarks?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Enables handle tooltip displaying the current value.
     */
    showTooltip?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     *
     * Indicates whether input fields should be used as tooltips for the handles.
     *
     * **Note:** Setting this option to true will only work if showTooltip is set to true.
     * **Note:** In order for the component to comply with the accessibility standard, it is recommended to set the editableTooltip property to true.
     */
    editableTooltip?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the slider is in disabled state.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

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
     * Events
     */

    /**
     * Fired when the value changes and the user has finished interacting with the slider.
     */
    change?: (oEvent: RangeSlider$ChangeEvent) => void;

    /**
     * Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.
     */
    input?: (oEvent: RangeSlider$InputEvent) => void;
  }
  export interface RangeSlider$ChangeEventParameters {}

  export type RangeSlider$ChangeEvent = Event<
    RangeSlider$ChangeEventParameters,
    RangeSlider
  >;
  export interface RangeSlider$InputEventParameters {}

  export type RangeSlider$InputEvent = Event<
    RangeSlider$InputEventParameters,
    RangeSlider
  >;

  export default class RangeSlider extends SliderBase implements IFormContent {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $RangeSliderSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $RangeSliderSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/RangeSlider" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, RangeSlider>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/RangeSlider".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getStartValue startValue}.
     * Defines start point of a selection - position of a first handle on the slider.
     * Default value is `0`.
     * @returns The content of the property
     */
    getStartValue(): float;

    /**
     * Sets a new value for property {@link #getStartValue startValue}.
     * Defines start point of a selection - position of a first handle on the slider.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setStartValue(startValueValue?: float | null): this;

    /**
     * Gets current value of property {@link #getEndValue endValue}.
     * Defines end point of a selection - position of a second handle on the slider.
     * Default value is `100`.
     * @returns The content of the property
     */
    getEndValue(): float;

    /**
     * Sets a new value for property {@link #getEndValue endValue}.
     * Defines end point of a selection - position of a second handle on the slider.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEndValue(endValueValue?: float | null): this;

    /**
     * Gets current value of property {@link #getMin min}.
     * Defines the minimum value of the slider.
     * Default value is `0`.
     * @returns The content of the property
     */
    getMin(): float;

    /**
     * Sets a new value for property {@link #getMin min}.
     * Defines the minimum value of the slider.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMin(minValue?: float | null): this;

    /**
     * Gets current value of property {@link #getMax max}.
     * Defines the maximum value of the slider.
     * Default value is `100`.
     * @returns The content of the property
     */
    getMax(): float;

    /**
     * Sets a new value for property {@link #getMax max}.
     * Defines the maximum value of the slider.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMax(maxValue?: float | null): this;

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
     * Gets current value of property {@link #getStep step}.
     * Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
     *
     * **Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.
     * Default value is `1`.
     * @returns The content of the property
     */
    getStep(): float;

    /**
     * Sets a new value for property {@link #getStep step}.
     * Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).
     *
     * **Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setStep(stepValue?: float | null): this;

    /**
     * Gets current value of property {@link #getLabelInterval labelInterval}.
     * Displays a label with a value on every N-th step.
     *
     * **Note:** The step and tickmarks properties must be enabled.
     * Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
     * tickmark will be labelled, which means every 4th value number.
     * Default value is `0`.
     * @returns The content of the property
     */
    getLabelInterval(): float;

    /**
     * Sets a new value for property {@link #getLabelInterval labelInterval}.
     * Displays a label with a value on every N-th step.
     *
     * **Note:** The step and tickmarks properties must be enabled.
     * Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second
     * tickmark will be labelled, which means every 4th value number.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabelInterval(labelIntervalValue?: float | null): this;

    /**
     * Gets current value of property {@link #getShowTickmarks showTickmarks}.
     * Enables tickmarks visualization for each step.
     *
     * **Note:** The step must be a positive number.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowTickmarks(): boolean;

    /**
     * Sets a new value for property {@link #getShowTickmarks showTickmarks}.
     * Enables tickmarks visualization for each step.
     *
     * **Note:** The step must be a positive number.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTickmarks(showTickmarksValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getShowTooltip showTooltip}.
     * Enables handle tooltip displaying the current value.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowTooltip(): boolean;

    /**
     * Sets a new value for property {@link #getShowTooltip showTooltip}.
     * Enables handle tooltip displaying the current value.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTooltip(showTooltipValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getEditableTooltip editableTooltip}.
     *
     * Indicates whether input fields should be used as tooltips for the handles.
     *
     * **Note:** Setting this option to true will only work if showTooltip is set to true.
     * **Note:** In order for the component to comply with the accessibility standard, it is recommended to set the editableTooltip property to true.
     * Default value is `false`.
     * @returns The content of the property
     */
    getEditableTooltip(): boolean;

    /**
     * Sets a new value for property {@link #getEditableTooltip editableTooltip}.
     *
     * Indicates whether input fields should be used as tooltips for the handles.
     *
     * **Note:** Setting this option to true will only work if showTooltip is set to true.
     * **Note:** In order for the component to comply with the accessibility standard, it is recommended to set the editableTooltip property to true.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEditableTooltip(editableTooltipValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the slider is in disabled state.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the slider is in disabled state.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `RangeSlider`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RangeSlider$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RangeSlider itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `RangeSlider`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `RangeSlider` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RangeSlider$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RangeSlider itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `RangeSlider`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `RangeSlider` itself.
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
      fnFunctionValue: (p1: RangeSlider$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RangeSlider itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getInput input} event of this `RangeSlider`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RangeSlider$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RangeSlider itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `RangeSlider`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `RangeSlider` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RangeSlider$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RangeSlider itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `RangeSlider`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `RangeSlider` itself.
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
      fnFunctionValue: (p1: RangeSlider$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RangeSlider itself
       */
      oListenerValue?: object
    ): this;
  }
}
