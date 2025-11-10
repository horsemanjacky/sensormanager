// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IFormItem, TitleLevel } from "@ui5/webcomponents";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as FormItem } from "@ui5/webcomponents/dist/FormItem";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/FormGroup" {
  export interface $FormGroupSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines header text of the component.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the compoennt heading level,
     * set by the `headerText`.
     */
    headerLevel?:
      | TitleLevel
      | keyof typeof TitleLevel
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines column span of the component,
     * e.g how many columns the group should span to.
     */
    columnSpan?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

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
     * Defines the items of the component.
     */
    items?: Array<FormItem> | FormItem | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines id (or many ids) of the element (or elements) that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;
  }

  export default class FormGroup extends WebComponent implements IFormItem {
    __implements__ui5_webcomponents_IFormItem: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormGroupSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormGroupSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/FormGroup" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, FormGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/FormGroup".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines header text of the component.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines header text of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     * Defines the compoennt heading level,
     * set by the `headerText`.
     * Default value is `H3`.
     * @returns The content of the property
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;

    /**
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     * Defines the compoennt heading level,
     * set by the `headerText`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `H3`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderLevel(
      headerLevelValue?: TitleLevel | keyof typeof TitleLevel | null
    ): this;

    /**
     * Gets current value of property {@link #getColumnSpan columnSpan}.
     * Defines column span of the component,
     * e.g how many columns the group should span to.
     * @returns The content of the property
     */
    getColumnSpan(): float;

    /**
     * Sets a new value for property {@link #getColumnSpan columnSpan}.
     * Defines column span of the component,
     * e.g how many columns the group should span to.
     * @returns Reference to `this` in order to allow method chaining
     */
    setColumnSpan(columnSpanValue: float | null): this;

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
     * Gets content of aggregation {@link #getItems items}.
     * Defines the items of the component.
     * @returns The content of the aggregation
     */
    getItems(): Array<FormItem> | FormItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<FormItem> | FormItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<FormItem> | FormItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<FormItem> | FormItem | int | ID
    ): Array<FormItem> | FormItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<FormItem> | FormItem;

    /**
     * Checks for the provided 'FormItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<FormItem> | FormItem): int;

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
  }
}
