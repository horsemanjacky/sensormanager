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
  TabLayout,
  OverflowMode,
  BackgroundDesign,
  ITab,
  IButton
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

import type { default as Tab } from "@ui5/webcomponents/dist/Tab";

declare module "@ui5/webcomponents/dist/TabContainer" {
  export interface $TabContainerSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the tab content is collapsed.
     */
    collapsed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the alignment of the content and the `additionalText` of a tab.
     *
     * **Note:**
     * The content and the `additionalText` would be displayed vertically by default,
     * but when set to `Inline`, they would be displayed horizontally.
     */
    tabLayout?:
      | TabLayout
      | keyof typeof TabLayout
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
     * All other tabs that can 't fit on the screen are available in an overflow tab "More".
     *
     * **Note:**
     * Only one overflow at the end would be displayed by default,
     * but when set to `StartAndEnd`, there will be two overflows on both ends, and tab order will not change on tab selection.
     */
    overflowMode?:
      | OverflowMode
      | keyof typeof OverflowMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.
     */
    headerBackgroundDesign?:
      | BackgroundDesign
      | keyof typeof BackgroundDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.
     */
    contentBackgroundDesign?:
      | BackgroundDesign
      | keyof typeof BackgroundDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if automatic tab selection is deactivated.
     *
     * **Note:** By default, if none of the child tabs have the `selected` property set, the first tab will be automatically selected.
     * Setting this property to `true` allows preventing this behavior.
     */
    noAutoSelection?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the tabs.
     *
     * **Note:** Use `ui5-tab` and `ui5-tab-separator` for the intended design.
     */
    items?: Array<ITab> | ITab | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the button which will open the overflow menu. If nothing is provided to this slot,
     * the default button will be used.
     */
    overflowButton?:
      | Array<IButton>
      | IButton
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
     * the default button will be used.
     */
    startOverflowButton?:
      | Array<IButton>
      | IButton
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when a tab is selected.
     */
    tabSelect?: (oEvent: TabContainer$TabSelectEvent) => void;

    /**
     * Fired when element is being moved over the tab container.
     *
     * If the new position is valid, prevent the default action of the event using `preventDefault()`.
     */
    moveOver?: (oEvent: TabContainer$MoveOverEvent) => void;

