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

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type {
  ExpandableTextOverflowMode,
  TextEmptyIndicatorMode
} from "@ui5/webcomponents";

import type { CSSSize } from "sap/ui/core/library";

declare module "@ui5/webcomponents/dist/ExpandableText" {
  export interface $ExpandableTextSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Text of the component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed.
     */
    maxCharacters?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines how the full text will be displayed.
     */
    overflowMode?:
      | ExpandableTextOverflowMode
      | keyof typeof ExpandableTextOverflowMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies if an empty indicator should be displayed when there is no text.
     */
    emptyIndicatorMode?:
      | TextEmptyIndicatorMode
      | keyof typeof TextEmptyIndicatorMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The 'width' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;
  }

  export default class ExpandableText extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ExpandableTextSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ExpandableTextSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ExpandableText" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ExpandableText>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ExpandableText".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getText text}.
     * Text of the component.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Text of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getMaxCharacters maxCharacters}.
     * Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed.
     * Default value is `100`.
     * @returns The content of the property
     */
    getMaxCharacters(): float;

    /**
     * Sets a new value for property {@link #getMaxCharacters maxCharacters}.
     * Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxCharacters(maxCharactersValue?: float | null): this;

    /**
     * Gets current value of property {@link #getOverflowMode overflowMode}.
     * Determines how the full text will be displayed.
     * Default value is `InPlace`.
     * @returns The content of the property
     */
    getOverflowMode():
      | ExpandableTextOverflowMode
      | keyof typeof ExpandableTextOverflowMode;

    /**
     * Sets a new value for property {@link #getOverflowMode overflowMode}.
     * Determines how the full text will be displayed.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `InPlace`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOverflowMode(
      overflowModeValue?:
        | ExpandableTextOverflowMode
        | keyof typeof ExpandableTextOverflowMode
        | null
    ): this;

    /**
     * Gets current value of property {@link #getEmptyIndicatorMode emptyIndicatorMode}.
     * Specifies if an empty indicator should be displayed when there is no text.
     * Default value is `Off`.
     * @returns The content of the property
     */
    getEmptyIndicatorMode():
      | TextEmptyIndicatorMode
      | keyof typeof TextEmptyIndicatorMode;

    /**
     * Sets a new value for property {@link #getEmptyIndicatorMode emptyIndicatorMode}.
     * Specifies if an empty indicator should be displayed when there is no text.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Off`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEmptyIndicatorMode(
      emptyIndicatorModeValue?:
        | TextEmptyIndicatorMode
        | keyof typeof TextEmptyIndicatorMode
        | null
    ): this;

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
  }
}
