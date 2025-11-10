// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { ListAccessibilityAttributes } from "@ui5/webcomponents/dist/List";

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
  ListSelectionMode,
  ListSeparator,
  ListGrowingMode,
  ListAccessibleRole
} from "@ui5/webcomponents";

import type { default as ListItemBase } from "@ui5/webcomponents/dist/ListItemBase";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as ListItemGroup } from "@ui5/webcomponents/dist/ListItemGroup";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/List" {
  export interface $ListSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the component header text.
     *
     * **Note:** If `header` is set this property is ignored.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the footer text.
     */
    footerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component is indented.
     */
    indent?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the selection mode of the component.
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
     * Defines the item separator style that is used.
     */
    separators?:
      | ListSeparator
      | keyof typeof ListSeparator
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component will have growing capability either by pressing a `More` button,
     * or via user scroll. In both cases `load-more` event is fired.
     *
     * **Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,
     * on IE the component will fallback to `growing="Button"`.
     */
    growing?:
      | ListGrowingMode
      | keyof typeof ListGrowingMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text that will be displayed inside the growing button.
     *
     * **Note:** If not specified a built-in text will be displayed.
     *
     * **Note:** This property takes effect if the `growing` property is set to the `Button`.
     */
    growingButtonText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the component would display a loading indicator over the list.
     */
    loading?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
     */
    loadingDelay?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines additional accessibility attributes on different areas of the component.
     *
     * The accessibilityAttributes object has the following field:
     *
     *  - **growingButton**: `growingButton.name`, `growingButton.description`.
     *
     *  The accessibility attributes support the following values:
     *
     * - **name**: Defines the accessible ARIA name of the growing button.
     * Accepts any string.
     *
     * - **description**: Defines the accessible ARIA description of the growing button.
     * Accepts any string.
     *
     *  **Note:** The `accessibilityAttributes` property is in an experimental state and is a subject to change.
     */
    accessibilityAttributes?:
      | ListAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the IDs of the elements that describe the component.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible role of the component.
     */
    accessibleRole?:
      | ListAccessibleRole
      | keyof typeof ListAccessibleRole
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
     * **Note:** Use `ui5-li`, `ui5-li-custom`, and `ui5-li-group` for the intended design.
     */
    items?:
      | Array<ListItemBase | ListItemGroup>
      | ListItemBase
      | ListItemGroup
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the component header.
     *
     * **Note:** When `header` is set, the
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
     * Fired when an item is activated, unless the item's `type` property
     * is set to `Inactive`.
     *
     * **Note**: This event is not triggered by interactions with selection components such as the checkboxes and radio buttons,
     * associated with non-default `selectionMode` values, or if any other **interactive** component
     * (such as a button or input) within the list item is directly clicked.
     */
    itemClick?: (oEvent: List$ItemClickEvent) => void;

    /**
     * Fired when the `Close` button of any item is clicked
     *
     * **Note:** This event is only applicable to list items that can be closed (such as notification list items),
     * not to be confused with `item-delete`.
     */
    itemClose?: (oEvent: List$ItemCloseEvent) => void;

    /**
     * Fired when the `Toggle` button of any item is clicked.
     *
     * **Note:** This event is only applicable to list items that can be toggled (such as notification group list items).
     */
    itemToggle?: (oEvent: List$ItemToggleEvent) => void;

    /**
     * Fired when the Delete button of any item is pressed.
     *
     * **Note:** A Delete button is displayed on each item,
     * when the component `selectionMode` property is set to `Delete`.
     */
    itemDelete?: (oEvent: List$ItemDeleteEvent) => void;

    /**
     * Fired when selection is changed by user interaction
     * in `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.
     */
    selectionChange?: (oEvent: List$SelectionChangeEvent) => void;

    /**
     * Fired when the user scrolls to the bottom of the list.
     *
     * **Note:** The event is fired when the `growing='Scroll'` property is enabled.
     */
    loadMore?: (oEvent: List$LoadMoreEvent) => void;

    /**
     * Fired when a movable list item is moved over a potential drop target during a dragging operation.
     *
     * If the new position is valid, prevent the default action of the event using `preventDefault()`.
     */
    moveOver?: (oEvent: List$MoveOverEvent) => void;

    /**
     * Fired when a movable list item is dropped onto a drop target.
     *
     * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
     */
    move?: (oEvent: List$MoveEvent) => void;
  }
  export interface List$ItemClickEventParameters {
    /**
     * The clicked item.
     */
    item?: Control;
  }

  export type List$ItemClickEvent = Event<List$ItemClickEventParameters, List>;
  export interface List$ItemCloseEventParameters {
    /**
     * the item about to be closed.
     */
    item?: Control;
  }

  export type List$ItemCloseEvent = Event<List$ItemCloseEventParameters, List>;
  export interface List$ItemToggleEventParameters {
    /**
     * the toggled item.
     */
    item?: Control;
  }

  export type List$ItemToggleEvent = Event<
    List$ItemToggleEventParameters,
    List
  >;
  export interface List$ItemDeleteEventParameters {
    /**
     * the deleted item.
     */
    item?: Control;
  }

  export type List$ItemDeleteEvent = Event<
    List$ItemDeleteEventParameters,
    List
  >;
  export interface List$SelectionChangeEventParameters {
    /**
     * An array of the selected items.
     */
    selectedItems?: Array<ListItemBase> | ListItemBase;

    /**
     * An array of the previously selected items.
     */
    previouslySelectedItems?: Array<ListItemBase> | ListItemBase;
  }

  export type List$SelectionChangeEvent = Event<
    List$SelectionChangeEventParameters,
    List
  >;
  export interface List$LoadMoreEventParameters {}

  export type List$LoadMoreEvent = Event<List$LoadMoreEventParameters, List>;
  export interface List$MoveOverEventParameters {
    /**
     * Contains information about the moved element under `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type List$MoveOverEvent = Event<List$MoveOverEventParameters, List>;
  export interface List$MoveEventParameters {
    /**
     * Contains information about the moved element under `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type List$MoveEvent = Event<List$MoveEventParameters, List>;

  export default class List extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ListSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ListSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/List" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, List>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/List".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines the component header text.
     *
     * **Note:** If `header` is set this property is ignored.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines the component header text.
     *
     * **Note:** If `header` is set this property is ignored.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getFooterText footerText}.
     * Defines the footer text.
     * @returns The content of the property
     */
    getFooterText(): string;

    /**
     * Sets a new value for property {@link #getFooterText footerText}.
     * Defines the footer text.
     * @returns Reference to `this` in order to allow method chaining
     */
    setFooterText(footerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getIndent indent}.
     * Determines whether the component is indented.
     * Default value is `false`.
     * @returns The content of the property
     */
    getIndent(): boolean;

    /**
     * Sets a new value for property {@link #getIndent indent}.
     * Determines whether the component is indented.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setIndent(indentValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getSelectionMode selectionMode}.
     * Defines the selection mode of the component.
     * Default value is `None`.
     * @returns The content of the property
     */
    getSelectionMode(): ListSelectionMode | keyof typeof ListSelectionMode;

    /**
     * Sets a new value for property {@link #getSelectionMode selectionMode}.
     * Defines the selection mode of the component.
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
     * Gets current value of property {@link #getSeparators separators}.
     * Defines the item separator style that is used.
     * Default value is `All`.
     * @returns The content of the property
     */
    getSeparators(): ListSeparator | keyof typeof ListSeparator;

    /**
     * Sets a new value for property {@link #getSeparators separators}.
     * Defines the item separator style that is used.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `All`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSeparators(
      separatorsValue?: ListSeparator | keyof typeof ListSeparator | null
    ): this;

    /**
     * Gets current value of property {@link #getGrowing growing}.
     * Defines whether the component will have growing capability either by pressing a `More` button,
     * or via user scroll. In both cases `load-more` event is fired.
     *
     * **Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,
     * on IE the component will fallback to `growing="Button"`.
     * Default value is `None`.
     * @returns The content of the property
     */
    getGrowing(): ListGrowingMode | keyof typeof ListGrowingMode;

    /**
     * Sets a new value for property {@link #getGrowing growing}.
     * Defines whether the component will have growing capability either by pressing a `More` button,
     * or via user scroll. In both cases `load-more` event is fired.
     *
     * **Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,
     * on IE the component will fallback to `growing="Button"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrowing(
      growingValue?: ListGrowingMode | keyof typeof ListGrowingMode | null
    ): this;

    /**
     * Gets current value of property {@link #getGrowingButtonText growingButtonText}.
     * Defines the text that will be displayed inside the growing button.
     *
     * **Note:** If not specified a built-in text will be displayed.
     *
     * **Note:** This property takes effect if the `growing` property is set to the `Button`.
     * @returns The content of the property
     */
    getGrowingButtonText(): string;

    /**
     * Sets a new value for property {@link #getGrowingButtonText growingButtonText}.
     * Defines the text that will be displayed inside the growing button.
     *
     * **Note:** If not specified a built-in text will be displayed.
     *
     * **Note:** This property takes effect if the `growing` property is set to the `Button`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setGrowingButtonText(growingButtonTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getLoading loading}.
     * Defines if the component would display a loading indicator over the list.
     * Default value is `false`.
     * @returns The content of the property
     */
    getLoading(): boolean;

    /**
     * Sets a new value for property {@link #getLoading loading}.
     * Defines if the component would display a loading indicator over the list.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoading(loadingValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
     * Default value is `1000`.
     * @returns The content of the property
     */
    getLoadingDelay(): float;

    /**
     * Sets a new value for property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoadingDelay(loadingDelayValue?: float | null): this;

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
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines additional accessibility attributes on different areas of the component.
     *
     * The accessibilityAttributes object has the following field:
     *
     *  - **growingButton**: `growingButton.name`, `growingButton.description`.
     *
     *  The accessibility attributes support the following values:
     *
     * - **name**: Defines the accessible ARIA name of the growing button.
     * Accepts any string.
     *
     * - **description**: Defines the accessible ARIA description of the growing button.
     * Accepts any string.
     *
     *  **Note:** The `accessibilityAttributes` property is in an experimental state and is a subject to change.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): ListAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines additional accessibility attributes on different areas of the component.
     *
     * The accessibilityAttributes object has the following field:
     *
     *  - **growingButton**: `growingButton.name`, `growingButton.description`.
     *
     *  The accessibility attributes support the following values:
     *
     * - **name**: Defines the accessible ARIA name of the growing button.
     * Accepts any string.
     *
     * - **description**: Defines the accessible ARIA description of the growing button.
     * Accepts any string.
     *
     *  **Note:** The `accessibilityAttributes` property is in an experimental state and is a subject to change.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: ListAccessibilityAttributes | null
    ): this;

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
     * Gets current value of property {@link #getAccessibleRole accessibleRole}.
     * Defines the accessible role of the component.
     * Default value is `List`.
     * @returns The content of the property
     */
    getAccessibleRole(): ListAccessibleRole | keyof typeof ListAccessibleRole;

    /**
     * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
     * Defines the accessible role of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `List`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleRole(
      accessibleRoleValue?:
        | ListAccessibleRole
        | keyof typeof ListAccessibleRole
        | null
    ): this;

    /**
     * Gets current value of property {@link #getListItems listItems}.
     * Returns an array containing the list item instances without the groups in a flat structure.
     * @returns The content of the property
     */
    getListItems(): Array<ListItemBase> | ListItemBase;

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
     * **Note:** Use `ui5-li`, `ui5-li-custom`, and `ui5-li-group` for the intended design.
     * @returns The content of the aggregation
     */
    getItems():
      | Array<ListItemBase | ListItemGroup>
      | ListItemBase
      | ListItemGroup;

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
      itemValue:
        | Array<ListItemBase | ListItemGroup>
        | ListItemBase
        | ListItemGroup
    ): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue:
        | Array<ListItemBase | ListItemGroup>
        | ListItemBase
        | ListItemGroup,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue:
        | Array<ListItemBase | ListItemGroup>
        | ListItemBase
        | ListItemGroup
        | int
        | ID
    ):
      | Array<ListItemBase | ListItemGroup>
      | ListItemBase
      | ListItemGroup
      | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems():
      | Array<ListItemBase | ListItemGroup>
      | ListItemBase
      | ListItemGroup;

    /**
     * Checks for the provided 'ListItemBase' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(
      itemValue:
        | Array<ListItemBase | ListItemGroup>
        | ListItemBase
        | ListItemGroup
    ): int;

    /**
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the component header.
     *
     * **Note:** When `header` is set, the
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
     * Detaches event handler `fnFunction` from the {@link #getItemClick itemClick} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
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
      fnFunctionValue: (p1: List$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemClose itemClose} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClose itemClose} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClose itemClose} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemToggle itemToggle} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemToggle itemToggle} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemToggle itemToggle} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
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
      fnFunctionValue: (p1: List$ItemToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemDelete itemDelete} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemDelete itemDelete} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$ItemDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemDelete itemDelete} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
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
      fnFunctionValue: (p1: List$ItemDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelectionChange selectionChange} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
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
      fnFunctionValue: (p1: List$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getLoadMore loadMore} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLoadMore(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$LoadMoreEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getLoadMore loadMore} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLoadMore(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$LoadMoreEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getLoadMore loadMore} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLoadMore(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$LoadMoreEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMoveOver moveOver} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
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
      fnFunctionValue: (p1: List$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMove move} event of this `List`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: List$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `List`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `List` itself.
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
      fnFunctionValue: (p1: List$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this List itself
       */
      oListenerValue?: object
    ): this;
  }
}
