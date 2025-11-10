// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { WalkCallback } from "@ui5/webcomponents/dist/Tree";

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

import type { ListSelectionMode } from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as TreeItemBase } from "@ui5/webcomponents/dist/TreeItemBase";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Tree" {
  export interface $TreeSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the selection mode of the component. Since the tree uses a `ui5-list` to display its structure,
     * the tree modes are exactly the same as the list modes, and are all applicable.
     */
    selectionMode?:
      | ListSelectionMode
      | keyof typeof ListSelectionMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text that is displayed when the component contains no items.
     */
    noDataText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component header text.
     *
     * **Note:** If the `header` slot is set, this property is ignored.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component footer text.
     */
    footerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the IDs of the elements that describe the component.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

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
     * Defines the items of the component. Tree items may have other tree items as children.
     *
     * **Note:** Use `ui5-tree-item` for the intended design.
     */
    items?:
      | Array<TreeItemBase>
      | TreeItemBase
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the component header.
     *
     * **Note:** When the `header` slot is set, the
     * `headerText` property is ignored.
     */
    header?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines the IDs of the elements that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when a tree item is expanded or collapsed.
     *
     * **Note:** You can call `preventDefault()` on the event object to suppress the event, if needed.
     * This may be handy for example if you want to dynamically load tree items upon the user expanding a node.
     * Even if you prevented the event's default behavior, you can always manually call `toggle()` on a tree item.
     */
    itemToggle?: (oEvent: Tree$ItemToggleEvent) => void;

    /**
     * Fired when the mouse cursor enters the tree item borders.
     */
    itemMouseover?: (oEvent: Tree$ItemMouseoverEvent) => void;

    /**
     * Fired when the mouse cursor leaves the tree item borders.
     */
    itemMouseout?: (oEvent: Tree$ItemMouseoutEvent) => void;

    /**
     * Fired when a tree item is activated.
     */
    itemClick?: (oEvent: Tree$ItemClickEvent) => void;

    /**
     * Fired when the Delete button of any tree item is pressed.
     *
     * **Note:** A Delete button is displayed on each item,
     * when the component `selectionMode` property is set to `Delete`.
     */
    itemDelete?: (oEvent: Tree$ItemDeleteEvent) => void;

    /**
     * Fired when selection is changed by user interaction
     * in `Single`, `SingleStart`, `SingleEnd` and `Multiple` modes.
     */
    selectionChange?: (oEvent: Tree$SelectionChangeEvent) => void;

    /**
     * Fired when a movable tree item is moved over a potential drop target during a drag-and-drop operation.
     *
     * If the new position is valid, prevent the default action of the event using `preventDefault()`.
     */
    move?: (oEvent: Tree$MoveEvent) => void;

    /**
     * Fired when a movable tree item is dropped onto a drop target.
     *
     * **Note:** The `move` event is fired only if there was a preceding `move-over` event with prevented default action.
     */
    moveOver?: (oEvent: Tree$MoveOverEvent) => void;
  }
  export interface Tree$ItemToggleEventParameters {
    /**
     * the toggled item.
     */
    item?: Control;
  }

  export type Tree$ItemToggleEvent = Event<
    Tree$ItemToggleEventParameters,
    Tree
  >;
  export interface Tree$ItemMouseoverEventParameters {
    /**
     * the hovered item.
     */
    item?: Control;
  }

  export type Tree$ItemMouseoverEvent = Event<
    Tree$ItemMouseoverEventParameters,
    Tree
  >;
  export interface Tree$ItemMouseoutEventParameters {
    /**
     * the hovered item.
     */
    item?: Control;
  }

  export type Tree$ItemMouseoutEvent = Event<
    Tree$ItemMouseoutEventParameters,
    Tree
  >;
  export interface Tree$ItemClickEventParameters {
    /**
     * The clicked item.
     */
    item?: Control;
  }

  export type Tree$ItemClickEvent = Event<Tree$ItemClickEventParameters, Tree>;
  export interface Tree$ItemDeleteEventParameters {
    /**
     * the deleted item.
     */
    item?: Control;
  }

  export type Tree$ItemDeleteEvent = Event<
    Tree$ItemDeleteEventParameters,
    Tree
  >;
  export interface Tree$SelectionChangeEventParameters {
    /**
     * An array of the selected items.
     */
    selectedItems?: any;

    /**
     * An array of the previously selected items.
     */
    previouslySelectedItems?: any;

    /**
     * The item triggering the event.
     */
    targetItem?: Control;
  }

  export type Tree$SelectionChangeEvent = Event<
    Tree$SelectionChangeEventParameters,
    Tree
  >;
  export interface Tree$MoveEventParameters {
    /**
     * Contains information about the moved element under the `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type Tree$MoveEvent = Event<Tree$MoveEventParameters, Tree>;
  export interface Tree$MoveOverEventParameters {
    /**
     * Contains information about the moved element under the `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type Tree$MoveOverEvent = Event<Tree$MoveOverEventParameters, Tree>;

  export default class Tree extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TreeSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TreeSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Tree" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Tree>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Tree".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Perform Depth-First-Search walk on the tree and run a callback on each node
     */
    walk(
      /**
       * function to execute on each node of the tree with 3 arguments: the node, the level and the index
       */
      callbackValue: WalkCallback
    ): void;

    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     * Defines the selection mode of the component. Since the tree uses a `ui5-list` to display its structure,
     * the tree modes are exactly the same as the list modes, and are all applicable.
     * Default value is `None`.
     * @returns The content of the property
     */
    getSelectionMode(): ListSelectionMode | keyof typeof ListSelectionMode;

    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     * Defines the selection mode of the component. Since the tree uses a `ui5-list` to display its structure,
     * the tree modes are exactly the same as the list modes, and are all applicable.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelectionMode(
      selectionModeValue?:
        | ListSelectionMode
        | keyof typeof ListSelectionMode
        | null
    ): this;

    /**
     * Gets current value of property {@link #getNoDataText noDataText}.
     * Defines the text that is displayed when the component contains no items.
     * @returns The content of the property
     */
    getNoDataText(): string;

    /**
     * Sets a new value for property {@link #getNoDataText noDataText}.
     * Defines the text that is displayed when the component contains no items.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoDataText(noDataTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines the component header text.
     *
     * **Note:** If the `header` slot is set, this property is ignored.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines the component header text.
     *
     * **Note:** If the `header` slot is set, this property is ignored.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getFooterText footerText}.
     * Defines the component footer text.
     * @returns The content of the property
     */
    getFooterText(): string;

    /**
     * Sets a new value for property {@link #getFooterText footerText}.
     * Defines the component footer text.
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooterText(footerTextValue: string | null): this;

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
     * Defines the IDs of the elements that describe the component.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Defines the IDs of the elements that describe the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
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
     * Defines the items of the component. Tree items may have other tree items as children.
     *
     * **Note:** Use `ui5-tree-item` for the intended design.
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
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the component header.
     *
     * **Note:** When the `header` slot is set, the
     * `headerText` property is ignored.
     * @returns The content of the aggregation
     */
    getHeader(): Array<Control> | Control;

    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;

    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeader(headerValue: Array<Control> | Control): this;

    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeader(
      headerValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     * @returns The removed header or `null`
     */
    removeHeader(
      headerValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeader(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getHeader header} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeader(headerValue: Array<Control> | Control): int;

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
     * Detaches event handler `fnFunction` from the {@link #getItemToggle itemToggle} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemToggle itemToggle} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemToggle itemToggle} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemToggle(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemMouseover itemMouseover} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemMouseover(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemMouseoverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemMouseover itemMouseover} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemMouseover(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemMouseoverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemMouseover itemMouseover} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemMouseover(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemMouseoverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemMouseout itemMouseout} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemMouseout(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemMouseoutEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemMouseout itemMouseout} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemMouseout(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemMouseoutEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemMouseout itemMouseout} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemMouseout(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemMouseoutEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemClick itemClick} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemDelete itemDelete} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemDelete itemDelete} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemDelete itemDelete} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemDelete(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$ItemDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelectionChange selectionChange} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
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
      fnFunctionValue: (p1: Tree$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMove move} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMoveOver moveOver} event of this `Tree`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `Tree`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tree` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tree$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tree itself
       */
      oListenerValue?: object
    ): this;
  }
}
