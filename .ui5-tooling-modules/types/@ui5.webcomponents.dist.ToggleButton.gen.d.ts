// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { ButtonAccessibilityAttributes } from "@ui5/webcomponents/dist/Button";

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type {
  default as Button,
  $ButtonSettings
} from "@ui5/webcomponents/dist/Button";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type {
  ButtonDesign,
  ButtonType,
  ButtonAccessibleRole
} from "@ui5/webcomponents";

import type { ID } from "sap/ui/core/library";

import type { default as ButtonBadge } from "@ui5/webcomponents/dist/ButtonBadge";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ToggleButton" {
  export interface $ToggleButtonSettings extends $ButtonSettings {
    /**
     * Properties
     */

    /**
     * Determines whether the component is displayed as pressed.
     */
    pressed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component design.
     */
    design?:
      | ButtonDesign
      | keyof typeof ButtonDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component is disabled.
     * A disabled component can't be pressed or
     * focused, and it is not in the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon, displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
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
     * When set to `true`, the component will
     * automatically submit the nearest HTML form element on `press`.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.`
     */
    submits?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **ariaLabel**: Defines the accessible ARIA name of the component.
     * Accepts any string value.
     *
     *  - **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     */
    accessibilityAttributes?:
      | ButtonAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the button has special form-related functionality.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    type?:
      | ButtonType
      | keyof typeof ButtonType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Describes the accessibility role of the button.
     *
     * **Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.
     */
    accessibleRole?:
      | ButtonAccessibleRole
      | keyof typeof ButtonAccessibleRole
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the button shows a loading indicator.
     *
     * **Note:** If set to `true`, a busy indicator component will be displayed on the related button.
     */
    loading?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Specifies the delay in milliseconds before the loading indicator appears within the associated button.
     */
    loadingDelay?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Adds a badge to the button.
     */
    badge?:
      | Array<ButtonBadge>
      | ButtonBadge
      | AggregationBindingInfo
      | `{${string}}`;

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
     * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
     *
     * **Note:** The event will not be fired if the `disabled` property is set to `true`.
     */
    click?: (oEvent: ToggleButton$ClickEvent) => void;
  }
  export interface ToggleButton$ClickEventParameters {
    /**
     * Returns original event that comes from user's **click** interaction
     */
    originalEvent?: Event;

    /**
     * Returns whether the "ALT" key was pressed when the event was triggered.
     */
    altKey?: boolean;

    /**
     * Returns whether the "CTRL" key was pressed when the event was triggered.
     */
    ctrlKey?: boolean;

    /**
     * Returns whether the "META" key was pressed when the event was triggered.
     */
    metaKey?: boolean;

    /**
     * Returns whether the "SHIFT" key was pressed when the event was triggered.
     */
    shiftKey?: boolean;
  }

  export type ToggleButton$ClickEvent = Event<
    ToggleButton$ClickEventParameters,
    ToggleButton
  >;

  export default class ToggleButton extends Button {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToggleButtonSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToggleButtonSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ToggleButton" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ToggleButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ToggleButton".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getPressed pressed}.
     * Determines whether the component is displayed as pressed.
     * Default value is `false`.
     * @returns The content of the property
     */
    getPressed(): boolean;

    /**
     * Sets a new value for property {@link #getPressed pressed}.
     * Determines whether the component is displayed as pressed.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPressed(pressedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component design.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getDesign(): ButtonDesign | keyof typeof ButtonDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: ButtonDesign | keyof typeof ButtonDesign | null
    ): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     * A disabled component can't be pressed or
     * focused, and it is not in the tab chain.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     * A disabled component can't be pressed or
     * focused, and it is not in the tab chain.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon, displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon, displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
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
     * Gets current value of property {@link #getSubmits submits}.
     * When set to `true`, the component will
     * automatically submit the nearest HTML form element on `press`.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.`
     * Default value is `false`.
     * @returns The content of the property
     */
    getSubmits(): boolean;

    /**
     * Sets a new value for property {@link #getSubmits submits}.
     * When set to `true`, the component will
     * automatically submit the nearest HTML form element on `press`.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.`
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubmits(submitsValue?: boolean | null): this;

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
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **ariaLabel**: Defines the accessible ARIA name of the component.
     * Accepts any string value.
     *
     *  - **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): ButtonAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     *
     * - **ariaLabel**: Defines the accessible ARIA name of the component.
     * Accepts any string value.
     *
     *  - **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.
     *
     * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
     * Accepts a lowercase string value.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: ButtonAccessibilityAttributes | null
    ): this;

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
     * Gets current value of property {@link #getType type}.
     * Defines whether the button has special form-related functionality.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * Default value is `Button`.
     * @returns The content of the property
     */
    getType(): ButtonType | keyof typeof ButtonType;

    /**
     * Sets a new value for property {@link #getType type}.
     * Defines whether the button has special form-related functionality.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Button`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(typeValue?: ButtonType | keyof typeof ButtonType | null): this;

    /**
     * Gets current value of property {@link #getAccessibleRole accessibleRole}.
     * Describes the accessibility role of the button.
     *
     * **Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.
     * Default value is `Button`.
     * @returns The content of the property
     */
    getAccessibleRole():
      | ButtonAccessibleRole
      | keyof typeof ButtonAccessibleRole;

    /**
     * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
     * Describes the accessibility role of the button.
     *
     * **Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Button`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleRole(
      accessibleRoleValue?:
        | ButtonAccessibleRole
        | keyof typeof ButtonAccessibleRole
        | null
    ): this;

    /**
     * Gets current value of property {@link #getLoading loading}.
     * Defines whether the button shows a loading indicator.
     *
     * **Note:** If set to `true`, a busy indicator component will be displayed on the related button.
     * Default value is `false`.
     * @returns The content of the property
     */
    getLoading(): boolean;

    /**
     * Sets a new value for property {@link #getLoading loading}.
     * Defines whether the button shows a loading indicator.
     *
     * **Note:** If set to `true`, a busy indicator component will be displayed on the related button.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoading(loadingValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getLoadingDelay loadingDelay}.
     * Specifies the delay in milliseconds before the loading indicator appears within the associated button.
     * Default value is `1000`.
     * @returns The content of the property
     */
    getLoadingDelay(): float;

    /**
     * Sets a new value for property {@link #getLoadingDelay loadingDelay}.
     * Specifies the delay in milliseconds before the loading indicator appears within the associated button.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoadingDelay(loadingDelayValue?: float | null): this;

    /**
     * Gets content of aggregation {@link #getBadge badge}.
     * Adds a badge to the button.
     * @returns The content of the aggregation
     */
    getBadge(): Array<ButtonBadge> | ButtonBadge;

    /**
     * Destroys the badge in the aggregation {@link #getBadge badge}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBadge(): this;

    /**
     * Adds some badge to the aggregation {@link #getBadge badge}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addBadge(badgeValue: Array<ButtonBadge> | ButtonBadge): this;

    /**
     * Inserts a badge into the aggregation {@link #getBadge badge}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertBadge(
      badgeValue: Array<ButtonBadge> | ButtonBadge,

      indexValue: int
    ): this;

    /**
     * Removes a badge from the aggregation {@link #getBadge badge}.
     * @returns The removed badge or `null`
     */
    removeBadge(
      badgeValue: Array<ButtonBadge> | ButtonBadge | int | ID
    ): Array<ButtonBadge> | ButtonBadge | null;

    /**
     * Removes all the controls from the aggregation {@link #getBadge badge}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBadge(): Array<ButtonBadge> | ButtonBadge;

    /**
     * Checks for the provided 'ButtonBadge' in the aggregation {@link #getBadge badge} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBadge(badgeValue: Array<ButtonBadge> | ButtonBadge): int;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `ToggleButton`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToggleButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToggleButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `ToggleButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToggleButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ToggleButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToggleButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `ToggleButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ToggleButton` itself.
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
      fnFunctionValue: (p1: ToggleButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ToggleButton itself
       */
      oListenerValue?: object
    ): this;
  }
}
