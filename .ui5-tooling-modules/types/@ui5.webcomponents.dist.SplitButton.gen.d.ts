// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { SplitButtonAccessibilityAttributes } from "@ui5/webcomponents/dist/SplitButton";

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

import type { ButtonDesign } from "@ui5/webcomponents";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/SplitButton" {
  export interface $SplitButtonSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     *
     * See all available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the arrow button should have the active state styles or not.
     */
    activeArrowButton?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The `accessibilityAttributes` property accepts an object with the following optional fields:
     *
     * - **root**: Attributes that will be applied to the main (text) button.
     *   - **hasPopup**: Indicates the presence and type of popup triggered by the button.
     *     Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
     *   - **roleDescription**: Provides a human-readable description for the role of the button.
     *     Accepts any string value.
     *   - **title**: Specifies a tooltip or description for screen readers.
     *     Accepts any string value.
     * 	- **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.
     *
     * - **arrowButton**: Attributes applied specifically to the arrow (split) button.
     *   - **hasPopup**: Indicates the presence and type of popup triggered by the arrow button.
     *     Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
     *   - **expanded**: Indicates whether the popup triggered by the arrow button is currently expanded.
     *     Accepts boolean values: `true` or `false`.
     */
    accessibilityAttributes?:
      | SplitButtonAccessibilityAttributes
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

    /**
     * Events
     */

    /**
     * Fired when the user clicks on the default action.
     */
    click?: (oEvent: SplitButton$ClickEvent) => void;

    /**
     * Fired when the user clicks on the arrow action.
     */
    arrowClick?: (oEvent: SplitButton$ArrowClickEvent) => void;
  }
  export interface SplitButton$ClickEventParameters {}

  export type SplitButton$ClickEvent = Event<
    SplitButton$ClickEventParameters,
    SplitButton
  >;
  export interface SplitButton$ArrowClickEventParameters {}

  export type SplitButton$ArrowClickEvent = Event<
    SplitButton$ArrowClickEventParameters,
    SplitButton
  >;

  export default class SplitButton extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SplitButtonSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SplitButtonSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/SplitButton" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, SplitButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/SplitButton".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     *
     * See all available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     *
     * See all available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getActiveArrowButton activeArrowButton}.
     * Defines whether the arrow button should have the active state styles or not.
     * Default value is `false`.
     * @returns The content of the property
     */
    getActiveArrowButton(): boolean;

    /**
     * Sets a new value for property {@link #getActiveArrowButton activeArrowButton}.
     * Defines whether the arrow button should have the active state styles or not.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setActiveArrowButton(activeArrowButtonValue?: boolean | null): this;

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
     * The `accessibilityAttributes` property accepts an object with the following optional fields:
     *
     * - **root**: Attributes that will be applied to the main (text) button.
     *   - **hasPopup**: Indicates the presence and type of popup triggered by the button.
     *     Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
     *   - **roleDescription**: Provides a human-readable description for the role of the button.
     *     Accepts any string value.
     *   - **title**: Specifies a tooltip or description for screen readers.
     *     Accepts any string value.
     * 	- **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.
     *
     * - **arrowButton**: Attributes applied specifically to the arrow (split) button.
     *   - **hasPopup**: Indicates the presence and type of popup triggered by the arrow button.
     *     Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
     *   - **expanded**: Indicates whether the popup triggered by the arrow button is currently expanded.
     *     Accepts boolean values: `true` or `false`.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): SplitButtonAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The `accessibilityAttributes` property accepts an object with the following optional fields:
     *
     * - **root**: Attributes that will be applied to the main (text) button.
     *   - **hasPopup**: Indicates the presence and type of popup triggered by the button.
     *     Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
     *   - **roleDescription**: Provides a human-readable description for the role of the button.
     *     Accepts any string value.
     *   - **title**: Specifies a tooltip or description for screen readers.
     *     Accepts any string value.
     * 	- **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.
     *
     * - **arrowButton**: Attributes applied specifically to the arrow (split) button.
     *   - **hasPopup**: Indicates the presence and type of popup triggered by the arrow button.
     *     Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
     *   - **expanded**: Indicates whether the popup triggered by the arrow button is currently expanded.
     *     Accepts boolean values: `true` or `false`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: SplitButtonAccessibilityAttributes | null
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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `SplitButton`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SplitButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SplitButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `SplitButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SplitButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SplitButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SplitButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `SplitButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SplitButton` itself.
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
      fnFunctionValue: (p1: SplitButton$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SplitButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getArrowClick arrowClick} event of this `SplitButton`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachArrowClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SplitButton$ArrowClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SplitButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getArrowClick arrowClick} event of this `SplitButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SplitButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachArrowClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SplitButton$ArrowClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SplitButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getArrowClick arrowClick} event of this `SplitButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SplitButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachArrowClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SplitButton$ArrowClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SplitButton itself
       */
      oListenerValue?: object
    ): this;
  }
}
