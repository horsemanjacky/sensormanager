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
  IFormContent,
  ValueState,
  CSSSize,
  ID
} from "sap/ui/core/library";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { SelectTextSeparator, IOption } from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Select" {
  export interface $SelectSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

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
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     */
    readonly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Receives id(or many ids) of the elements that describe the select.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the separator type for the two columns layout when Select is in read-only mode.
     */
    textSeparator?:
      | SelectTextSeparator
      | keyof typeof SelectTextSeparator
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the value of the component:
     *
     * - when get - returns the value of the component or the value/text content of the selected option.
     * - when set - selects the option with matching `value` property or text content.
     *
     * **Note:** Use either the Select's value or the Options' selected property.
     * Mixed usage could result in unexpected behavior.
     *
     * **Note:** If the given value does not match any existing option,
     * no option will be selected and the Select component will be displayed as empty.
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

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
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
     */
    valueStateText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the component options.
     *
     * **Note:** Only one selected option is allowed.
     * If more than one option is defined as selected, the last one would be considered as the selected one.
     *
     * **Note:** Use the `ui5-option` component to define the desired options.
     */
    options?: Array<IOption> | IOption | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the HTML element that will be displayed in the component input part,
     * representing the selected option.
     *
     * **Note:** If not specified and `ui5-option-custom` is used,
     * either the option's `display-text` or its textContent will be displayed.
     *
     * **Note:** If not specified and `ui5-option` is used,
     * the option's textContent will be displayed.
     */
    label?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the select.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the selected option changes.
     */
    change?: (oEvent: Select$ChangeEvent) => void;

    /**
     * Fired when the user navigates through the options, but the selection is not finalized,
     * or when pressing the ESC key to revert the current selection.
     */
    liveChange?: (oEvent: Select$LiveChangeEvent) => void;

    /**
     * Fired after the component's dropdown menu opens.
     */
    open?: (oEvent: Select$OpenEvent) => void;

    /**
     * Fired after the component's dropdown menu closes.
     */
    close?: (oEvent: Select$CloseEvent) => void;
  }
  export interface Select$ChangeEventParameters {
    /**
     * the selected option.
     */
    selectedOption?: IOption;
  }

  export type Select$ChangeEvent = Event<Select$ChangeEventParameters, Select>;
  export interface Select$LiveChangeEventParameters {
    /**
     * the selected option.
     */
    selectedOption?: IOption;
  }

  export type Select$LiveChangeEvent = Event<
    Select$LiveChangeEventParameters,
    Select
  >;
  export interface Select$OpenEventParameters {}

  export type Select$OpenEvent = Event<Select$OpenEventParameters, Select>;
  export interface Select$CloseEventParameters {}

  export type Select$CloseEvent = Event<Select$CloseEventParameters, Select>;

  export default class Select extends WebComponent implements IFormContent {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SelectSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SelectSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Select" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Select>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Select".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is noninteractive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

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
     * Gets current value of property {@link #getReadonly readonly}.
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * Default value is `false`.
     * @returns The content of the property
     */
    getReadonly(): boolean;

    /**
     * Sets a new value for property {@link #getReadonly readonly}.
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setReadonly(readonlyValue?: boolean | null): this;

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
     * Receives id(or many ids) of the elements that describe the select.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Receives id(or many ids) of the elements that describe the select.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
    ): this;

    /**
     * Gets current value of property {@link #getTextSeparator textSeparator}.
     * Defines the separator type for the two columns layout when Select is in read-only mode.
     * Default value is `Dash`.
     * @returns The content of the property
     */
    getTextSeparator(): SelectTextSeparator | keyof typeof SelectTextSeparator;

    /**
     * Sets a new value for property {@link #getTextSeparator textSeparator}.
     * Defines the separator type for the two columns layout when Select is in read-only mode.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Dash`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setTextSeparator(
      textSeparatorValue?:
        | SelectTextSeparator
        | keyof typeof SelectTextSeparator
        | null
    ): this;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines the value of the component:
     *
     * - when get - returns the value of the component or the value/text content of the selected option.
     * - when set - selects the option with matching `value` property or text content.
     *
     * **Note:** Use either the Select's value or the Options' selected property.
     * Mixed usage could result in unexpected behavior.
     *
     * **Note:** If the given value does not match any existing option,
     * no option will be selected and the Select component will be displayed as empty.
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the value of the component:
     *
     * - when get - returns the value of the component or the value/text content of the selected option.
     * - when set - selects the option with matching `value` property or text content.
     *
     * **Note:** Use either the Select's value or the Options' selected property.
     * Mixed usage could result in unexpected behavior.
     *
     * **Note:** If the given value does not match any existing option,
     * no option will be selected and the Select component will be displayed as empty.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getSelectedOption selectedOption}.
     * Currently selected `ui5-option` element.
     * @returns The content of the property
     */
    getSelectedOption(): IOption;

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
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
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
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueStateText(valueStateTextValue: string | null): this;

    /**
     * Gets content of aggregation {@link #getOptions options}.
     * Defines the component options.
     *
     * **Note:** Only one selected option is allowed.
     * If more than one option is defined as selected, the last one would be considered as the selected one.
     *
     * **Note:** Use the `ui5-option` component to define the desired options.
     * @returns The content of the aggregation
     */
    getOptions(): Array<IOption> | IOption;

    /**
     * Destroys the options in the aggregation {@link #getOptions options}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyOptions(): this;

    /**
     * Adds some options to the aggregation {@link #getOptions options}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addOption(optionValue: Array<IOption> | IOption): this;

    /**
     * Inserts an options into the aggregation {@link #getOptions options}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertOption(
      optionValue: Array<IOption> | IOption,

      indexValue: int
    ): this;

    /**
     * Removes an options from the aggregation {@link #getOptions options}.
     * @returns The removed options or `null`
     */
    removeOption(
      optionValue: Array<IOption> | IOption | int | ID
    ): Array<IOption> | IOption | null;

    /**
     * Removes all the controls from the aggregation {@link #getOptions options}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllOptions(): Array<IOption> | IOption;

    /**
     * Checks for the provided 'IOption' in the aggregation {@link #getOptions options} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfOption(optionValue: Array<IOption> | IOption): int;

    /**
     * Gets content of aggregation {@link #getLabel label}.
     * Defines the HTML element that will be displayed in the component input part,
     * representing the selected option.
     *
     * **Note:** If not specified and `ui5-option-custom` is used,
     * either the option's `display-text` or its textContent will be displayed.
     *
     * **Note:** If not specified and `ui5-option` is used,
     * the option's textContent will be displayed.
     * @returns The content of the aggregation
     */
    getLabel(): Array<Control> | Control;

    /**
     * Destroys the label in the aggregation {@link #getLabel label}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLabel(): this;

    /**
     * Adds some label to the aggregation {@link #getLabel label}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addLabel(labelValue: Array<Control> | Control): this;

    /**
     * Inserts a label into the aggregation {@link #getLabel label}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertLabel(
      labelValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a label from the aggregation {@link #getLabel label}.
     * @returns The removed label or `null`
     */
    removeLabel(
      labelValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getLabel label}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllLabel(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getLabel label} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfLabel(labelValue: Array<Control> | Control): int;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `Select`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
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
      fnFunctionValue: (p1: Select$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getLiveChange liveChange} event of this `Select`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$LiveChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getLiveChange liveChange} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$LiveChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getLiveChange liveChange} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$LiveChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `Select`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
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
      fnFunctionValue: (p1: Select$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `Select`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Select$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Select`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Select` itself.
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
      fnFunctionValue: (p1: Select$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Select itself
       */
      oListenerValue?: object
    ): this;
  }
}
