// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IFormItem } from "@ui5/webcomponents";

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

declare module "@ui5/webcomponents/dist/FormItem" {
  export interface $FormItemSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the column span of the component,
     * e.g how many columns the component should span to.
     *
     * **Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
     * or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
     * A number bigger than the available columns won't take effect.
     */
    columnSpan?: float | PropertyBindingInfo | `{${string}}`;

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
     * Defines the label of the component.
     */
    labelContent?:
      | Array<Control>
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the content of the component,
     * associated to `labelContent`.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;
  }

  export default class FormItem extends WebComponent implements IFormItem {
    __implements__ui5_webcomponents_IFormItem: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/FormItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, FormItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/FormItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getColumnSpan columnSpan}.
     * Defines the column span of the component,
     * e.g how many columns the component should span to.
     *
     * **Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
     * or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
     * A number bigger than the available columns won't take effect.
     * @returns The content of the property
     */
    getColumnSpan(): float;

    /**
     * Sets a new value for property {@link #getColumnSpan columnSpan}.
     * Defines the column span of the component,
     * e.g how many columns the component should span to.
     *
     * **Note:** The column span should be a number between 1 and the available columns of the FormGroup (when items are placed in a group)
     * or the Form. The available columns can be affected by the FormGroup#columnSpan and/or the Form#layout.
     * A number bigger than the available columns won't take effect.
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumnSpan(columnSpanValue: float | null): this;

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
     * Gets content of aggregation {@link #getLabelContent labelContent}.
     * Defines the label of the component.
     * @returns The content of the aggregation
     */
    getLabelContent(): Array<Control> | Control;

    /**
     * Destroys the labelContent in the aggregation {@link #getLabelContent labelContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyLabelContent(): this;

    /**
     * Adds some labelContent to the aggregation {@link #getLabelContent labelContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addLabelContent(labelContentValue: Array<Control> | Control): this;

    /**
     * Inserts a labelContent into the aggregation {@link #getLabelContent labelContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertLabelContent(
      labelContentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a labelContent from the aggregation {@link #getLabelContent labelContent}.
     * @returns The removed labelContent or `null`
     */
    removeLabelContent(
      labelContentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getLabelContent labelContent}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllLabelContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getLabelContent labelContent} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfLabelContent(labelContentValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getContent content}.
     * Defines the content of the component,
     * associated to `labelContent`.
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
