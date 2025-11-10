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

import type { PanelAccessibleRole, TitleLevel } from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Panel" {
  export interface $PanelSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * This property is used to set the header text of the component.
     * The text is visible in both expanded and collapsed states.
     *
     * **Note:** This property is overridden by the `header` slot.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component is in a fixed state that is not
     * expandable/collapsible by user interaction.
     */
    fixed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether the component is collapsed and only the header is displayed.
     */
    collapsed?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.
     */
    noAnimation?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the accessible ARIA role of the component.
     * Depending on the usage, you can change the role from the default `Form`
     * to `Region` or `Complementary`.
     */
    accessibleRole?:
      | PanelAccessibleRole
      | keyof typeof PanelAccessibleRole
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the "aria-level" of component heading,
     * set by the `headerText`.
     */
    headerLevel?:
      | TitleLevel
      | keyof typeof TitleLevel
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Indicates whether the Panel header is sticky or not.
     * If stickyHeader is set to true, then whenever you scroll the content or
     * the application, the header of the panel will be always visible and
     * a solid color will be used for its design.
     */
    stickyHeader?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the content of the component. The content is visible only when the component is expanded.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the component header area.
     *
     * **Note:** When a header is provided, the `headerText` property is ignored.
     */
    header?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the component is expanded/collapsed by user interaction.
     */
    toggle?: (oEvent: Panel$ToggleEvent) => void;
  }
  export interface Panel$ToggleEventParameters {}

  export type Panel$ToggleEvent = Event<Panel$ToggleEventParameters, Panel>;

  export default class Panel extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $PanelSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $PanelSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Panel" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Panel>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Panel".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * This property is used to set the header text of the component.
     * The text is visible in both expanded and collapsed states.
     *
     * **Note:** This property is overridden by the `header` slot.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * This property is used to set the header text of the component.
     * The text is visible in both expanded and collapsed states.
     *
     * **Note:** This property is overridden by the `header` slot.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getFixed fixed}.
     * Determines whether the component is in a fixed state that is not
     * expandable/collapsible by user interaction.
     * Default value is `false`.
     * @returns The content of the property
     */
    getFixed(): boolean;

    /**
     * Sets a new value for property {@link #getFixed fixed}.
     * Determines whether the component is in a fixed state that is not
     * expandable/collapsible by user interaction.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setFixed(fixedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getCollapsed collapsed}.
     * Indicates whether the component is collapsed and only the header is displayed.
     * Default value is `false`.
     * @returns The content of the property
     */
    getCollapsed(): boolean;

    /**
     * Sets a new value for property {@link #getCollapsed collapsed}.
     * Indicates whether the component is collapsed and only the header is displayed.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setCollapsed(collapsedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getNoAnimation noAnimation}.
     * Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.
     * Default value is `false`.
     * @returns The content of the property
     */
    getNoAnimation(): boolean;

    /**
     * Sets a new value for property {@link #getNoAnimation noAnimation}.
     * Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoAnimation(noAnimationValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAccessibleRole accessibleRole}.
     * Sets the accessible ARIA role of the component.
     * Depending on the usage, you can change the role from the default `Form`
     * to `Region` or `Complementary`.
     * Default value is `Form`.
     * @returns The content of the property
     */
    getAccessibleRole(): PanelAccessibleRole | keyof typeof PanelAccessibleRole;

    /**
     * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
     * Sets the accessible ARIA role of the component.
     * Depending on the usage, you can change the role from the default `Form`
     * to `Region` or `Complementary`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Form`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleRole(
      accessibleRoleValue?:
        | PanelAccessibleRole
        | keyof typeof PanelAccessibleRole
        | null
    ): this;

    /**
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     * Defines the "aria-level" of component heading,
     * set by the `headerText`.
     * Default value is `H2`.
     * @returns The content of the property
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;

    /**
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     * Defines the "aria-level" of component heading,
     * set by the `headerText`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `H2`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderLevel(
      headerLevelValue?: TitleLevel | keyof typeof TitleLevel | null
    ): this;

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
     * Gets current value of property {@link #getStickyHeader stickyHeader}.
     * Indicates whether the Panel header is sticky or not.
     * If stickyHeader is set to true, then whenever you scroll the content or
     * the application, the header of the panel will be always visible and
     * a solid color will be used for its design.
     * Default value is `false`.
     * @returns The content of the property
     */
    getStickyHeader(): boolean;

    /**
     * Sets a new value for property {@link #getStickyHeader stickyHeader}.
     * Indicates whether the Panel header is sticky or not.
     * If stickyHeader is set to true, then whenever you scroll the content or
     * the application, the header of the panel will be always visible and
     * a solid color will be used for its design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setStickyHeader(stickyHeaderValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getContent content}.
     * Defines the content of the component. The content is visible only when the component is expanded.
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
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the component header area.
     *
     * **Note:** When a header is provided, the `headerText` property is ignored.
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
     * Detaches event handler `fnFunction` from the {@link #getToggle toggle} event of this `Panel`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Panel$ToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Panel itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getToggle toggle} event of this `Panel`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Panel` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggle(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Panel$ToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Panel itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getToggle toggle} event of this `Panel`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Panel` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachToggle(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Panel$ToggleEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Panel itself
       */
      oListenerValue?: object
    ): this;
  }
}
