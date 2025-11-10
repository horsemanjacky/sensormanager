// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { AvatarGroupAccessibilityAttributes } from "@ui5/webcomponents/dist/AvatarGroup";

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
  AvatarGroupType,
  IAvatarGroupItem,
  AvatarColorScheme,
  IButton
} from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/AvatarGroup" {
  export interface $AvatarGroupSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the mode of the `AvatarGroup`.
     */
    type?:
      | AvatarGroupType
      | keyof typeof AvatarGroupType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following field is supported:
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     */
    accessibilityAttributes?:
      | AvatarGroupAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible name of the AvatarGroup.
     * When provided, this will override the default aria-label text.
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
     * Defines the items of the component. Use the `ui5-avatar` component as an item.
     *
     * **Note:** The UX guidelines recommends using avatars with "Circle" shape.
     *
     * Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
     * as the built-in overflow action has "Circle" shape.
     */
    items?:
      | Array<IAvatarGroupItem>
      | IAvatarGroupItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the overflow button of the component.
     *
     * **Note:** We recommend using the `ui5-button` component.
     *
     * **Note:** If this slot is not used, the component will display the built-in overflow button.
     */
    overflowButton?:
      | Array<IButton>
      | IButton
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(s) of the elements that describe the AvatarGroup.
     * When provided, this will be used as aria-labelledby instead of aria-label.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the component is activated either with a
     * click/tap or by using the Enter or Space key.
     */
    click?: (oEvent: AvatarGroup$ClickEvent) => void;

    /**
     * Fired when the count of visible `ui5-avatar` elements in the
     * component has changed
     */
    overflow?: (oEvent: AvatarGroup$OverflowEvent) => void;
  }
  export interface AvatarGroup$ClickEventParameters {
    /**
     * The DOM ref of the clicked item.
     */
    targetRef?: Control;

    /**
     * indicates if the overflow button is clicked
     */
    overflowButtonClicked?: boolean;
  }

  export type AvatarGroup$ClickEvent = Event<
    AvatarGroup$ClickEventParameters,
    AvatarGroup
  >;
  export interface AvatarGroup$OverflowEventParameters {}

  export type AvatarGroup$OverflowEvent = Event<
    AvatarGroup$OverflowEventParameters,
    AvatarGroup
  >;

  export default class AvatarGroup extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarGroupSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $AvatarGroupSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/AvatarGroup" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, AvatarGroup>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/AvatarGroup".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getType type}.
     * Defines the mode of the `AvatarGroup`.
     * Default value is `Group`.
     * @returns The content of the property
     */
    getType(): AvatarGroupType | keyof typeof AvatarGroupType;

    /**
     * Sets a new value for property {@link #getType type}.
     * Defines the mode of the `AvatarGroup`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Group`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      typeValue?: AvatarGroupType | keyof typeof AvatarGroupType | null
    ): this;

    /**
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following field is supported:
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): AvatarGroupAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following field is supported:
     *
     * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
     * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: AvatarGroupAccessibilityAttributes | null
    ): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the AvatarGroup.
     * When provided, this will override the default aria-label text.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the AvatarGroup.
     * When provided, this will override the default aria-label text.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getHiddenItems hiddenItems}.
     * Returns an array containing the `ui5-avatar` instances that are currently not displayed due to lack of space.
     * @returns The content of the property
     */
    getHiddenItems(): Array<IAvatarGroupItem> | IAvatarGroupItem;

    /**
     * Gets current value of property {@link #getColorScheme colorScheme}.
     * Returns an array containing the `AvatarColorScheme` values that correspond to the avatars in the component.
     * @returns The content of the property
     */
    getColorScheme():
      | Array<AvatarColorScheme | keyof typeof AvatarColorScheme>
      | AvatarColorScheme
      | keyof typeof AvatarColorScheme;

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
     * Defines the items of the component. Use the `ui5-avatar` component as an item.
     *
     * **Note:** The UX guidelines recommends using avatars with "Circle" shape.
     *
     * Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
     * as the built-in overflow action has "Circle" shape.
     * @returns The content of the aggregation
     */
    getItems(): Array<IAvatarGroupItem> | IAvatarGroupItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<IAvatarGroupItem> | IAvatarGroupItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<IAvatarGroupItem> | IAvatarGroupItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<IAvatarGroupItem> | IAvatarGroupItem | int | ID
    ): Array<IAvatarGroupItem> | IAvatarGroupItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<IAvatarGroupItem> | IAvatarGroupItem;

    /**
     * Checks for the provided 'IAvatarGroupItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<IAvatarGroupItem> | IAvatarGroupItem): int;

    /**
     * Gets content of aggregation {@link #getOverflowButton overflowButton}.
     * Defines the overflow button of the component.
     *
     * **Note:** We recommend using the `ui5-button` component.
     *
     * **Note:** If this slot is not used, the component will display the built-in overflow button.
     * @returns The content of the aggregation
     */
    getOverflowButton(): Array<IButton> | IButton;

    /**
     * Destroys the overflowButton in the aggregation {@link #getOverflowButton overflowButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyOverflowButton(): this;

    /**
     * Adds some overflowButton to the aggregation {@link #getOverflowButton overflowButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addOverflowButton(overflowButtonValue: Array<IButton> | IButton): this;

    /**
     * Inserts an overflowButton into the aggregation {@link #getOverflowButton overflowButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertOverflowButton(
      overflowButtonValue: Array<IButton> | IButton,

      indexValue: int
    ): this;

    /**
     * Removes an overflowButton from the aggregation {@link #getOverflowButton overflowButton}.
     * @returns The removed overflowButton or `null`
     */
    removeOverflowButton(
      overflowButtonValue: Array<IButton> | IButton | int | ID
    ): Array<IButton> | IButton | null;

    /**
     * Removes all the controls from the aggregation {@link #getOverflowButton overflowButton}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllOverflowButton(): Array<IButton> | IButton;

    /**
     * Checks for the provided 'IButton' in the aggregation {@link #getOverflowButton overflowButton} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfOverflowButton(overflowButtonValue: Array<IButton> | IButton): int;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `AvatarGroup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: AvatarGroup$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this AvatarGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `AvatarGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `AvatarGroup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: AvatarGroup$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this AvatarGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `AvatarGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `AvatarGroup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: AvatarGroup$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this AvatarGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOverflow overflow} event of this `AvatarGroup`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOverflow(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: AvatarGroup$OverflowEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this AvatarGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOverflow overflow} event of this `AvatarGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `AvatarGroup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOverflow(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: AvatarGroup$OverflowEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this AvatarGroup itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOverflow overflow} event of this `AvatarGroup`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `AvatarGroup` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOverflow(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: AvatarGroup$OverflowEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this AvatarGroup itself
       */
      oListenerValue?: object
    ): this;
  }
}
