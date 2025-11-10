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

import type { WrappingType, TitleLevel } from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/Title" {
  export interface $TitleSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
     */
    wrappingType?:
      | WrappingType
      | keyof typeof WrappingType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the component level.
     * Available options are: `"H6"` to `"H1"`.
     * This property does not influence the style of the component.
     * Use the property `size` for this purpose instead.
     */
    level?:
      | TitleLevel
      | keyof typeof TitleLevel
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the visual appearance of the title.
     * Available options are: `"H6"` to `"H1"`.
     */
    size?:
      | TitleLevel
      | keyof typeof TitleLevel
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
     * Defines the text of the component.
     * This component supports nesting a `Link` component inside.
     *
     * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;
  }

  export default class Title extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TitleSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TitleSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Title" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Title>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Title".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getWrappingType wrappingType}.
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
     * Default value is `Normal`.
     * @returns The content of the property
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;

    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     * Defines how the text of a component will be displayed when there is not enough space.
     *
     * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Normal`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      wrappingTypeValue?: WrappingType | keyof typeof WrappingType | null
    ): this;

    /**
     * Gets current value of property {@link #getLevel level}.
     * Defines the component level.
     * Available options are: `"H6"` to `"H1"`.
     * This property does not influence the style of the component.
     * Use the property `size` for this purpose instead.
     * Default value is `H2`.
     * @returns The content of the property
     */
    getLevel(): TitleLevel | keyof typeof TitleLevel;

    /**
     * Sets a new value for property {@link #getLevel level}.
     * Defines the component level.
     * Available options are: `"H6"` to `"H1"`.
     * This property does not influence the style of the component.
     * Use the property `size` for this purpose instead.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `H2`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLevel(levelValue?: TitleLevel | keyof typeof TitleLevel | null): this;

    /**
     * Gets current value of property {@link #getSize size}.
     * Defines the visual appearance of the title.
     * Available options are: `"H6"` to `"H1"`.
     * Default value is `H5`.
     * @returns The content of the property
     */
    getSize(): TitleLevel | keyof typeof TitleLevel;

    /**
     * Sets a new value for property {@link #getSize size}.
     * Defines the visual appearance of the title.
     * Available options are: `"H6"` to `"H1"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `H5`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSize(sizeValue?: TitleLevel | keyof typeof TitleLevel | null): this;

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
     * This component supports nesting a `Link` component inside.
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
  }
}
