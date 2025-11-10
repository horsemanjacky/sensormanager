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
  SegmentedButtonSelectionMode,
  ISegmentedButtonItem
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/SegmentedButton" {
  export interface $SegmentedButtonSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the IDs of the HTML Elements that describe the component.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component selection mode.
     */
    selectionMode?:
      | SegmentedButtonSelectionMode
      | keyof typeof SegmentedButtonSelectionMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines whether the segmented button items should be sized to fit their content.
     *
     * If set to `true`, each item will be sized to fit its content, with any extra space distributed after the last item.
     * If set to `false` (the default), all items will be equally sized to fill the available space.
     */
    itemsFitContent?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the items of `ui5-segmented-button`.
     *
     * **Note:** Multiple items are allowed.
     *
     * **Note:** Use the `ui5-segmented-button-item` for the intended design.
     */
    items?:
      | Array<ISegmentedButtonItem>
      | ISegmentedButtonItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines the IDs of the HTML Elements that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the selected item changes.
     */
    selectionChange?: (oEvent: SegmentedButton$SelectionChangeEvent) => void;
  }
  export interface SegmentedButton$SelectionChangeEventParameters {
    /**
     * an array of selected items. Since: 1.14.0
     */
    selectedItems?: Array<ISegmentedButtonItem> | ISegmentedButtonItem;
  }

  export type SegmentedButton$SelectionChangeEvent = Event<
    SegmentedButton$SelectionChangeEventParameters,
    SegmentedButton
  >;

  export default class SegmentedButton extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SegmentedButtonSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SegmentedButtonSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/SegmentedButton" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, SegmentedButton>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/SegmentedButton".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Gets current value of property {@link #getAccessibleDescription accessibleDescription}.
     * Defines the accessible description of the component.
     * @returns The content of the property
     */
    getAccessibleDescription(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescription accessibleDescription}.
     * Defines the accessible description of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescription(accessibleDescriptionValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Defines the IDs of the HTML Elements that describe the component.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Defines the IDs of the HTML Elements that describe the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
    ): this;

    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     * Defines the component selection mode.
     * Default value is `Single`.
     * @returns The content of the property
     */
    getSelectionMode():
      | SegmentedButtonSelectionMode
      | keyof typeof SegmentedButtonSelectionMode;

    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     * Defines the component selection mode.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Single`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionMode(
      selectionModeValue?:
        | SegmentedButtonSelectionMode
        | keyof typeof SegmentedButtonSelectionMode
        | null
    ): this;

    /**
     * Gets current value of property {@link #getItemsFitContent itemsFitContent}.
     * Determines whether the segmented button items should be sized to fit their content.
     *
     * If set to `true`, each item will be sized to fit its content, with any extra space distributed after the last item.
     * If set to `false` (the default), all items will be equally sized to fill the available space.
     * Default value is `false`.
     * @returns The content of the property
     */
    getItemsFitContent(): boolean;

    /**
     * Sets a new value for property {@link #getItemsFitContent itemsFitContent}.
     * Determines whether the segmented button items should be sized to fit their content.
     *
     * If set to `true`, each item will be sized to fit its content, with any extra space distributed after the last item.
     * If set to `false` (the default), all items will be equally sized to fill the available space.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setItemsFitContent(itemsFitContentValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getSelectedItems selectedItems}.
     * Returns an array of the currently selected items.
     * @returns The content of the property
     */
    getSelectedItems(): Array<ISegmentedButtonItem> | ISegmentedButtonItem;

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
     * Defines the items of `ui5-segmented-button`.
     *
     * **Note:** Multiple items are allowed.
     *
     * **Note:** Use the `ui5-segmented-button-item` for the intended design.
     * @returns The content of the aggregation
     */
    getItems(): Array<ISegmentedButtonItem> | ISegmentedButtonItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(
      itemValue: Array<ISegmentedButtonItem> | ISegmentedButtonItem
    ): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<ISegmentedButtonItem> | ISegmentedButtonItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<ISegmentedButtonItem> | ISegmentedButtonItem | int | ID
    ): Array<ISegmentedButtonItem> | ISegmentedButtonItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<ISegmentedButtonItem> | ISegmentedButtonItem;

    /**
     * Checks for the provided 'ISegmentedButtonItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      itemValue: Array<ISegmentedButtonItem> | ISegmentedButtonItem
    ): int;

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

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelectionChange selectionChange} event of this `SegmentedButton`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SegmentedButton$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SegmentedButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `SegmentedButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SegmentedButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SegmentedButton$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SegmentedButton itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `SegmentedButton`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SegmentedButton` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SegmentedButton$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SegmentedButton itself
       */
      oListenerValue?: object
    ): this;
  }
}
