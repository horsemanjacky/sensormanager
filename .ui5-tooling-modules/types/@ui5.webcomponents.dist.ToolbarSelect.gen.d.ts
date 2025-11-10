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
  default as ToolbarItem,
  $ToolbarItemSettings
} from "@ui5/webcomponents/dist/ToolbarItem";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { ValueState, CSSSize, ID } from "sap/ui/core/library";

import type { ToolbarItemOverflowBehavior } from "@ui5/webcomponents";

import type { default as ToolbarSelectOption } from "@ui5/webcomponents/dist/ToolbarSelectOption";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ToolbarSelect" {
  export interface $ToolbarSelectSettings extends $ToolbarItemSettings {
    /**
     * Properties
     */

    /**
     * Defines the width of the select.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     */
    width?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value of the component:
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
     * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
     */
    overflowPriority?:
      | ToolbarItemOverflowBehavior
      | keyof typeof ToolbarItemOverflowBehavior
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the toolbar overflow popup should close upon intereaction with the item.
     * It will close by default.
     */
    preventOverflowClosing?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the component options.
     *
     * **Note:** Only one selected option is allowed.
     * If more than one option is defined as selected, the last one would be considered as the selected one.
     *
     * **Note:** Use the `ui5-toolbar-select-option` component to define the desired options.
     */
    options?:
      | Array<ToolbarSelectOption>
      | ToolbarSelectOption
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the HTML element that will be displayed in the component input part,
     * representing the selected option.
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
    change?: (oEvent: ToolbarSelect$ChangeEvent) => void;

    /**
     * Fired after the component's dropdown menu opens.
     */
    open?: (oEvent: ToolbarSelect$OpenEvent) => void;

    /**
     * Fired after the component's dropdown menu closes.
     */
    close?: (oEvent: ToolbarSelect$CloseEvent) => void;
  }
  export interface ToolbarSelect$ChangeEventParameters {
    /**
     * the selected option.
     */
    selectedOption?: Control;
  }

  export type ToolbarSelect$ChangeEvent = Event<
    ToolbarSelect$ChangeEventParameters,
    ToolbarSelect
  >;
  export interface ToolbarSelect$OpenEventParameters {}

  export type ToolbarSelect$OpenEvent = Event<
    ToolbarSelect$OpenEventParameters,
    ToolbarSelect
  >;
  export interface ToolbarSelect$CloseEventParameters {}

  export type ToolbarSelect$CloseEvent = Event<
    ToolbarSelect$CloseEventParameters,
    ToolbarSelect
  >;

  export default class ToolbarSelect extends ToolbarItem {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarSelectSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarSelectSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ToolbarSelect" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ToolbarSelect>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ToolbarSelect".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getWidth width}.
     * Defines the width of the select.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     * @returns The content of the property
     */
    getWidth(): string;

    /**
     * Sets a new value for property {@link #getWidth width}.
     * Defines the width of the select.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(widthValue: string | null): this;

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
     * Gets current value of property {@link #getValue value}.
     * Defines the value of the component:
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the value of the component:
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getOverflowPriority overflowPriority}.
     * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
     * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getOverflowPriority():
      | ToolbarItemOverflowBehavior
      | keyof typeof ToolbarItemOverflowBehavior;

    /**
     * Sets a new value for property {@link #getOverflowPriority overflowPriority}.
     * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
     * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOverflowPriority(
      overflowPriorityValue?:
        | ToolbarItemOverflowBehavior
        | keyof typeof ToolbarItemOverflowBehavior
        | null
    ): this;

    /**
     * Gets current value of property {@link #getPreventOverflowClosing preventOverflowClosing}.
     * Defines if the toolbar overflow popup should close upon intereaction with the item.
     * It will close by default.
     * Default value is `false`.
     * @returns The content of the property
     */
    getPreventOverflowClosing(): boolean;

    /**
     * Sets a new value for property {@link #getPreventOverflowClosing preventOverflowClosing}.
     * Defines if the toolbar overflow popup should close upon intereaction with the item.
     * It will close by default.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPreventOverflowClosing(
      preventOverflowClosingValue?: boolean | null
    ): this;

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
     * Gets content of aggregation {@link #getOptions options}.
     * Defines the component options.
     *
     * **Note:** Only one selected option is allowed.
     * If more than one option is defined as selected, the last one would be considered as the selected one.
     *
     * **Note:** Use the `ui5-toolbar-select-option` component to define the desired options.
     * @returns The content of the aggregation
     */
    getOptions(): Array<ToolbarSelectOption> | ToolbarSelectOption;

    /**
     * Destroys the options in the aggregation {@link #getOptions options}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyOptions(): this;

    /**
     * Adds some options to the aggregation {@link #getOptions options}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addOption(
      optionValue: Array<ToolbarSelectOption> | ToolbarSelectOption
    ): this;

    /**
     * Inserts an options into the aggregation {@link #getOptions options}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertOption(
      optionValue: Array<ToolbarSelectOption> | ToolbarSelectOption,

      indexValue: int
    ): this;

    /**
     * Removes an options from the aggregation {@link #getOptions options}.
     * @returns The removed options or `null`
     */
    removeOption(
      optionValue: Array<ToolbarSelectOption> | ToolbarSelectOption | int | ID
    ): Array<ToolbarSelectOption> | ToolbarSelectOption | null;

    /**
     * Removes all the controls from the aggregation {@link #getOptions options}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllOptions(): Array<ToolbarSelectOption> | ToolbarSelectOption;

    /**
     * Checks for the provided 'ToolbarSelectOption' in the aggregation {@link #getOptions options} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfOption(
      optionValue: Array<ToolbarSelectOption> | ToolbarSelectOption
    ): int;

    /**
     * Gets content of aggregation {@link #getLabel label}.
     * Defines the HTML element that will be displayed in the component input part,
     * representing the selected option.
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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `ToolbarSelect`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarSelect$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `ToolbarSelect`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarSelect` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarSelect$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `ToolbarSelect`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarSelect` itself.
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
      fnFunctionValue: (p1: ToolbarSelect$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `ToolbarSelect`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarSelect$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `ToolbarSelect`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarSelect` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarSelect$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `ToolbarSelect`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarSelect` itself.
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
      fnFunctionValue: (p1: ToolbarSelect$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `ToolbarSelect`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarSelect$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `ToolbarSelect`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarSelect` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarSelect$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `ToolbarSelect`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarSelect` itself.
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
      fnFunctionValue: (p1: ToolbarSelect$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarSelect itself
       */
      oListenerValue?: object
    ): this;
  }
}
