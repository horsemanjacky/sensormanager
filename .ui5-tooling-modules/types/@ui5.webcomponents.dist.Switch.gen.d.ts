// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IFormContent, CSSSize, ID } from "sap/ui/core/library";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type { SwitchDesign } from "@ui5/webcomponents";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Switch" {
  export interface $SwitchSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the component design.
     *
     * **Note:** If `Graphical` type is set,
     * positive and negative icons will replace the `textOn` and `textOff`.
     */
    design?:
      | SwitchDesign
      | keyof typeof SwitchDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the component is checked.
     *
     * **Note:** The property can be changed with user interaction,
     * either by cliking the component, or by pressing the `Enter` or `Space` key.
     */
    checked?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text, displayed when the component is checked.
     *
     * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
     */
    textOn?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text, displayed when the component is not checked.
     *
     * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
     */
    textOff?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the accessible ARIA name of the component.
     *
     * **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.
     * Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the form value of the component.
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
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the component.
     *
     * **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.
     * Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the component checked state changes.
     */
    change?: (oEvent: Switch$ChangeEvent) => void;
  }
  export interface Switch$ChangeEventParameters {}

  export type Switch$ChangeEvent = Event<Switch$ChangeEventParameters, Switch>;

  export default class Switch extends WebComponent implements IFormContent {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SwitchSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SwitchSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Switch" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Switch>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Switch".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component design.
     *
     * **Note:** If `Graphical` type is set,
     * positive and negative icons will replace the `textOn` and `textOff`.
     * Default value is `Textual`.
     * @returns The content of the property
     */
    getDesign(): SwitchDesign | keyof typeof SwitchDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component design.
     *
     * **Note:** If `Graphical` type is set,
     * positive and negative icons will replace the `textOn` and `textOff`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Textual`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: SwitchDesign | keyof typeof SwitchDesign | null
    ): this;

    /**
     * Gets current value of property {@link #getChecked checked}.
     * Defines if the component is checked.
     *
     * **Note:** The property can be changed with user interaction,
     * either by cliking the component, or by pressing the `Enter` or `Space` key.
     * Default value is `false`.
     * @returns The content of the property
     */
    getChecked(): boolean;

    /**
     * Sets a new value for property {@link #getChecked checked}.
     * Defines if the component is checked.
     *
     * **Note:** The property can be changed with user interaction,
     * either by cliking the component, or by pressing the `Enter` or `Space` key.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setChecked(checkedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is noninteractive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getTextOn textOn}.
     * Defines the text, displayed when the component is checked.
     *
     * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
     * @returns The content of the property
     */
    getTextOn(): string;

    /**
     * Sets a new value for property {@link #getTextOn textOn}.
     * Defines the text, displayed when the component is checked.
     *
     * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
     * @returns Reference to `this` in order to allow method chaining
     */
    setTextOn(textOnValue: string | null): this;

    /**
     * Gets current value of property {@link #getTextOff textOff}.
     * Defines the text, displayed when the component is not checked.
     *
     * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
     * @returns The content of the property
     */
    getTextOff(): string;

    /**
     * Sets a new value for property {@link #getTextOff textOff}.
     * Defines the text, displayed when the component is not checked.
     *
     * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
     * @returns Reference to `this` in order to allow method chaining
     */
    setTextOff(textOffValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Sets the accessible ARIA name of the component.
     *
     * **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.
     * Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Sets the accessible ARIA name of the component.
     *
     * **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.
     * Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

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
     * Defines the form value of the component.
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the form value of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `Switch`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Switch$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Switch itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `Switch`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Switch` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Switch$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Switch itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `Switch`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Switch` itself.
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
      fnFunctionValue: (p1: Switch$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Switch itself
       */
      oListenerValue?: object
    ): this;
  }
}
