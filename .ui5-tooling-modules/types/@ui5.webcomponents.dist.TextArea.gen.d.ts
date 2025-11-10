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

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TextArea" {
  export interface $TextAreaSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the value of the component.
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether the user can interact with the component or not.
     *
     * **Note:** A disabled component is completely noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     */
    readonly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a short hint intended to aid the user with data entry when the component has no value.
     */
    placeholder?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     *
     * **Note:** If `maxlength` property is set,
     * the component turns into "Critical" state once the characters exceeds the limit.
     * In this case, only the "Negative" state is considered and can be applied.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the number of visible text rows for the component.
     *
     * **Notes:**
     *
     * - If the `growing` property is enabled, this property defines the minimum rows to be displayed
     * in the textarea.
     * - The CSS `height` property wins over the `rows` property, if both are set.
     */
    rows?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the maximum number of characters that the `value` can have.
     */
    maxlength?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the characters exceeding the maximum allowed character count are visible
     * in the component.
     *
     * If set to `false`, the user is not allowed to enter more characters than what is set in the
     * `maxlength` property.
     * If set to `true` the characters exceeding the `maxlength` value are selected on
     * paste and the counter below the component displays their number.
     */
    showExceededText?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Enables the component to automatically grow and shrink dynamically with its content.
     */
    growing?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the maximum number of rows that the component can grow.
     */
    growingMaxRows?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Receives id(or many ids) of the elements that describe the textarea.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

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
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed if the component has
     * `valueState` of type `Information`, `Critical` or `Negative`.
     */
    valueStateText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the textarea.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the text has changed and the focus leaves the component.
     */
    change?: (oEvent: TextArea$ChangeEvent) => void;

    /**
     * Fired when the value of the component changes at each keystroke or when
     * something is pasted.
     */
    input?: (oEvent: TextArea$InputEvent) => void;

    /**
     * Fired when some text has been selected.
     */
    select?: (oEvent: TextArea$SelectEvent) => void;

    /**
     * Fired when textarea is scrolled.
     */
    scroll?: (oEvent: TextArea$ScrollEvent) => void;
  }
  export interface TextArea$ChangeEventParameters {}

  export type TextArea$ChangeEvent = Event<
    TextArea$ChangeEventParameters,
    TextArea
  >;
  export interface TextArea$InputEventParameters {
    /**
     * Indicates whether the Escape key was pressed, which triggers a revert to the previous value
     */
    escapePressed?: boolean;
  }

  export type TextArea$InputEvent = Event<
    TextArea$InputEventParameters,
    TextArea
  >;
  export interface TextArea$SelectEventParameters {}

  export type TextArea$SelectEvent = Event<
    TextArea$SelectEventParameters,
    TextArea
  >;
  export interface TextArea$ScrollEventParameters {}

  export type TextArea$ScrollEvent = Event<
    TextArea$ScrollEventParameters,
    TextArea
  >;

  export default class TextArea extends WebComponent implements IFormContent {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TextAreaSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TextAreaSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TextArea" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TextArea>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TextArea".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines the value of the component.
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the value of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Indicates whether the user can interact with the component or not.
     *
     * **Note:** A disabled component is completely noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Indicates whether the user can interact with the component or not.
     *
     * **Note:** A disabled component is completely noninteractive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

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
     * Gets current value of property {@link #getPlaceholder placeholder}.
     * Defines a short hint intended to aid the user with data entry when the component has no value.
     * @returns The content of the property
     */
    getPlaceholder(): string;

    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     * Defines a short hint intended to aid the user with data entry when the component has no value.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlaceholder(placeholderValue: string | null): this;

    /**
     * Gets current value of property {@link #getValueState valueState}.
     * Defines the value state of the component.
     *
     * **Note:** If `maxlength` property is set,
     * the component turns into "Critical" state once the characters exceeds the limit.
     * In this case, only the "Negative" state is considered and can be applied.
     * Default value is `None`.
     * @returns The content of the property
     */
    getValueState(): ValueState | keyof typeof ValueState;

    /**
     * Sets a new value for property {@link #getValueState valueState}.
     * Defines the value state of the component.
     *
     * **Note:** If `maxlength` property is set,
     * the component turns into "Critical" state once the characters exceeds the limit.
     * In this case, only the "Negative" state is considered and can be applied.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueState(
      valueStateValue?: ValueState | keyof typeof ValueState | null
    ): this;

    /**
     * Gets current value of property {@link #getRows rows}.
     * Defines the number of visible text rows for the component.
     *
     * **Notes:**
     *
     * - If the `growing` property is enabled, this property defines the minimum rows to be displayed
     * in the textarea.
     * - The CSS `height` property wins over the `rows` property, if both are set.
     * Default value is `0`.
     * @returns The content of the property
     */
    getRows(): float;

    /**
     * Sets a new value for property {@link #getRows rows}.
     * Defines the number of visible text rows for the component.
     *
     * **Notes:**
     *
     * - If the `growing` property is enabled, this property defines the minimum rows to be displayed
     * in the textarea.
     * - The CSS `height` property wins over the `rows` property, if both are set.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRows(rowsValue?: float | null): this;

    /**
     * Gets current value of property {@link #getMaxlength maxlength}.
     * Defines the maximum number of characters that the `value` can have.
     * @returns The content of the property
     */
    getMaxlength(): float;

    /**
     * Sets a new value for property {@link #getMaxlength maxlength}.
     * Defines the maximum number of characters that the `value` can have.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxlength(maxlengthValue: float | null): this;

    /**
     * Gets current value of property {@link #getShowExceededText showExceededText}.
     * Determines whether the characters exceeding the maximum allowed character count are visible
     * in the component.
     *
     * If set to `false`, the user is not allowed to enter more characters than what is set in the
     * `maxlength` property.
     * If set to `true` the characters exceeding the `maxlength` value are selected on
     * paste and the counter below the component displays their number.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowExceededText(): boolean;

    /**
     * Sets a new value for property {@link #getShowExceededText showExceededText}.
     * Determines whether the characters exceeding the maximum allowed character count are visible
     * in the component.
     *
     * If set to `false`, the user is not allowed to enter more characters than what is set in the
     * `maxlength` property.
     * If set to `true` the characters exceeding the `maxlength` value are selected on
     * paste and the counter below the component displays their number.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowExceededText(showExceededTextValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getGrowing growing}.
     * Enables the component to automatically grow and shrink dynamically with its content.
     * Default value is `false`.
     * @returns The content of the property
     */
    getGrowing(): boolean;

    /**
     * Sets a new value for property {@link #getGrowing growing}.
     * Enables the component to automatically grow and shrink dynamically with its content.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrowing(growingValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getGrowingMaxRows growingMaxRows}.
     * Defines the maximum number of rows that the component can grow.
     * Default value is `0`.
     * @returns The content of the property
     */
    getGrowingMaxRows(): float;

    /**
     * Sets a new value for property {@link #getGrowingMaxRows growingMaxRows}.
     * Defines the maximum number of rows that the component can grow.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrowingMaxRows(growingMaxRowsValue?: float | null): this;

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
     * Receives id(or many ids) of the elements that describe the textarea.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Receives id(or many ids) of the elements that describe the textarea.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
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
     * Gets current value of property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed if the component has
     * `valueState` of type `Information`, `Critical` or `Negative`.
     * @returns The content of the property
     */
    getValueStateText(): string;

    /**
     * Sets a new value for property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed if the component has
     * `valueState` of type `Information`, `Critical` or `Negative`.
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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `TextArea`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
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
      fnFunctionValue: (p1: TextArea$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getInput input} event of this `TextArea`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
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
      fnFunctionValue: (p1: TextArea$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelect select} event of this `TextArea`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$SelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelect select} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$SelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelect select} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$SelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getScroll scroll} event of this `TextArea`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachScroll(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$ScrollEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getScroll scroll} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachScroll(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$ScrollEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getScroll scroll} event of this `TextArea`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TextArea` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachScroll(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TextArea$ScrollEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TextArea itself
       */
      oListenerValue?: object
    ): this;
  }
}
