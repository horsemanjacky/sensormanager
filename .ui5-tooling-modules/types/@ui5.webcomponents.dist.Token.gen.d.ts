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
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { IIcon } from "@ui5/webcomponents";

declare module "@ui5/webcomponents/dist/Token" {
  export interface $TokenSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the text of the token.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is selected or not.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used.
     * Accepts `ui5-icon`.
     */
    closeIcon?: Array<IIcon> | IIcon | AggregationBindingInfo | `{${string}}`;
  }

  export default class Token extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TokenSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TokenSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Token" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Token>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Token".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text of the token.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text of the token.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Defines whether the component is selected or not.
     * Default value is `false`.
     * @returns The content of the property
     */
    getSelected(): boolean;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Defines whether the component is selected or not.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getCloseIcon closeIcon}.
     * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used.
     * Accepts `ui5-icon`.
     * @returns The content of the aggregation
     */
    getCloseIcon(): Array<IIcon> | IIcon;

    /**
     * Destroys the closeIcon in the aggregation {@link #getCloseIcon closeIcon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyCloseIcon(): this;

    /**
     * Adds some closeIcon to the aggregation {@link #getCloseIcon closeIcon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addCloseIcon(closeIconValue: Array<IIcon> | IIcon): this;

    /**
     * Inserts a closeIcon into the aggregation {@link #getCloseIcon closeIcon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertCloseIcon(
      closeIconValue: Array<IIcon> | IIcon,

      indexValue: int
    ): this;

    /**
     * Removes a closeIcon from the aggregation {@link #getCloseIcon closeIcon}.
     * @returns The removed closeIcon or `null`
     */
    removeCloseIcon(
      closeIconValue: Array<IIcon> | IIcon | int | ID
    ): Array<IIcon> | IIcon | null;

    /**
     * Removes all the controls from the aggregation {@link #getCloseIcon closeIcon}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllCloseIcon(): Array<IIcon> | IIcon;

    /**
     * Checks for the provided 'IIcon' in the aggregation {@link #getCloseIcon closeIcon} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfCloseIcon(closeIconValue: Array<IIcon> | IIcon): int;
  }
}
