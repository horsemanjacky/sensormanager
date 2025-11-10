// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { ToolbarButtonAccessibilityAttributes } from "@ui5/webcomponents/dist/ToolbarButton";

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

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type {
  ButtonDesign,
  ToolbarItemOverflowBehavior
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ToolbarButton" {
  export interface $ToolbarButtonSettings extends $ToolbarItemSettings {
    /**
     * Properties
     */

    /**
     * Defines if the action is disabled.
     *
     * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the action design.
     */
    design?:
      | ButtonDesign
      | keyof typeof ButtonDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the `icon` source URI.
     *
     * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon, displayed as graphical element within the component after the button text.
     *
     * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
     * Usage of `endIcon` only should be avoided.
     *
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    endIcon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     *
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     */
    accessibilityAttributes?:
      | ToolbarButtonAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Button text
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the width of the button.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     */
    width?: string | PropertyBindingInfo | `{${string}}`;

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
     * Fired when the component is activated either with a
     * mouse/tap or by using the Enter or Space key.
     *
     * **Note:** The event will not be fired if the `disabled`
     * property is set to `true`.
     */
    click?: (oEvent: ToolbarButton$ClickEvent) => void;
  }
  export interface ToolbarButton$ClickEventParameters {}

  export type ToolbarButton$ClickEvent = Event<
    ToolbarButton$ClickEventParameters,
    ToolbarButton
  >;

  export default class ToolbarButton extends ToolbarItem {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarButtonSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarButtonSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ToolbarButton" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ToolbarButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ToolbarButton".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines if the action is disabled.
     *
     * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines if the action is disabled.
     *
     * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the action design.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getDesign(): ButtonDesign | keyof typeof ButtonDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the action design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: ButtonDesign | keyof typeof ButtonDesign | null
    ): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the `icon` source URI.
     *
     * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the `icon` source URI.
     *
     * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getEndIcon endIcon}.
     * Defines the icon, displayed as graphical element within the component after the button text.
     *
     * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
     * Usage of `endIcon` only should be avoided.
     *
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getEndIcon(): string;

    /**
     * Sets a new value for property {@link #getEndIcon endIcon}.
     * Defines the icon, displayed as graphical element within the component after the button text.
     *
     * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
     * Usage of `endIcon` only should be avoided.
     *
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setEndIcon(endIconValue: string | null): this;

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
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     *
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): ToolbarButtonAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     *
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: ToolbarButtonAccessibilityAttributes | null
    ): this;

    /**
     * Gets current value of property {@link #getText text}.
     * Button text
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Button text
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getWidth width}.
     * Defines the width of the button.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     * @returns The content of the property
     */
    getWidth(): string;

    /**
     * Sets a new value for property {@link #getWidth width}.
     * Defines the width of the button.
     *
     * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(widthValue: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `ToolbarButton`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `ToolbarButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `ToolbarButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToolbarButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToolbarButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToolbarButton itself
       */
      oListenerValue?: object
    ): this;
  }
}
