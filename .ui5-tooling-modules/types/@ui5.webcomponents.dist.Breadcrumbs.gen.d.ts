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
  BreadcrumbsDesign,
  BreadcrumbsSeparator
} from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as BreadcrumbsItem } from "@ui5/webcomponents/dist/BreadcrumbsItem";

import type { default as Event } from "sap/ui/base/Event";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/Breadcrumbs" {
  export interface $BreadcrumbsSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the visual appearance of the last BreadcrumbsItem.
     *
     * The Breadcrumbs supports two visual appearances for the last BreadcrumbsItem:
     * - "Standard" - displaying the last item as "current page" (bold and without separator)
     * - "NoCurrentPage" - displaying the last item as a regular BreadcrumbsItem, followed by separator
     */
    design?:
      | BreadcrumbsDesign
      | keyof typeof BreadcrumbsDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the visual style of the separator between the breadcrumb items.
     */
    separators?:
      | BreadcrumbsSeparator
      | keyof typeof BreadcrumbsSeparator
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
     * Defines the component items.
     *
     * **Note:** Use the `ui5-breadcrumbs-item` component to define the desired items.
     */
    items?:
      | Array<BreadcrumbsItem>
      | BreadcrumbsItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fires when a `BreadcrumbsItem` is clicked.
     *
     * **Note:** You can prevent browser location change by calling `event.preventDefault()`.
     */
    itemClick?: (oEvent: Breadcrumbs$ItemClickEvent) => void;
  }
  export interface Breadcrumbs$ItemClickEventParameters {
    /**
     * The clicked item.
     */
    item?: Control;

    /**
     * Returns whether the "ALT" key was pressed when the event was triggered.
     */
    altKey?: boolean;

    /**
     * Returns whether the "CTRL" key was pressed when the event was triggered.
     */
    ctrlKey?: boolean;

    /**
     * Returns whether the "META" key was pressed when the event was triggered.
     */
    metaKey?: boolean;

    /**
     * Returns whether the "SHIFT" key was pressed when the event was triggered.
     */
    shiftKey?: boolean;
  }

  export type Breadcrumbs$ItemClickEvent = Event<
    Breadcrumbs$ItemClickEventParameters,
    Breadcrumbs
  >;

  export default class Breadcrumbs extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BreadcrumbsSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $BreadcrumbsSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Breadcrumbs" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Breadcrumbs>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Breadcrumbs".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the visual appearance of the last BreadcrumbsItem.
     *
     * The Breadcrumbs supports two visual appearances for the last BreadcrumbsItem:
     * - "Standard" - displaying the last item as "current page" (bold and without separator)
     * - "NoCurrentPage" - displaying the last item as a regular BreadcrumbsItem, followed by separator
     * Default value is `Standard`.
     * @returns The content of the property
     */
    getDesign(): BreadcrumbsDesign | keyof typeof BreadcrumbsDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the visual appearance of the last BreadcrumbsItem.
     *
     * The Breadcrumbs supports two visual appearances for the last BreadcrumbsItem:
     * - "Standard" - displaying the last item as "current page" (bold and without separator)
     * - "NoCurrentPage" - displaying the last item as a regular BreadcrumbsItem, followed by separator
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: BreadcrumbsDesign | keyof typeof BreadcrumbsDesign | null
    ): this;

    /**
     * Gets current value of property {@link #getSeparators separators}.
     * Determines the visual style of the separator between the breadcrumb items.
     * Default value is `Slash`.
     * @returns The content of the property
     */
    getSeparators(): BreadcrumbsSeparator | keyof typeof BreadcrumbsSeparator;

    /**
     * Sets a new value for property {@link #getSeparators separators}.
     * Determines the visual style of the separator between the breadcrumb items.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Slash`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSeparators(
      separatorsValue?:
        | BreadcrumbsSeparator
        | keyof typeof BreadcrumbsSeparator
        | null
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
     * Defines the component items.
     *
     * **Note:** Use the `ui5-breadcrumbs-item` component to define the desired items.
     * @returns The content of the aggregation
     */
    getItems(): Array<BreadcrumbsItem> | BreadcrumbsItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<BreadcrumbsItem> | BreadcrumbsItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<BreadcrumbsItem> | BreadcrumbsItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<BreadcrumbsItem> | BreadcrumbsItem | int | ID
    ): Array<BreadcrumbsItem> | BreadcrumbsItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<BreadcrumbsItem> | BreadcrumbsItem;

    /**
     * Checks for the provided 'BreadcrumbsItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<BreadcrumbsItem> | BreadcrumbsItem): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getItemClick itemClick} event of this `Breadcrumbs`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Breadcrumbs$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Breadcrumbs itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `Breadcrumbs`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Breadcrumbs` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachItemClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Breadcrumbs$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Breadcrumbs itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getItemClick itemClick} event of this `Breadcrumbs`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Breadcrumbs` itself.
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
      fnFunctionValue: (p1: Breadcrumbs$ItemClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Breadcrumbs itself
       */
      oListenerValue?: object
    ): this;
  }
}
