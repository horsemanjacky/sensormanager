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

import type { ToolbarAlign, ToolbarDesign } from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as ToolbarItem } from "@ui5/webcomponents/dist/ToolbarItem";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/Toolbar" {
  export interface $ToolbarSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Indicated the direction in which the Toolbar items will be aligned.
     */
    alignContent?:
      | ToolbarAlign
      | keyof typeof ToolbarAlign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the toolbar design.
     */
    design?:
      | ToolbarDesign
      | keyof typeof ToolbarDesign
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
     * Defines the items of the component.
     *
     * **Note:** Currently only `ui5-toolbar-button`, `ui5-toolbar-select`, `ui5-toolbar-separator` and `ui5-toolbar-spacer` are allowed here.
     */
    items?:
      | Array<ToolbarItem>
      | ToolbarItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the input.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;
  }

  export default class Toolbar extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Toolbar" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Toolbar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Toolbar".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Returns if the overflow popup is open.
     */
    isOverflowOpen(): void;

    /**
     * Gets current value of property {@link #getAlignContent alignContent}.
     * Indicated the direction in which the Toolbar items will be aligned.
     * Default value is `End`.
     * @returns The content of the property
     */
    getAlignContent(): ToolbarAlign | keyof typeof ToolbarAlign;

    /**
     * Sets a new value for property {@link #getAlignContent alignContent}.
     * Indicated the direction in which the Toolbar items will be aligned.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `End`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAlignContent(
      alignContentValue?: ToolbarAlign | keyof typeof ToolbarAlign | null
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
     * Gets current value of property {@link #getDesign design}.
     * Defines the toolbar design.
     * Default value is `Solid`.
     * @returns The content of the property
     */
    getDesign(): ToolbarDesign | keyof typeof ToolbarDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the toolbar design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: ToolbarDesign | keyof typeof ToolbarDesign | null
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
     * Gets content of aggregation {@link #getItems items}.
     * Defines the items of the component.
     *
     * **Note:** Currently only `ui5-toolbar-button`, `ui5-toolbar-select`, `ui5-toolbar-separator` and `ui5-toolbar-spacer` are allowed here.
     * @returns The content of the aggregation
     */
    getItems(): Array<ToolbarItem> | ToolbarItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<ToolbarItem> | ToolbarItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<ToolbarItem> | ToolbarItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<ToolbarItem> | ToolbarItem | int | ID
    ): Array<ToolbarItem> | ToolbarItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<ToolbarItem> | ToolbarItem;

    /**
     * Checks for the provided 'ToolbarItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<ToolbarItem> | ToolbarItem): int;

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
