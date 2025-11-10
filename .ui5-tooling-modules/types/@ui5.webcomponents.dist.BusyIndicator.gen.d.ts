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

import type {
  BusyIndicatorSize,
  BusyIndicatorTextPlacement
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/BusyIndicator" {
  export interface $BusyIndicatorSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines text to be displayed below the component. It can be used to inform the user of the current operation.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the size of the component.
     */
    size?:
      | BusyIndicatorSize
      | keyof typeof BusyIndicatorSize
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the busy indicator is visible on the screen. By default it is not.
     */
    active?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.
     */
    delay?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the placement of the text.
     */
    textPlacement?:
      | BusyIndicatorTextPlacement
      | keyof typeof BusyIndicatorTextPlacement
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

    /**
     * Aggregations
     */

    /**
     * Determines the content over which the component will appear.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;
  }

  export default class BusyIndicator extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BusyIndicatorSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $BusyIndicatorSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/BusyIndicator" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, BusyIndicator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/BusyIndicator".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines text to be displayed below the component. It can be used to inform the user of the current operation.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines text to be displayed below the component. It can be used to inform the user of the current operation.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getSize size}.
     * Defines the size of the component.
     * Default value is `M`.
     * @returns The content of the property
     */
    getSize(): BusyIndicatorSize | keyof typeof BusyIndicatorSize;

    /**
     * Sets a new value for property {@link #getSize size}.
     * Defines the size of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `M`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSize(
      sizeValue?: BusyIndicatorSize | keyof typeof BusyIndicatorSize | null
    ): this;

    /**
     * Gets current value of property {@link #getActive active}.
     * Defines if the busy indicator is visible on the screen. By default it is not.
     * Default value is `false`.
     * @returns The content of the property
     */
    getActive(): boolean;

    /**
     * Sets a new value for property {@link #getActive active}.
     * Defines if the busy indicator is visible on the screen. By default it is not.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setActive(activeValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getDelay delay}.
     * Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.
     * Default value is `1000`.
     * @returns The content of the property
     */
    getDelay(): float;

    /**
     * Sets a new value for property {@link #getDelay delay}.
     * Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDelay(delayValue?: float | null): this;

    /**
     * Gets current value of property {@link #getTextPlacement textPlacement}.
     * Defines the placement of the text.
     * Default value is `Bottom`.
     * @returns The content of the property
     */
    getTextPlacement():
      | BusyIndicatorTextPlacement
      | keyof typeof BusyIndicatorTextPlacement;

    /**
     * Sets a new value for property {@link #getTextPlacement textPlacement}.
     * Defines the placement of the text.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Bottom`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setTextPlacement(
      textPlacementValue?:
        | BusyIndicatorTextPlacement
        | keyof typeof BusyIndicatorTextPlacement
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

    /**
     * Gets content of aggregation {@link #getContent content}.
     * Determines the content over which the component will appear.
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
