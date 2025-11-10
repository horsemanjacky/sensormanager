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
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type { MessageStripDesign, IIcon } from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/MessageStrip" {
  export interface $MessageStripSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the component type.
     */
    design?:
      | MessageStripDesign
      | keyof typeof MessageStripDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the color scheme of the component.
     * There are 10 predefined schemes.
     * To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
     */
    colorScheme?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the MessageStrip will show an icon in the beginning.
     * You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.
     *
     *  * **Note:** If <code>MessageStripDesign.ColorSet1</code> or <code>MessageStripDesign.ColorSet2</code> value is set to the <code>design</code> property, default icon will not be presented.
     */
    hideIcon?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the MessageStrip renders close button.
     */
    hideCloseButton?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the content to be displayed as graphical element within the component.
     *
     * **Note:** If no icon is given, the default icon for the component type will be used.
     * The SAP-icons font provides numerous options.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: Array<IIcon> | IIcon | AggregationBindingInfo | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the close button is pressed either with a
     * click/tap or by using the Enter or Space key.
     */
    close?: (oEvent: MessageStrip$CloseEvent) => void;
  }
  export interface MessageStrip$CloseEventParameters {}

  export type MessageStrip$CloseEvent = Event<
    MessageStrip$CloseEventParameters,
    MessageStrip
  >;

  export default class MessageStrip extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MessageStripSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MessageStripSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/MessageStrip" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, MessageStrip>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/MessageStrip".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component type.
     * Default value is `Information`.
     * @returns The content of the property
     */
    getDesign(): MessageStripDesign | keyof typeof MessageStripDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component type.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Information`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: MessageStripDesign | keyof typeof MessageStripDesign | null
    ): this;

    /**
     * Gets current value of property {@link #getColorScheme colorScheme}.
     * Defines the color scheme of the component.
     * There are 10 predefined schemes.
     * To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
     * Default value is `1`.
     * @returns The content of the property
     */
    getColorScheme(): string;

    /**
     * Sets a new value for property {@link #getColorScheme colorScheme}.
     * Defines the color scheme of the component.
     * There are 10 predefined schemes.
     * To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setColorScheme(colorSchemeValue?: string | null): this;

    /**
     * Gets current value of property {@link #getHideIcon hideIcon}.
     * Defines whether the MessageStrip will show an icon in the beginning.
     * You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.
     *
     *  * **Note:** If <code>MessageStripDesign.ColorSet1</code> or <code>MessageStripDesign.ColorSet2</code> value is set to the <code>design</code> property, default icon will not be presented.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideIcon(): boolean;

    /**
     * Sets a new value for property {@link #getHideIcon hideIcon}.
     * Defines whether the MessageStrip will show an icon in the beginning.
     * You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.
     *
     *  * **Note:** If <code>MessageStripDesign.ColorSet1</code> or <code>MessageStripDesign.ColorSet2</code> value is set to the <code>design</code> property, default icon will not be presented.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideIcon(hideIconValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHideCloseButton hideCloseButton}.
     * Defines whether the MessageStrip renders close button.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideCloseButton(): boolean;

    /**
     * Sets a new value for property {@link #getHideCloseButton hideCloseButton}.
     * Defines whether the MessageStrip renders close button.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideCloseButton(hideCloseButtonValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getIcon icon}.
     * Defines the content to be displayed as graphical element within the component.
     *
     * **Note:** If no icon is given, the default icon for the component type will be used.
     * The SAP-icons font provides numerous options.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the aggregation
     */
    getIcon(): Array<IIcon> | IIcon;

    /**
     * Destroys the icon in the aggregation {@link #getIcon icon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyIcon(): this;

    /**
     * Adds some icon to the aggregation {@link #getIcon icon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addIcon(iconValue: Array<IIcon> | IIcon): this;

    /**
     * Inserts an icon into the aggregation {@link #getIcon icon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertIcon(
      iconValue: Array<IIcon> | IIcon,

      indexValue: int
    ): this;

    /**
     * Removes an icon from the aggregation {@link #getIcon icon}.
     * @returns The removed icon or `null`
     */
    removeIcon(
      iconValue: Array<IIcon> | IIcon | int | ID
    ): Array<IIcon> | IIcon | null;

    /**
     * Removes all the controls from the aggregation {@link #getIcon icon}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllIcon(): Array<IIcon> | IIcon;

    /**
     * Checks for the provided 'IIcon' in the aggregation {@link #getIcon icon} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfIcon(iconValue: Array<IIcon> | IIcon): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `MessageStrip`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MessageStrip$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MessageStrip itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `MessageStrip`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MessageStrip` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MessageStrip$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MessageStrip itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `MessageStrip`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MessageStrip` itself.
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
      fnFunctionValue: (p1: MessageStrip$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MessageStrip itself
       */
      oListenerValue?: object
    ): this;
  }
}
