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

import type { WrappingType } from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/CheckBox" {
  export interface $CheckBoxSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is disabled.
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
     * Determines whether the `ui5-checkbox` is in display only state.
     *
     * When set to `true`, the `ui5-checkbox` is not interactive, not editable, not focusable
     * and not in the tab chain. This setting is used for forms in review mode.
     *
     * **Note:** When the property `disabled` is set to `true` this property has no effect.
     */
    displayOnly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is required.
     *
     * **Note:** We advise against using the text property of the checkbox when there is a
     * label associated with it to avoid having two required asterisks.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is displayed as partially checked.
     *
     * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
     * interaction and the resulting visual state depends on the values of the `indeterminate`
     * and `checked` properties:
     *
     * -  If the component is checked and indeterminate, it will be displayed as partially checked
     * -  If the component is checked and it is not indeterminate, it will be displayed as checked
     * -  If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
     */
    indeterminate?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the component is checked.
     *
     * **Note:** The property can be changed with user interaction,
     * either by cliking/tapping on the component, or by
     * pressing the Enter or Space key.
     */
    checked?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component text wraps when there is not enough space.
     *
     * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
     * **Note:** for option "None" the text will be truncated with an ellipsis.
     */
    wrappingType?:
      | WrappingType
      | keyof typeof WrappingType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the form value of the component that is submitted when the checkbox is checked.
     *
     * When a form containing `ui5-checkbox` elements is submitted, only the values of the
     * **checked** checkboxes are included in the form data sent to the server. Unchecked
     * checkboxes do not contribute any data to the form submission.
     *
     * This property is particularly useful for **checkbox groups**, where multiple checkboxes with the same `name` but different `value` properties can be used to represent a set of related options.
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'width' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the component
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the component checked state changes.
     */
    change?: (oEvent: CheckBox$ChangeEvent) => void;
  }
  export interface CheckBox$ChangeEventParameters {}

  export type CheckBox$ChangeEvent = Event<
    CheckBox$ChangeEventParameters,
    CheckBox
  >;

  export default class CheckBox extends WebComponent implements IFormContent {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CheckBoxSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CheckBoxSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/CheckBox" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, CheckBox>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/CheckBox".
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
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is completely noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
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
     * Gets current value of property {@link #getDisplayOnly displayOnly}.
     * Determines whether the `ui5-checkbox` is in display only state.
     *
     * When set to `true`, the `ui5-checkbox` is not interactive, not editable, not focusable
     * and not in the tab chain. This setting is used for forms in review mode.
     *
     * **Note:** When the property `disabled` is set to `true` this property has no effect.
     * Default value is `false`.
     * @returns The content of the property
     */
    getDisplayOnly(): boolean;

    /**
     * Sets a new value for property {@link #getDisplayOnly displayOnly}.
     * Determines whether the `ui5-checkbox` is in display only state.
     *
     * When set to `true`, the `ui5-checkbox` is not interactive, not editable, not focusable
     * and not in the tab chain. This setting is used for forms in review mode.
     *
     * **Note:** When the property `disabled` is set to `true` this property has no effect.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplayOnly(displayOnlyValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getRequired required}.
     * Defines whether the component is required.
     *
     * **Note:** We advise against using the text property of the checkbox when there is a
     * label associated with it to avoid having two required asterisks.
     * Default value is `false`.
     * @returns The content of the property
     */
    getRequired(): boolean;

    /**
     * Sets a new value for property {@link #getRequired required}.
     * Defines whether the component is required.
     *
     * **Note:** We advise against using the text property of the checkbox when there is a
     * label associated with it to avoid having two required asterisks.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(requiredValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getIndeterminate indeterminate}.
     * Defines whether the component is displayed as partially checked.
     *
     * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
     * interaction and the resulting visual state depends on the values of the `indeterminate`
     * and `checked` properties:
     *
     * -  If the component is checked and indeterminate, it will be displayed as partially checked
     * -  If the component is checked and it is not indeterminate, it will be displayed as checked
     * -  If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
     * Default value is `false`.
     * @returns The content of the property
     */
    getIndeterminate(): boolean;

    /**
     * Sets a new value for property {@link #getIndeterminate indeterminate}.
     * Defines whether the component is displayed as partially checked.
     *
     * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
     * interaction and the resulting visual state depends on the values of the `indeterminate`
     * and `checked` properties:
     *
     * -  If the component is checked and indeterminate, it will be displayed as partially checked
     * -  If the component is checked and it is not indeterminate, it will be displayed as checked
     * -  If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setIndeterminate(indeterminateValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getChecked checked}.
     * Defines if the component is checked.
     *
     * **Note:** The property can be changed with user interaction,
     * either by cliking/tapping on the component, or by
     * pressing the Enter or Space key.
     * Default value is `false`.
     * @returns The content of the property
     */
    getChecked(): boolean;

    /**
     * Sets a new value for property {@link #getChecked checked}.
     * Defines if the component is checked.
     *
     * **Note:** The property can be changed with user interaction,
     * either by cliking/tapping on the component, or by
     * pressing the Enter or Space key.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setChecked(checkedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text of the component.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

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
     * Gets current value of property {@link #getWrappingType wrappingType}.
     * Defines whether the component text wraps when there is not enough space.
     *
     * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
     * **Note:** for option "None" the text will be truncated with an ellipsis.
     * Default value is `Normal`.
     * @returns The content of the property
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;

    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     * Defines whether the component text wraps when there is not enough space.
     *
     * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
     * **Note:** for option "None" the text will be truncated with an ellipsis.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Normal`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      wrappingTypeValue?: WrappingType | keyof typeof WrappingType | null
    ): this;

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
     * Gets current value of property {@link #getValue value}.
     * Defines the form value of the component that is submitted when the checkbox is checked.
     *
     * When a form containing `ui5-checkbox` elements is submitted, only the values of the
     * **checked** checkboxes are included in the form data sent to the server. Unchecked
     * checkboxes do not contribute any data to the form submission.
     *
     * This property is particularly useful for **checkbox groups**, where multiple checkboxes with the same `name` but different `value` properties can be used to represent a set of related options.
     * Default value is `on`.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the form value of the component that is submitted when the checkbox is checked.
     *
     * When a form containing `ui5-checkbox` elements is submitted, only the values of the
     * **checked** checkboxes are included in the form data sent to the server. Unchecked
     * checkboxes do not contribute any data to the form submission.
     *
     * This property is particularly useful for **checkbox groups**, where multiple checkboxes with the same `name` but different `value` properties can be used to represent a set of related options.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `on`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `CheckBox`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: CheckBox$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this CheckBox itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `CheckBox`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `CheckBox` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: CheckBox$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this CheckBox itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `CheckBox`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `CheckBox` itself.
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
      fnFunctionValue: (p1: CheckBox$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this CheckBox itself
       */
      oListenerValue?: object
    ): this;
  }
}