    /**
     * Fired when element is moved to the tab container.
     *
     * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
     */
    move?: (oEvent: TabContainer$MoveEvent) => void;
  }
  export interface TabContainer$TabSelectEventParameters {
    /**
     * The selected `tab`.
     */
    tab?: Tab;

    /**
     * The selected `tab` index in the flattened array of all tabs and their subTabs, provided by the `allItems` getter.
     */
    tabIndex?: int;
  }

  export type TabContainer$TabSelectEvent = Event<
    TabContainer$TabSelectEventParameters,
    TabContainer
  >;
  export interface TabContainer$MoveOverEventParameters {
    /**
     * Contains information about the moved element under `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type TabContainer$MoveOverEvent = Event<
    TabContainer$MoveOverEventParameters,
    TabContainer
  >;
  export interface TabContainer$MoveEventParameters {
    /**
     * Contains information about the moved element under `element` property.
     */
    source?: object;

    /**
     * Contains information about the destination of the moved element. Has `element` and `placement` properties.
     */
    destination?: object;
  }

  export type TabContainer$MoveEvent = Event<
    TabContainer$MoveEventParameters,
    TabContainer
  >;

  export default class TabContainer extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TabContainerSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TabContainerSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TabContainer" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TabContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TabContainer".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getCollapsed collapsed}.
     * Defines whether the tab content is collapsed.
     * Default value is `false`.
     * @returns The content of the property
     */
    getCollapsed(): boolean;

    /**
     * Sets a new value for property {@link #getCollapsed collapsed}.
     * Defines whether the tab content is collapsed.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setCollapsed(collapsedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getTabLayout tabLayout}.
     * Defines the alignment of the content and the `additionalText` of a tab.
     *
     * **Note:**
     * The content and the `additionalText` would be displayed vertically by default,
     * but when set to `Inline`, they would be displayed horizontally.
     * Default value is `Standard`.
     * @returns The content of the property
     */
    getTabLayout(): TabLayout | keyof typeof TabLayout;

    /**
     * Sets a new value for property {@link #getTabLayout tabLayout}.
     * Defines the alignment of the content and the `additionalText` of a tab.
     *
     * **Note:**
     * The content and the `additionalText` would be displayed vertically by default,
     * but when set to `Inline`, they would be displayed horizontally.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setTabLayout(
      tabLayoutValue?: TabLayout | keyof typeof TabLayout | null
    ): this;

    /**
     * Gets current value of property {@link #getOverflowMode overflowMode}.
     * Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
     * All other tabs that can 't fit on the screen are available in an overflow tab "More".
     *
     * **Note:**
     * Only one overflow at the end would be displayed by default,
     * but when set to `StartAndEnd`, there will be two overflows on both ends, and tab order will not change on tab selection.
     * Default value is `End`.
     * @returns The content of the property
     */
    getOverflowMode(): OverflowMode | keyof typeof OverflowMode;

    /**
     * Sets a new value for property {@link #getOverflowMode overflowMode}.
     * Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
     * All other tabs that can 't fit on the screen are available in an overflow tab "More".
     *
     * **Note:**
     * Only one overflow at the end would be displayed by default,
     * but when set to `StartAndEnd`, there will be two overflows on both ends, and tab order will not change on tab selection.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `End`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOverflowMode(
      overflowModeValue?: OverflowMode | keyof typeof OverflowMode | null
    ): this;

    /**
     * Gets current value of property {@link #getHeaderBackgroundDesign headerBackgroundDesign}.
     * Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.
     * Default value is `Solid`.
     * @returns The content of the property
     */
    getHeaderBackgroundDesign():
      | BackgroundDesign
      | keyof typeof BackgroundDesign;

    /**
     * Sets a new value for property {@link #getHeaderBackgroundDesign headerBackgroundDesign}.
     * Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderBackgroundDesign(
      headerBackgroundDesignValue?:
        | BackgroundDesign
        | keyof typeof BackgroundDesign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getContentBackgroundDesign contentBackgroundDesign}.
     * Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.
     * Default value is `Solid`.
     * @returns The content of the property
     */
    getContentBackgroundDesign():
      | BackgroundDesign
      | keyof typeof BackgroundDesign;

    /**
     * Sets a new value for property {@link #getContentBackgroundDesign contentBackgroundDesign}.
     * Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setContentBackgroundDesign(
      contentBackgroundDesignValue?:
        | BackgroundDesign
        | keyof typeof BackgroundDesign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getNoAutoSelection noAutoSelection}.
     * Defines if automatic tab selection is deactivated.
     *
     * **Note:** By default, if none of the child tabs have the `selected` property set, the first tab will be automatically selected.
     * Setting this property to `true` allows preventing this behavior.
     * Default value is `false`.
     * @returns The content of the property
     */
    getNoAutoSelection(): boolean;

    /**
     * Sets a new value for property {@link #getNoAutoSelection noAutoSelection}.
     * Defines if automatic tab selection is deactivated.
     *
     * **Note:** By default, if none of the child tabs have the `selected` property set, the first tab will be automatically selected.
     * Setting this property to `true` allows preventing this behavior.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoAutoSelection(noAutoSelectionValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAllItems allItems}.
     * Returns all slotted tabs and their subTabs in a flattened array.
     * The order of tabs is depth-first.
     * @returns The content of the property
     */
    getAllItems(): Array<ITab> | ITab;

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
     * Defines the tabs.
     *
     * **Note:** Use `ui5-tab` and `ui5-tab-separator` for the intended design.
     * @returns The content of the aggregation
     */
    getItems(): Array<ITab> | ITab;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<ITab> | ITab): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<ITab> | ITab,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<ITab> | ITab | int | ID
    ): Array<ITab> | ITab | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<ITab> | ITab;

    /**
     * Checks for the provided 'ITab' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<ITab> | ITab): int;

    /**
     * Gets content of aggregation {@link #getOverflowButton overflowButton}.
     * Defines the button which will open the overflow menu. If nothing is provided to this slot,
     * the default button will be used.
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
     * Gets content of aggregation {@link #getStartOverflowButton startOverflowButton}.
     * Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
     * the default button will be used.
     * @returns The content of the aggregation
     */
    getStartOverflowButton(): Array<IButton> | IButton;

    /**
     * Destroys the startOverflowButton in the aggregation {@link #getStartOverflowButton startOverflowButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyStartOverflowButton(): this;

    /**
     * Adds some startOverflowButton to the aggregation {@link #getStartOverflowButton startOverflowButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addStartOverflowButton(
      startOverflowButtonValue: Array<IButton> | IButton
    ): this;

    /**
     * Inserts a startOverflowButton into the aggregation {@link #getStartOverflowButton startOverflowButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertStartOverflowButton(
      startOverflowButtonValue: Array<IButton> | IButton,

      indexValue: int
    ): this;

    /**
     * Removes a startOverflowButton from the aggregation {@link #getStartOverflowButton startOverflowButton}.
     * @returns The removed startOverflowButton or `null`
     */
    removeStartOverflowButton(
      startOverflowButtonValue: Array<IButton> | IButton | int | ID
    ): Array<IButton> | IButton | null;

    /**
     * Removes all the controls from the aggregation {@link #getStartOverflowButton startOverflowButton}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllStartOverflowButton(): Array<IButton> | IButton;

    /**
     * Checks for the provided 'IButton' in the aggregation {@link #getStartOverflowButton startOverflowButton} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfStartOverflowButton(
      startOverflowButtonValue: Array<IButton> | IButton
    ): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getTabSelect tabSelect} event of this `TabContainer`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTabSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$TabSelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getTabSelect tabSelect} event of this `TabContainer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TabContainer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTabSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$TabSelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getTabSelect tabSelect} event of this `TabContainer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TabContainer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTabSelect(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$TabSelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMoveOver moveOver} event of this `TabContainer`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `TabContainer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TabContainer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMoveOver(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMoveOver moveOver} event of this `TabContainer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TabContainer` itself.
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
      fnFunctionValue: (p1: TabContainer$MoveOverEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getMove move} event of this `TabContainer`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `TabContainer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TabContainer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMove(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TabContainer$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getMove move} event of this `TabContainer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TabContainer` itself.
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
      fnFunctionValue: (p1: TabContainer$MoveEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TabContainer itself
       */
      oListenerValue?: object
    ): this;
  }
}
