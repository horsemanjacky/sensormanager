// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { MenuItemAccessibilityAttributes } from "@ui5/webcomponents/dist/MenuItem";

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type {
  IMenuItem,
  ListItemType,
  Highlight,
  IButton
} from "@ui5/webcomponents";

import type {
  default as ListItem,
  $ListItemSettings
} from "@ui5/webcomponents/dist/ListItem";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/MenuItem" {
  export interface $MenuItemSettings extends $ListItemSettings {
    /**
     * Properties
     */

    /**
     * Defines the text of the tree item.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `additionalText`, displayed in the end of the menu item.
     *
     * **Note:** The additional text will not be displayed if there are items added in `items` slot or there are
     * components added to `endContent` slot.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     */
    additionalText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * **Example:**
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether menu item is in disabled state.
     *
     * **Note:** A disabled menu item is noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
     *
     * **Note:** If set to `true` a busy indicator component will be displayed into the related one to the current menu item sub-menu popover.
     */
    loading?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
     */
    loadingDelay?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether menu item is in checked state.
     *
     * **Note:** checked state is only taken into account when menu item is added to menu item group
     * with `checkMode` other than `None`.
     *
     * **Note:** A checked menu item has a checkmark displayed at its end.
     */
    checked?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaKeyShortcuts**: Indicated the availability of a keyboard shortcuts defined for the menu item.
     *
     * - **role**: Defines the role of the menu item. If not set, menu item will have default role="menuitem".
     */
    accessibilityAttributes?:
      | MenuItemAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

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
     * Defines the items of this component.
     *
     * **Note:** The slot can hold menu item and menu separator items.
     *
     * If there are items added to this slot, an arrow will be displayed at the end
     * of the item in order to indicate that there are items added. In that case components added
     * to `endContent` slot or `additionalText` content will not be displayed.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     */
    items?:
      | Array<IMenuItem>
      | IMenuItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the components that should be displayed at the end of the menu item.
     *
     * **Note:** It is highly recommended to slot only components of type `ui5-button`,`ui5-link`
     * or `ui5-icon` in order to preserve the intended design. If there are components added to this slot,
     * and there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,
     * nether `additionalText` nor components added to this slot would be displayed.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     *
     * Application developers are responsible for ensuring that interactive elements placed in the `endContent` slot
     * have the correct accessibility behaviour, including their enabled or disabled states.
     * The menu does not manage these aspects when the menu item state changes.
     */
    endContent?:
      | Array<Control>
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

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
     * Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening.
     *
     * **Note:** Since 1.14.0 the event is also fired before a sub-menu opens.
     */
    beforeOpen?: (oEvent: MenuItem$BeforeOpenEvent) => void;

    /**
     * Fired after the menu is opened.
     */
    open?: (oEvent: MenuItem$OpenEvent) => void;

    /**
     * Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing.
     */
    beforeClose?: (oEvent: MenuItem$BeforeCloseEvent) => void;

    /**
     * Fired after the menu is closed.
     */
    close?: (oEvent: MenuItem$CloseEvent) => void;

    /**
     * Fired when an item is checked or unchecked.
     */
    check?: (oEvent: MenuItem$CheckEvent) => void;

    /**
     * Fired when the user clicks on the detail button when type is `Detail`.
     */
    detailClick?: (oEvent: MenuItem$DetailClickEvent) => void;
  }
  export interface MenuItem$BeforeOpenEventParameters {
    /**
     * The menu item that triggers opening of the sub-menu or undefined when fired upon root menu opening.
     */
    item?: Control;
  }

  export type MenuItem$BeforeOpenEvent = Event<
    MenuItem$BeforeOpenEventParameters,
    MenuItem
  >;
  export interface MenuItem$OpenEventParameters {}

  export type MenuItem$OpenEvent = Event<
    MenuItem$OpenEventParameters,
    MenuItem
  >;
  export interface MenuItem$BeforeCloseEventParameters {
    /**
     * Indicates that `ESC` key has triggered the event.
     */
    escPressed?: boolean;
  }

  export type MenuItem$BeforeCloseEvent = Event<
    MenuItem$BeforeCloseEventParameters,
    MenuItem
  >;
  export interface MenuItem$CloseEventParameters {}

  export type MenuItem$CloseEvent = Event<
    MenuItem$CloseEventParameters,
    MenuItem
  >;
  export interface MenuItem$CheckEventParameters {}

  export type MenuItem$CheckEvent = Event<
    MenuItem$CheckEventParameters,
    MenuItem
  >;
  export interface MenuItem$DetailClickEventParameters {}

  export type MenuItem$DetailClickEvent = Event<
    MenuItem$DetailClickEventParameters,
    MenuItem
  >;

  export default class MenuItem extends ListItem implements IMenuItem {
    __implements__ui5_webcomponents_IMenuItem: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/MenuItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, MenuItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/MenuItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text of the tree item.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text of the tree item.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getAdditionalText additionalText}.
     * Defines the `additionalText`, displayed in the end of the menu item.
     *
     * **Note:** The additional text will not be displayed if there are items added in `items` slot or there are
     * components added to `endContent` slot.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     * @returns The content of the property
     */
    getAdditionalText(): string;

    /**
     * Sets a new value for property {@link #getAdditionalText additionalText}.
     * Defines the `additionalText`, displayed in the end of the menu item.
     *
     * **Note:** The additional text will not be displayed if there are items added in `items` slot or there are
     * components added to `endContent` slot.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalText(additionalTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * **Example:**
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * **Example:**
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether menu item is in disabled state.
     *
     * **Note:** A disabled menu item is noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether menu item is in disabled state.
     *
     * **Note:** A disabled menu item is noninteractive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getLoading loading}.
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
     *
     * **Note:** If set to `true` a busy indicator component will be displayed into the related one to the current menu item sub-menu popover.
     * Default value is `false`.
     * @returns The content of the property
     */
    getLoading(): boolean;

    /**
     * Sets a new value for property {@link #getLoading loading}.
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
     *
     * **Note:** If set to `true` a busy indicator component will be displayed into the related one to the current menu item sub-menu popover.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoading(loadingValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
     * Default value is `1000`.
     * @returns The content of the property
     */
    getLoadingDelay(): float;

    /**
     * Sets a new value for property {@link #getLoadingDelay loadingDelay}.
     * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1000`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLoadingDelay(loadingDelayValue?: float | null): this;

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
     * Gets current value of property {@link #getChecked checked}.
     * Defines whether menu item is in checked state.
     *
     * **Note:** checked state is only taken into account when menu item is added to menu item group
     * with `checkMode` other than `None`.
     *
     * **Note:** A checked menu item has a checkmark displayed at its end.
     * Default value is `false`.
     * @returns The content of the property
     */
    getChecked(): boolean;

    /**
     * Sets a new value for property {@link #getChecked checked}.
     * Defines whether menu item is in checked state.
     *
     * **Note:** checked state is only taken into account when menu item is added to menu item group
     * with `checkMode` other than `None`.
     *
     * **Note:** A checked menu item has a checkmark displayed at its end.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setChecked(checkedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaKeyShortcuts**: Indicated the availability of a keyboard shortcuts defined for the menu item.
     *
     * - **role**: Defines the role of the menu item. If not set, menu item will have default role="menuitem".
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): MenuItemAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaKeyShortcuts**: Indicated the availability of a keyboard shortcuts defined for the menu item.
     *
     * - **role**: Defines the role of the menu item. If not set, menu item will have default role="menuitem".
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: MenuItemAccessibilityAttributes | null
    ): this;

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
     * Defines the items of this component.
     *
     * **Note:** The slot can hold menu item and menu separator items.
     *
     * If there are items added to this slot, an arrow will be displayed at the end
     * of the item in order to indicate that there are items added. In that case components added
     * to `endContent` slot or `additionalText` content will not be displayed.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     * @returns The content of the aggregation
     */
    getItems(): Array<IMenuItem> | IMenuItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<IMenuItem> | IMenuItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<IMenuItem> | IMenuItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<IMenuItem> | IMenuItem | int | ID
    ): Array<IMenuItem> | IMenuItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<IMenuItem> | IMenuItem;

    /**
     * Checks for the provided 'IMenuItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<IMenuItem> | IMenuItem): int;

    /**
     * Gets content of aggregation {@link #getEndContent endContent}.
     * Defines the components that should be displayed at the end of the menu item.
     *
     * **Note:** It is highly recommended to slot only components of type `ui5-button`,`ui5-link`
     * or `ui5-icon` in order to preserve the intended design. If there are components added to this slot,
     * and there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,
     * nether `additionalText` nor components added to this slot would be displayed.
     *
     * The priority of what will be displayed at the end of the menu item is as follows:
     * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
     *
     * Application developers are responsible for ensuring that interactive elements placed in the `endContent` slot
     * have the correct accessibility behaviour, including their enabled or disabled states.
     * The menu does not manage these aspects when the menu item state changes.
     * @returns The content of the aggregation
     */
    getEndContent(): Array<Control> | Control;

    /**
     * Destroys the endContent in the aggregation {@link #getEndContent endContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEndContent(): this;

    /**
     * Adds some endContent to the aggregation {@link #getEndContent endContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addEndContent(endContentValue: Array<Control> | Control): this;

    /**
     * Inserts an endContent into the aggregation {@link #getEndContent endContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertEndContent(
      endContentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an endContent from the aggregation {@link #getEndContent endContent}.
     * @returns The removed endContent or `null`
     */
    removeEndContent(
      endContentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getEndContent endContent}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllEndContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getEndContent endContent} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfEndContent(endContentValue: Array<Control> | Control): int;

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
     * Detaches event handler `fnFunction` from the {@link #getBeforeOpen beforeOpen} event of this `MenuItem`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeOpen beforeOpen} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeOpen(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$BeforeOpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `MenuItem`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getBeforeClose beforeClose} event of this `MenuItem`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getBeforeClose beforeClose} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachBeforeClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$BeforeCloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `MenuItem`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getCheck check} event of this `MenuItem`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCheck(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$CheckEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getCheck check} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCheck(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$CheckEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getCheck check} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCheck(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$CheckEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getDetailClick detailClick} event of this `MenuItem`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: MenuItem$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `MenuItem`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `MenuItem` itself.
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
      fnFunctionValue: (p1: MenuItem$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this MenuItem itself
       */
      oListenerValue?: object
    ): this;
  }
}
