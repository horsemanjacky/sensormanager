// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { LinkAccessibilityAttributes } from "@ui5/webcomponents/dist/Link";

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

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type {
  LinkDesign,
  InteractiveAreaSize,
  WrappingType,
  LinkAccessibleRole
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Link" {
  export interface $LinkSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the component is disabled.
     *
     * **Note:** When disabled, the click event cannot be triggered by the user.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component href.
     *
     * **Note:** Standard hyperlink behavior is supported.
     */
    href?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component target.
     *
     * **Notes:**
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **This property must only be used when the `href` property is set.**
     */
    target?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component design.
     *
     * **Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.
     */
    design?:
      | LinkDesign
      | keyof typeof LinkDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the target area size of the link:
     * - **InteractiveAreaSize.Normal**: The default target area size.
     * - **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height.
     *
     * **Note:**The property is designed to make links easier to activate and helps meet the WCAG 2.2 Target Size requirement. It is applicable only for the SAP Horizon themes.
     * **Note:**To improve <code>ui5-link</code>'s reliability and usability, it is recommended to use the <code>InteractiveAreaSize.Large</code> value in scenarios where the <code>ui5-link</code> component is placed inside another interactive component, such as a list item or a table cell.
     * Setting the <code>interactiveAreaSize</code> property to <code>InteractiveAreaSize.Large</code> increases the <code>ui5-link</code>'s invisible touch area. As a result, the user's intended one-time selection command is more likely to activate the desired <code>ui5-link</code>, with minimal chance of unintentionally activating the underlying component.
     */
    interactiveAreaSize?:
      | InteractiveAreaSize
      | keyof typeof InteractiveAreaSize
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** By default the text will wrap. If "None" is set - the text will truncate.
     */
    wrappingType?:
      | WrappingType
      | keyof typeof WrappingType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the ARIA role of the component.
     *
     * **Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.
     */
    accessibleRole?:
      | LinkAccessibleRole
      | keyof typeof LinkAccessibleRole
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`.
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     */
    accessibilityAttributes?:
      | LinkAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon, displayed as graphical element within the component before the link's text.
     * The SAP-icons font provides numerous options.
     *
     * **Note:** Usage of icon-only link is not supported, the link must always have a text.
     *
     * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
     *
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon, displayed as graphical element within the component after the link's text.
     * The SAP-icons font provides numerous options.
     *
     * **Note:** Usage of icon-only link is not supported, the link must always have a text.
     *
     * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
     *
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    endIcon?: string | PropertyBindingInfo | `{${string}}`;

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
     * Aggregations
     */

    /**
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the input
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the component is triggered either with a mouse/tap
     * or by using the Enter key.
     */
    click?: (oEvent: Link$ClickEvent) => void;
  }
  export interface Link$ClickEventParameters {
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

  export type Link$ClickEvent = Event<Link$ClickEventParameters, Link>;

  export default class Link extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $LinkSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $LinkSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Link" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Link>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Link".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** When disabled, the click event cannot be triggered by the user.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** When disabled, the click event cannot be triggered by the user.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHref href}.
     * Defines the component href.
     *
     * **Note:** Standard hyperlink behavior is supported.
     * @returns The content of the property
     */
    getHref(): string;

    /**
     * Sets a new value for property {@link #getHref href}.
     * Defines the component href.
     *
     * **Note:** Standard hyperlink behavior is supported.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHref(hrefValue: string | null): this;

    /**
     * Gets current value of property {@link #getTarget target}.
     * Defines the component target.
     *
     * **Notes:**
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **This property must only be used when the `href` property is set.**
     * @returns The content of the property
     */
    getTarget(): string;

    /**
     * Sets a new value for property {@link #getTarget target}.
     * Defines the component target.
     *
     * **Notes:**
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **This property must only be used when the `href` property is set.**
     * @returns Reference to `this` in order to allow method chaining
     */
    setTarget(targetValue: string | null): this;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component design.
     *
     * **Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getDesign(): LinkDesign | keyof typeof LinkDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component design.
     *
     * **Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(designValue?: LinkDesign | keyof typeof LinkDesign | null): this;

    /**
     * Gets current value of property {@link #getInteractiveAreaSize interactiveAreaSize}.
     * Defines the target area size of the link:
     * - **InteractiveAreaSize.Normal**: The default target area size.
     * - **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height.
     *
     * **Note:**The property is designed to make links easier to activate and helps meet the WCAG 2.2 Target Size requirement. It is applicable only for the SAP Horizon themes.
     * **Note:**To improve <code>ui5-link</code>'s reliability and usability, it is recommended to use the <code>InteractiveAreaSize.Large</code> value in scenarios where the <code>ui5-link</code> component is placed inside another interactive component, such as a list item or a table cell.
     * Setting the <code>interactiveAreaSize</code> property to <code>InteractiveAreaSize.Large</code> increases the <code>ui5-link</code>'s invisible touch area. As a result, the user's intended one-time selection command is more likely to activate the desired <code>ui5-link</code>, with minimal chance of unintentionally activating the underlying component.
     * Default value is `Normal`.
     * @returns The content of the property
     */
    getInteractiveAreaSize():
      | InteractiveAreaSize
      | keyof typeof InteractiveAreaSize;

    /**
     * Sets a new value for property {@link #getInteractiveAreaSize interactiveAreaSize}.
     * Defines the target area size of the link:
     * - **InteractiveAreaSize.Normal**: The default target area size.
     * - **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height.
     *
     * **Note:**The property is designed to make links easier to activate and helps meet the WCAG 2.2 Target Size requirement. It is applicable only for the SAP Horizon themes.
     * **Note:**To improve <code>ui5-link</code>'s reliability and usability, it is recommended to use the <code>InteractiveAreaSize.Large</code> value in scenarios where the <code>ui5-link</code> component is placed inside another interactive component, such as a list item or a table cell.
     * Setting the <code>interactiveAreaSize</code> property to <code>InteractiveAreaSize.Large</code> increases the <code>ui5-link</code>'s invisible touch area. As a result, the user's intended one-time selection command is more likely to activate the desired <code>ui5-link</code>, with minimal chance of unintentionally activating the underlying component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Normal`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractiveAreaSize(
      interactiveAreaSizeValue?:
        | InteractiveAreaSize
        | keyof typeof InteractiveAreaSize
        | null
    ): this;

    /**
     * Gets current value of property {@link #getWrappingType wrappingType}.
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** By default the text will wrap. If "None" is set - the text will truncate.
     * Default value is `Normal`.
     * @returns The content of the property
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;

    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** By default the text will wrap. If "None" is set - the text will truncate.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Normal`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      wrappingTypeValue?: WrappingType | keyof typeof WrappingType | null
    ): this;

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
     * Gets current value of property {@link #getAccessibleRole accessibleRole}.
     * Defines the ARIA role of the component.
     *
     * **Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.
     * Default value is `Link`.
     * @returns The content of the property
     */
    getAccessibleRole(): LinkAccessibleRole | keyof typeof LinkAccessibleRole;

    /**
     * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
     * Defines the ARIA role of the component.
     *
     * **Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Link`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleRole(
      accessibleRoleValue?:
        | LinkAccessibleRole
        | keyof typeof LinkAccessibleRole
        | null
    ): this;

    /**
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`.
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): LinkAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
     * Accepts the following string values: `true` or `false`.
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: LinkAccessibilityAttributes | null
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
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon, displayed as graphical element within the component before the link's text.
     * The SAP-icons font provides numerous options.
     *
     * **Note:** Usage of icon-only link is not supported, the link must always have a text.
     *
     * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
     *
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon, displayed as graphical element within the component before the link's text.
     * The SAP-icons font provides numerous options.
     *
     * **Note:** Usage of icon-only link is not supported, the link must always have a text.
     *
     * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
     *
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getEndIcon endIcon}.
     * Defines the icon, displayed as graphical element within the component after the link's text.
     * The SAP-icons font provides numerous options.
     *
     * **Note:** Usage of icon-only link is not supported, the link must always have a text.
     *
     * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
     *
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getEndIcon(): string;

    /**
     * Sets a new value for property {@link #getEndIcon endIcon}.
     * Defines the icon, displayed as graphical element within the component after the link's text.
     * The SAP-icons font provides numerous options.
     *
     * **Note:** Usage of icon-only link is not supported, the link must always have a text.
     *
     * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
     *
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setEndIcon(endIconValue: string | null): this;

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
     * Gets content of aggregation {@link #getContent content}.
     * Defines the text of the component.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     * @returns The content of the aggregation
     */
    getContent(): Array<Control> | Control;

    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(contentValue: Array<Control> | Control): this;

    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertContent(
      contentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a content from the aggregation {@link #getContent content}.
     * @returns The removed content or `null`
     */
    removeContent(
      contentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getContent content} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(contentValue: Array<Control> | Control): int;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `Link`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Link$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Link itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Link`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Link` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Link$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Link itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Link`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Link` itself.
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
      fnFunctionValue: (p1: Link$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Link itself
       */
      oListenerValue?: object
    ): this;
  }
}
