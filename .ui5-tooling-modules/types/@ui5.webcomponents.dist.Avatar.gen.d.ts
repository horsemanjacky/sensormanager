// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { AvatarAccessibilityAttributes } from "@ui5/webcomponents/dist/Avatar";

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type {
  IAvatarGroupItem,
  AvatarShape,
  AvatarSize,
  AvatarColorScheme
} from "@ui5/webcomponents";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Avatar" {
  export interface $AvatarSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the component is disabled.
     * A disabled component can't be pressed or
     * focused, and it is not in the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the avatar is interactive (focusable and pressable).
     *
     * **Note:** This property won't have effect if the `disabled`
     * property is set to `true`.
     */
    interactive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the name of the UI5 Icon, that will be displayed.
     *
     * **Note:** If `image` slot is provided, the property will be ignored.
     *
     * **Note:** You should import the desired icon first, then use its name as "icon".
     *
     * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
     *
     * `<ui5-avatar icon="employee">`
     *
     * **Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the name of the fallback icon, which should be displayed in the following cases:
     *
     * 	- If the initials are not valid (more than 3 letters, unsupported languages or empty initials).
     * 	- If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).
     * 	- If the image src is wrong.
     *
     * **Note:** If not set, a default fallback icon "employee" is displayed.
     *
     * **Note:** You should import the desired icon first, then use its name as "fallback-icon".
     *
     * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
     *
     * `<ui5-avatar fallback-icon="alert">`
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    fallbackIcon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the displayed initials.
     *
     * Up to three Latin letters can be displayed as initials.
     */
    initials?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the shape of the component.
     */
    shape?:
      | AvatarShape
      | keyof typeof AvatarShape
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines predefined size of the component.
     */
    size?:
      | AvatarSize
      | keyof typeof AvatarSize
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the background color of the desired image.
     * If `colorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color.
     */
    colorScheme?:
      | AvatarColorScheme
      | keyof typeof AvatarColorScheme
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text alternative of the component.
     * If not provided a default text alternative will be set, if present.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following field is supported:
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     */
    accessibilityAttributes?:
      | AvatarAccessibilityAttributes
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
     * Aggregations
     */

    /**
     * Receives the desired `<img>` tag
     *
     * **Note:** If you experience flickering of the provided image, you can hide the component until it is defined with the following CSS:<br/>
     * `ui5-avatar:not(:defined) {`<br/>
     * &nbsp;&nbsp;&nbsp;&nbsp;`visibility: hidden;`<br/>
     * `}`
     */
    image?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the optional badge that will be used for visual affordance.
     *
     * **Note:** While the slot allows for custom badges, to achieve
     * the Fiori design, you can use the `ui5-tag` with `ui5-icon`
     * in the corresponding `icon` slot, without text nodes.
     */
    badge?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired on mouseup, space and enter if avatar is interactive
     *
     * **Note:** The event will not be fired if the `disabled`
     * property is set to `true`.
     */
    click?: (oEvent: Avatar$ClickEvent) => void;
  }
  export interface Avatar$ClickEventParameters {}

  export type Avatar$ClickEvent = Event<Avatar$ClickEventParameters, Avatar>;

  export default class Avatar extends WebComponent implements IAvatarGroupItem {
    __implements__ui5_webcomponents_IAvatarGroupItem: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Avatar" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Avatar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Avatar".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Gets current value of property {@link #getInteractive interactive}.
     * Defines if the avatar is interactive (focusable and pressable).
     *
     * **Note:** This property won't have effect if the `disabled`
     * property is set to `true`.
     * Default value is `false`.
     * @returns The content of the property
     */
    getInteractive(): boolean;

    /**
     * Sets a new value for property {@link #getInteractive interactive}.
     * Defines if the avatar is interactive (focusable and pressable).
     *
     * **Note:** This property won't have effect if the `disabled`
     * property is set to `true`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractive(interactiveValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the name of the UI5 Icon, that will be displayed.
     *
     * **Note:** If `image` slot is provided, the property will be ignored.
     *
     * **Note:** You should import the desired icon first, then use its name as "icon".
     *
     * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
     *
     * `<ui5-avatar icon="employee">`
     *
     * **Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the name of the UI5 Icon, that will be displayed.
     *
     * **Note:** If `image` slot is provided, the property will be ignored.
     *
     * **Note:** You should import the desired icon first, then use its name as "icon".
     *
     * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
     *
     * `<ui5-avatar icon="employee">`
     *
     * **Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getFallbackIcon fallbackIcon}.
     * Defines the name of the fallback icon, which should be displayed in the following cases:
     *
     * 	- If the initials are not valid (more than 3 letters, unsupported languages or empty initials).
     * 	- If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).
     * 	- If the image src is wrong.
     *
     * **Note:** If not set, a default fallback icon "employee" is displayed.
     *
     * **Note:** You should import the desired icon first, then use its name as "fallback-icon".
     *
     * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
     *
     * `<ui5-avatar fallback-icon="alert">`
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * Default value is `employee`.
     * @returns The content of the property
     */
    getFallbackIcon(): string;

    /**
     * Sets a new value for property {@link #getFallbackIcon fallbackIcon}.
     * Defines the name of the fallback icon, which should be displayed in the following cases:
     *
     * 	- If the initials are not valid (more than 3 letters, unsupported languages or empty initials).
     * 	- If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).
     * 	- If the image src is wrong.
     *
     * **Note:** If not set, a default fallback icon "employee" is displayed.
     *
     * **Note:** You should import the desired icon first, then use its name as "fallback-icon".
     *
     * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
     *
     * `<ui5-avatar fallback-icon="alert">`
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `employee`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setFallbackIcon(fallbackIconValue?: string | null): this;

    /**
     * Gets current value of property {@link #getInitials initials}.
     * Defines the displayed initials.
     *
     * Up to three Latin letters can be displayed as initials.
     * @returns The content of the property
     */
    getInitials(): string;

    /**
     * Sets a new value for property {@link #getInitials initials}.
     * Defines the displayed initials.
     *
     * Up to three Latin letters can be displayed as initials.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInitials(initialsValue: string | null): this;

    /**
     * Gets current value of property {@link #getShape shape}.
     * Defines the shape of the component.
     * Default value is `Circle`.
     * @returns The content of the property
     */
    getShape(): AvatarShape | keyof typeof AvatarShape;

    /**
     * Sets a new value for property {@link #getShape shape}.
     * Defines the shape of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Circle`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShape(shapeValue?: AvatarShape | keyof typeof AvatarShape | null): this;

    /**
     * Gets current value of property {@link #getSize size}.
     * Defines predefined size of the component.
     * Default value is `S`.
     * @returns The content of the property
     */
    getSize(): AvatarSize | keyof typeof AvatarSize;

    /**
     * Sets a new value for property {@link #getSize size}.
     * Defines predefined size of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSize(sizeValue?: AvatarSize | keyof typeof AvatarSize | null): this;

    /**
     * Gets current value of property {@link #getColorScheme colorScheme}.
     * Defines the background color of the desired image.
     * If `colorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color.
     * Default value is `Auto`.
     * @returns The content of the property
     */
    getColorScheme(): AvatarColorScheme | keyof typeof AvatarColorScheme;

    /**
     * Sets a new value for property {@link #getColorScheme colorScheme}.
     * Defines the background color of the desired image.
     * If `colorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Auto`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setColorScheme(
      colorSchemeValue?:
        | AvatarColorScheme
        | keyof typeof AvatarColorScheme
        | null
    ): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     * If not provided a default text alternative will be set, if present.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     * If not provided a default text alternative will be set, if present.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following field is supported:
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): AvatarAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following field is supported:
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: AvatarAccessibilityAttributes | null
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
     * Gets content of aggregation {@link #getImage image}.
     * Receives the desired `<img>` tag
     *
     * **Note:** If you experience flickering of the provided image, you can hide the component until it is defined with the following CSS:<br/>
     * `ui5-avatar:not(:defined) {`<br/>
     * &nbsp;&nbsp;&nbsp;&nbsp;`visibility: hidden;`<br/>
     * `}`
     * @returns The content of the aggregation
     */
    getImage(): Array<Control> | Control;

    /**
     * Destroys the image in the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyImage(): this;

    /**
     * Adds some image to the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addImage(imageValue: Array<Control> | Control): this;

    /**
     * Inserts an image into the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertImage(
      imageValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an image from the aggregation {@link #getImage image}.
     * @returns The removed image or `null`
     */
    removeImage(
      imageValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getImage image}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllImage(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getImage image} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfImage(imageValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getBadge badge}.
     * Defines the optional badge that will be used for visual affordance.
     *
     * **Note:** While the slot allows for custom badges, to achieve
     * the Fiori design, you can use the `ui5-tag` with `ui5-icon`
     * in the corresponding `icon` slot, without text nodes.
     * @returns The content of the aggregation
     */
    getBadge(): Array<Control> | Control;

    /**
     * Destroys the badge in the aggregation {@link #getBadge badge}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyBadge(): this;

    /**
     * Adds some badge to the aggregation {@link #getBadge badge}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addBadge(badgeValue: Array<Control> | Control): this;

    /**
     * Inserts a badge into the aggregation {@link #getBadge badge}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertBadge(
      badgeValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a badge from the aggregation {@link #getBadge badge}.
     * @returns The removed badge or `null`
     */
    removeBadge(
      badgeValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getBadge badge}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllBadge(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getBadge badge} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfBadge(badgeValue: Array<Control> | Control): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `Avatar`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Avatar$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Avatar itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Avatar`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Avatar` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Avatar$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Avatar itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Avatar`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Avatar` itself.
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
      fnFunctionValue: (p1: Avatar$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Avatar itself
       */
      oListenerValue?: object
    ): this;
  }
}
