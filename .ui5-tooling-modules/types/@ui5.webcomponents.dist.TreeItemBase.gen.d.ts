// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { ListItemAccessibilityAttributes } from "@ui5/webcomponents/dist/ListItem";

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type {
  default as ListItem,
  $ListItemSettings
} from "@ui5/webcomponents/dist/ListItem";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { ValueState, ID } from "sap/ui/core/library";

import type { ListItemType, Highlight, IButton } from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TreeItemBase" {
  export interface $TreeItemBaseSettings extends $ListItemSettings {
    /**
     * Properties
     */

    /**
     * If set, an icon will be displayed before the text of the tree list item.
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the tree list item will show a collapse or expand icon inside its toggle button.
     */
    expanded?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the item is movable.
     */
    movable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the selection of a tree node is displayed as partially selected.
     *
     * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
     * interaction, meaning that the resulting visual state depends on the values of the `indeterminate`
     * and `selected` properties:
     *
     * -  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.
     * -  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.
     * -  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.
     *
     * **Note:** This property takes effect only when the `ui5-tree` is in `Multiple` mode.
     */
    indeterminate?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
     *
     * **Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
     * Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button.
     * It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.
     */
    hasChildren?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the state of the `additionalText`.
     *
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     */
    additionalTextState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     */
    type?:
      | ListItemType
      | keyof typeof ListItemType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     */
    accessibilityAttributes?:
      | ListItemAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     */
    navigated?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     */
    highlight?:
      | Highlight
      | keyof typeof Highlight
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the selected state of the component.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the items of the component.
     *
     * **Note:** Use `ui5-tree-item` or `ui5-tree-item-custom`
     */
    items?:
      | Array<TreeItemBase>
      | TreeItemBase
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * **Note:** While the slot allows option for setting custom avatar, to match the
     * design guidelines, please use the `ui5-avatar` with size XS.
     *
     * **Note:** If bigger `ui5-avatar` needs to be used, then the size of the
     * `ui5-tree-item` should be customized in order to fit.
     */
    image?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the delete button, displayed in "Delete" mode.
     * **Note:** While the slot allows custom buttons, to match
     * design guidelines, please use the `ui5-button` component.
     * **Note:** When the slot is not present, a built-in delete button will be displayed.
     */
    deleteButton?:
      | Array<IButton>
      | IButton
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the user clicks on the detail button when type is `Detail`.
     */
    detailClick?: (oEvent: TreeItemBase$DetailClickEvent) => void;
  }
  export interface TreeItemBase$DetailClickEventParameters {}

  export type TreeItemBase$DetailClickEvent = Event<
    TreeItemBase$DetailClickEventParameters,
    TreeItemBase
  >;

  export default class TreeItemBase extends ListItem {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TreeItemBaseSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TreeItemBaseSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TreeItemBase" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TreeItemBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TreeItemBase".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Call this method to manually switch the `expanded` state of a tree item.
     */
    toggle(): void;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * If set, an icon will be displayed before the text of the tree list item.
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * If set, an icon will be displayed before the text of the tree list item.
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getExpanded expanded}.
     * Defines whether the tree list item will show a collapse or expand icon inside its toggle button.
     * Default value is `false`.
     * @returns The content of the property
     */
    getExpanded(): boolean;

    /**
     * Sets a new value for property {@link #getExpanded expanded}.
     * Defines whether the tree list item will show a collapse or expand icon inside its toggle button.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setExpanded(expandedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getMovable movable}.
     * Defines whether the item is movable.
     * Default value is `false`.
     * @returns The content of the property
     */
    getMovable(): boolean;

    /**
     * Sets a new value for property {@link #getMovable movable}.
     * Defines whether the item is movable.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMovable(movableValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getIndeterminate indeterminate}.
     * Defines whether the selection of a tree node is displayed as partially selected.
     *
     * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
     * interaction, meaning that the resulting visual state depends on the values of the `indeterminate`
     * and `selected` properties:
     *
     * -  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.
     * -  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.
     * -  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.
     *
     * **Note:** This property takes effect only when the `ui5-tree` is in `Multiple` mode.
     * Default value is `false`.
     * @returns The content of the property
     */
    getIndeterminate(): boolean;

    /**
     * Sets a new value for property {@link #getIndeterminate indeterminate}.
     * Defines whether the selection of a tree node is displayed as partially selected.
     *
     * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
     * interaction, meaning that the resulting visual state depends on the values of the `indeterminate`
     * and `selected` properties:
     *
     * -  If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.
     * -  If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.
     * -  If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.
     *
     * **Note:** This property takes effect only when the `ui5-tree` is in `Multiple` mode.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setIndeterminate(indeterminateValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHasChildren hasChildren}.
     * Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
     *
     * **Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
     * Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button.
     * It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHasChildren(): boolean;

    /**
     * Sets a new value for property {@link #getHasChildren hasChildren}.
     * Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
     *
     * **Note:** This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons.
     * Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button.
     * It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHasChildren(hasChildrenValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAdditionalTextState additionalTextState}.
     * Defines the state of the `additionalText`.
     *
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * Default value is `None`.
     * @returns The content of the property
     */
    getAdditionalTextState(): ValueState | keyof typeof ValueState;

    /**
     * Sets a new value for property {@link #getAdditionalTextState additionalTextState}.
     * Defines the state of the `additionalText`.
     *
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalTextState(
      additionalTextStateValue?: ValueState | keyof typeof ValueState | null
    ): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getType type}.
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     * Default value is `Active`.
     * @returns The content of the property
     */
    getType(): ListItemType | keyof typeof ListItemType;

    /**
     * Sets a new value for property {@link #getType type}.
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Active`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(typeValue?: ListItemType | keyof typeof ListItemType | null): this;

    /**
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): ListItemAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: ListItemAccessibilityAttributes | null
    ): this;

    /**
     * Gets current value of property {@link #getNavigated navigated}.
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     * Default value is `false`.
     * @returns The content of the property
     */
    getNavigated(): boolean;

    /**
     * Sets a new value for property {@link #getNavigated navigated}.
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigated(navigatedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHighlight highlight}.
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * Default value is `None`.
     * @returns The content of the property
     */
    getHighlight(): Highlight | keyof typeof Highlight;

    /**
     * Sets a new value for property {@link #getHighlight highlight}.
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHighlight(
      highlightValue?: Highlight | keyof typeof Highlight | null
    ): this;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Defines the selected state of the component.
     * Default value is `false`.
     * @returns The content of the property
     */
    getSelected(): boolean;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Defines the selected state of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue?: boolean | null): this;

    /**
     * Gets content of aggregation {@link #getItems items}.
     * Defines the items of the component.
     *
     * **Note:** Use `ui5-tree-item` or `ui5-tree-item-custom`
     * @returns The content of the aggregation
     */
    getItems(): Array<TreeItemBase> | TreeItemBase;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<TreeItemBase> | TreeItemBase): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<TreeItemBase> | TreeItemBase,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<TreeItemBase> | TreeItemBase | int | ID
    ): Array<TreeItemBase> | TreeItemBase | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<TreeItemBase> | TreeItemBase;

    /**
     * Checks for the provided 'TreeItemBase' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<TreeItemBase> | TreeItemBase): int;

    /**
     * Gets content of aggregation {@link #getImage image}.
     * **Note:** While the slot allows option for setting custom avatar, to match the
     * design guidelines, please use the `ui5-avatar` with size XS.
     *
     * **Note:** If bigger `ui5-avatar` needs to be used, then the size of the
     * `ui5-tree-item` should be customized in order to fit.
     * @returns The content of the aggregation
     */
    getImage(): Array<Control> | Control;

    /**
     * Destroys the image in the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyImage(): this;

    /**
     * Adds some image to the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addImage(imageValue: Array<Control> | Control): this;

    /**
     * Inserts an image into the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertImage(
      imageValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an image from the aggregation {@link #getImage image}.
     * @returns The removed image or `null`
     */
    removeImage(
      imageValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getImage image}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllImage(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getImage image} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfImage(imageValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getDeleteButton deleteButton}.
     * Defines the delete button, displayed in "Delete" mode.
     * **Note:** While the slot allows custom buttons, to match
     * design guidelines, please use the `ui5-button` component.
     * **Note:** When the slot is not present, a built-in delete button will be displayed.
     * @returns The content of the aggregation
     */
    getDeleteButton(): Array<IButton> | IButton;

    /**
     * Destroys the deleteButton in the aggregation {@link #getDeleteButton deleteButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDeleteButton(): this;

    /**
     * Adds some deleteButton to the aggregation {@link #getDeleteButton deleteButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addDeleteButton(deleteButtonValue: Array<IButton> | IButton): this;

    /**
     * Inserts a deleteButton into the aggregation {@link #getDeleteButton deleteButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertDeleteButton(
      deleteButtonValue: Array<IButton> | IButton,

      indexValue: int
    ): this;

    /**
     * Removes a deleteButton from the aggregation {@link #getDeleteButton deleteButton}.
     * @returns The removed deleteButton or `null`
     */
    removeDeleteButton(
      deleteButtonValue: Array<IButton> | IButton | int | ID
    ): Array<IButton> | IButton | null;

    /**
     * Removes all the controls from the aggregation {@link #getDeleteButton deleteButton}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDeleteButton(): Array<IButton> | IButton;

    /**
     * Checks for the provided 'IButton' in the aggregation {@link #getDeleteButton deleteButton} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfDeleteButton(deleteButtonValue: Array<IButton> | IButton): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getDetailClick detailClick} event of this `TreeItemBase`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TreeItemBase$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TreeItemBase itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `TreeItemBase`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TreeItemBase` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TreeItemBase$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TreeItemBase itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `TreeItemBase`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TreeItemBase` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDetailClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TreeItemBase$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TreeItemBase itself
       */
      oListenerValue?: object
    ): this;
  }
}
