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
  default as ListItemGroup,
  $ListItemGroupSettings
} from "@ui5/webcomponents/dist/ListItemGroup";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { WrappingType } from "@ui5/webcomponents";

import type { ID } from "sap/ui/core/library";

import type { default as ListItemBase } from "@ui5/webcomponents/dist/ListItemBase";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/SuggestionItemGroup" {
  export interface $SuggestionItemGroupSettings extends $ListItemGroupSettings {
    /**
     * Properties
     */

    /**
     * Defines the header text of the <code>ui5-li-group</code>.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible name of the header.
     */
    headerAccessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the text of the component should wrap when it's too long.
     * When set to "Normal", the content (title, description) will be wrapped
     * using the `ui5-expandable-text` component.<br/>
     *
     * The text can wrap up to 100 characters on small screens (size S) and
     * up to 300 characters on larger screens (size M and above). When text exceeds
     * these limits, it truncates with an ellipsis followed by a text expansion trigger.
     *
     * Available options are:
     * - `None` (default) - The text will truncate with an ellipsis.
     * - `Normal` - The text will wrap (without truncation).
     */
    wrappingType?:
      | WrappingType
      | keyof typeof WrappingType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the items of the <code>ui5-suggestion-item-group</code>.
     */
    items?: Array<any> | any | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the header of the component.
     *
     * **Note:** Using this slot, the default header text of group and the value of `headerText` property will be overwritten.
     */
    header?:
      | Array<ListItemBase>
      | ListItemBase
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when a movable list item is moved over a potential drop target during a dragging operation.
     *
     * If the new position is valid, prevent the default action of the event using `preventDefault()`.
     */
    moveOver?: (oEvent: SuggestionItemGroup$MoveOverEvent) => void;

    /**
     * Fired when a movable list item is dropped onto a drop target.
     *
     * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
     */
    move?: (oEvent: SuggestionItemGroup$MoveEvent) => void;
  }
  export interface SuggestionItemGroup$MoveOverEventParameters {
    /**
     * Contains information about the moved element under `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type SuggestionItemGroup$MoveOverEvent = Event<
    SuggestionItemGroup$MoveOverEventParameters,
    SuggestionItemGroup
  >;
  export interface SuggestionItemGroup$MoveEventParameters {
    /**
     * Contains information about the moved element under `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type SuggestionItemGroup$MoveEvent = Event<
    SuggestionItemGroup$MoveEventParameters,
    SuggestionItemGroup
  >;

  export default class SuggestionItemGroup extends ListItemGroup {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SuggestionItemGroupSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SuggestionItemGroupSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/SuggestionItemGroup" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, SuggestionItemGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/SuggestionItemGroup".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines the header text of the <code>ui5-li-group</code>.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines the header text of the <code>ui5-li-group</code>.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getHeaderAccessibleName headerAccessibleName}.
     * Defines the accessible name of the header.
     * @returns The content of the property
     */
    getHeaderAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getHeaderAccessibleName headerAccessibleName}.
     * Defines the accessible name of the header.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderAccessibleName(headerAccessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getWrappingType wrappingType}.
     * Defines if the text of the component should wrap when it's too long.
     * When set to "Normal", the content (title, description) will be wrapped
     * using the `ui5-expandable-text` component.<br/>
     *
     * The text can wrap up to 100 characters on small screens (size S) and
     * up to 300 characters on larger screens (size M and above). When text exceeds
     * these limits, it truncates with an ellipsis followed by a text expansion trigger.
     *
     * Available options are:
     * - `None` (default) - The text will truncate with an ellipsis.
     * - `Normal` - The text will wrap (without truncation).
     * Default value is `None`.
     * @returns The content of the property
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;

    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     * Defines if the text of the component should wrap when it's too long.
     * When set to "Normal", the content (title, description) will be wrapped
     * using the `ui5-expandable-text` component.<br/>
     *
     * The text can wrap up to 100 characters on small screens (size S) and
     * up to 300 characters on larger screens (size M and above). When text exceeds
     * these limits, it truncates with an ellipsis followed by a text expansion trigger.
     *
     * Available options are:
     * - `None` (default) - The text will truncate with an ellipsis.
     * - `Normal` - The text will wrap (without truncation).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      wrappingTypeValue?: WrappingType | keyof typeof WrappingType | null
    ): this;

    /**
     * Gets content of aggregation {@link #getItems items}.
     * Defines the items of the <code>ui5-suggestion-item-group</code>.
     * @returns The content of the aggregation
     */
    getItems(): Array<any> | any;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<any> | any): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<any> | any,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(itemValue: Array<any> | any | int | ID): Array<any> | any | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<any> | any;

    /**
     * Checks for the provided 'any' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<any> | any): int;

    /**
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the header of the component.
     *
     * **Note:** Using this slot, the default header text of group and the value of `headerText` property will be overwritten.
     * @returns The content of the aggregation
     */
    getHeader(): Array<ListItemBase> | ListItemBase;

    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;

    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeader(headerValue: Array<ListItemBase> | ListItemBase): this;

    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeader(
      headerValue: Array<ListItemBase> | ListItemBase,

      indexValue: int
    ): this;

    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     * @returns The removed header or `null`
     */
    removeHeader(
      headerValue: Array<ListItemBase> | ListItemBase | int | ID
    ): Array<ListItemBase> | ListItemBase | null;

    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeader(): Array<ListItemBase> | ListItemBase;

    /**
     * Checks for the provided 'ListItemBase' in the aggregation {@link #getHeader header} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeader(headerValue: Array<ListItemBase> | ListItemBase): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMoveOver moveOver} event of this `SuggestionItemGroup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SuggestionItemGroup$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SuggestionItemGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `SuggestionItemGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SuggestionItemGroup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SuggestionItemGroup$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SuggestionItemGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `SuggestionItemGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SuggestionItemGroup` itself.
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
      fnFunctionValue: (p1: SuggestionItemGroup$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SuggestionItemGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMove move} event of this `SuggestionItemGroup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SuggestionItemGroup$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SuggestionItemGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `SuggestionItemGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SuggestionItemGroup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: SuggestionItemGroup$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SuggestionItemGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `SuggestionItemGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `SuggestionItemGroup` itself.
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
      fnFunctionValue: (p1: SuggestionItemGroup$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this SuggestionItemGroup itself
       */
      oListenerValue?: object
    ): this;
  }
}
