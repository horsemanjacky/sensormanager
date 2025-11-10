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

import type {
  TagDesign,
  WrappingType,
  TagSize,
  IIcon
} from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Tag" {
  export interface $TagSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the design type of the component.
     */
    design?:
      | TagDesign
      | keyof typeof TagDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the color scheme of the component.
     * There are 10 predefined schemes.
     * To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
     */
    colorScheme?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the default state icon is shown.
     */
    hideStateIcon?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the component is interactive (focusable and pressable).
     */
    interactive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** For option "Normal" the text will wrap and the
     * words will not be broken based on hyphenation.
     */
    wrappingType?:
      | WrappingType
      | keyof typeof WrappingType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines predefined size of the component.
     */
    size?: TagSize | keyof typeof TagSize | PropertyBindingInfo | `{${string}}`;

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
     * Defines the icon to be displayed in the component.
     */
    icon?: Array<IIcon> | IIcon | AggregationBindingInfo | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the user clicks on an interactive tag.
     *
     * **Note:** The event will be fired if the `interactive` property is `true`
     */
    click?: (oEvent: Tag$ClickEvent) => void;
  }
  export interface Tag$ClickEventParameters {}

  export type Tag$ClickEvent = Event<Tag$ClickEventParameters, Tag>;

  export default class Tag extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TagSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TagSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Tag" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Tag>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Tag".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the design type of the component.
     * Default value is `Neutral`.
     * @returns The content of the property
     */
    getDesign(): TagDesign | keyof typeof TagDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the design type of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Neutral`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(designValue?: TagDesign | keyof typeof TagDesign | null): this;

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
     * Gets current value of property {@link #getHideStateIcon hideStateIcon}.
     * Defines if the default state icon is shown.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideStateIcon(): boolean;

    /**
     * Sets a new value for property {@link #getHideStateIcon hideStateIcon}.
     * Defines if the default state icon is shown.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideStateIcon(hideStateIconValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getInteractive interactive}.
     * Defines if the component is interactive (focusable and pressable).
     * Default value is `false`.
     * @returns The content of the property
     */
    getInteractive(): boolean;

    /**
     * Sets a new value for property {@link #getInteractive interactive}.
     * Defines if the component is interactive (focusable and pressable).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractive(interactiveValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getWrappingType wrappingType}.
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** For option "Normal" the text will wrap and the
     * words will not be broken based on hyphenation.
     * Default value is `Normal`.
     * @returns The content of the property
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;

    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** For option "Normal" the text will wrap and the
     * words will not be broken based on hyphenation.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Normal`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      wrappingTypeValue?: WrappingType | keyof typeof WrappingType | null
    ): this;

    /**
     * Gets current value of property {@link #getSize size}.
     * Defines predefined size of the component.
     * Default value is `S`.
     * @returns The content of the property
     */
    getSize(): TagSize | keyof typeof TagSize;

    /**
     * Sets a new value for property {@link #getSize size}.
     * Defines predefined size of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSize(sizeValue?: TagSize | keyof typeof TagSize | null): this;

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
     * Gets content of aggregation {@link #getIcon icon}.
     * Defines the icon to be displayed in the component.
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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `Tag`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tag$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tag itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Tag`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tag` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tag$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tag itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Tag`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tag` itself.
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
      fnFunctionValue: (p1: Tag$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tag itself
       */
      oListenerValue?: object
    ): this;
  }
}
