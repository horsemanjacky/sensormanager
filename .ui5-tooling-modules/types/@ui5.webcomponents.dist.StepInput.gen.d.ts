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

import type { ValueState, CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/StepInput" {
  export interface $StepInputSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines a value of the component.
     */
    value?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a minimum value of the component.
     */
    min?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a maximum value of the component.
     */
    max?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a step of increasing/decreasing the value of the component.
     */
    step?: float | PropertyBindingInfo | `{${string}}`;

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
     * Determines the number of digits after the decimal point of the component.
     */
    valuePrecision?: float | PropertyBindingInfo | `{${string}}`;

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
    change?: (oEvent: StepInput$ChangeEvent) => void;

    /**
     * Fired when the value of the component changes at each keystroke.
     */
    input?: (oEvent: StepInput$InputEvent) => void;

    /**
     * Fired before the value state of the component is updated internally.
     * The event is preventable, meaning that if it's default action is
     * prevented, the component will not update the value state.
     */
    valueStateChange?: (oEvent: StepInput$ValueStateChangeEvent) => void;
  }
  export interface StepInput$ChangeEventParameters {}

  export type StepInput$ChangeEvent = Event<
    StepInput$ChangeEventParameters,
    StepInput
  >;
  export interface StepInput$InputEventParameters {}

  export type StepInput$InputEvent = Event<
    StepInput$InputEventParameters,
    StepInput
  >;
  export interface StepInput$ValueStateChangeEventParameters {
    /**
     * The new `valueState` that will be set.
     */
    valueState?: string;

    /**
     * Indicator if the value is in between the min and max value.
     */
    valid?: boolean;
  }

  export type StepInput$ValueStateChangeEvent = Event<
    StepInput$ValueStateChangeEventParameters,
    StepInput
  >;

  export default class StepInput extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $StepInputSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $StepInputSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/StepInput" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, StepInput>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/StepInput".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines a value of the component.
     * Default value is `0`.
     * @returns The content of the property
     */
    getValue(): float;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines a value of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: float | null): this;

    /**
     * Gets current value of property {@link #getMin min}.
     * Defines a minimum value of the component.
     * @returns The content of the property
     */
    getMin(): float;

    /**
     * Sets a new value for property {@link #getMin min}.
     * Defines a minimum value of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMin(minValue: float | null): this;

    /**
     * Gets current value of property {@link #getMax max}.
     * Defines a maximum value of the component.
     * @returns The content of the property
     */
    getMax(): float;

    /**
     * Sets a new value for property {@link #getMax max}.
     * Defines a maximum value of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMax(maxValue: float | null): this;

    /**
     * Gets current value of property {@link #getStep step}.
     * Defines a step of increasing/decreasing the value of the component.
     * Default value is `1`.
     * @returns The content of the property
     */
    getStep(): float;

    /**
     * Sets a new value for property {@link #getStep step}.
     * Defines a step of increasing/decreasing the value of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setStep(stepValue?: float | null): this;

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
     * Gets current value of property {@link #getValuePrecision valuePrecision}.
     * Determines the number of digits after the decimal point of the component.
     * Default value is `0`.
     * @returns The content of the property
     */
    getValuePrecision(): float;

    /**
     * Sets a new value for property {@link #getValuePrecision valuePrecision}.
     * Determines the number of digits after the decimal point of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValuePrecision(valuePrecisionValue?: float | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `StepInput`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: StepInput$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `StepInput`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `StepInput` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: StepInput$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `StepInput`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `StepInput` itself.
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
      fnFunctionValue: (p1: StepInput$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getInput input} event of this `StepInput`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: StepInput$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `StepInput`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `StepInput` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: StepInput$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `StepInput`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `StepInput` itself.
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
      fnFunctionValue: (p1: StepInput$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getValueStateChange valueStateChange} event of this `StepInput`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachValueStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: StepInput$ValueStateChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getValueStateChange valueStateChange} event of this `StepInput`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `StepInput` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachValueStateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: StepInput$ValueStateChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getValueStateChange valueStateChange} event of this `StepInput`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `StepInput` itself.
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
      fnFunctionValue: (p1: StepInput$ValueStateChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this StepInput itself
       */
      oListenerValue?: object
    ): this;
  }
}
