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

import type { ListItemType, Highlight, IButton } from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ListItemCustom" {
  export interface $ListItemCustomSettings extends $ListItemSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the item is movable.
     */
    movable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text alternative of the component.
     *
     * **Note**: If not provided a default text alternative will be set, if present.
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
     * Defines the content of the component.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

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
    detailClick?: (oEvent: ListItemCustom$DetailClickEvent) => void;
  }
  export interface ListItemCustom$DetailClickEventParameters {}

  export type ListItemCustom$DetailClickEvent = Event<
    ListItemCustom$DetailClickEventParameters,
    ListItemCustom
  >;

  export default class ListItemCustom extends ListItem {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ListItemCustomSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ListItemCustomSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ListItemCustom" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ListItemCustom>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ListItemCustom".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     *
     * **Note**: If not provided a default text alternative will be set, if present.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     *
     * **Note**: If not provided a default text alternative will be set, if present.
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
     * Defines the content of the component.
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
     * Detaches event handler `fnFunction` from the {@link #getDetailClick detailClick} event of this `ListItemCustom`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ListItemCustom$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ListItemCustom itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `ListItemCustom`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ListItemCustom` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ListItemCustom$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ListItemCustom itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `ListItemCustom`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ListItemCustom` itself.
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
      fnFunctionValue: (p1: ListItemCustom$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ListItemCustom itself
       */
      oListenerValue?: object
    ): this;
  }
}
