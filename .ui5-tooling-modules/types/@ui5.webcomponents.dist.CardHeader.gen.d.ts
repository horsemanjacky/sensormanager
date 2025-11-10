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

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/CardHeader" {
  export interface $CardHeaderSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the title text.
     */
    titleText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the subtitle text.
     */
    subtitleText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional text.
     */
    additionalText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the component would be interactive,
     * e.g gets hover effect and `click` event is fired, when pressed.
     */
    interactive?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines an avatar image, displayed in the left most part of the header.
     */
    avatar?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines an action, displayed in the right most part of the header.
     */
    action?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the component is activated by mouse/tap or by using the Enter or Space key.
     *
     * **Note:** The event would be fired only if the `interactive` property is set to true.
     */
    click?: (oEvent: CardHeader$ClickEvent) => void;
  }
  export interface CardHeader$ClickEventParameters {}

  export type CardHeader$ClickEvent = Event<
    CardHeader$ClickEventParameters,
    CardHeader
  >;

  export default class CardHeader extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CardHeaderSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CardHeaderSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/CardHeader" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, CardHeader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/CardHeader".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getTitleText titleText}.
     * Defines the title text.
     * @returns The content of the property
     */
    getTitleText(): string;

    /**
     * Sets a new value for property {@link #getTitleText titleText}.
     * Defines the title text.
     * @returns Reference to `this` in order to allow method chaining
     */
    setTitleText(titleTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getSubtitleText subtitleText}.
     * Defines the subtitle text.
     * @returns The content of the property
     */
    getSubtitleText(): string;

    /**
     * Sets a new value for property {@link #getSubtitleText subtitleText}.
     * Defines the subtitle text.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtitleText(subtitleTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getAdditionalText additionalText}.
     * Defines the additional text.
     * @returns The content of the property
     */
    getAdditionalText(): string;

    /**
     * Sets a new value for property {@link #getAdditionalText additionalText}.
     * Defines the additional text.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalText(additionalTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getInteractive interactive}.
     * Defines if the component would be interactive,
     * e.g gets hover effect and `click` event is fired, when pressed.
     * Default value is `false`.
     * @returns The content of the property
     */
    getInteractive(): boolean;

    /**
     * Sets a new value for property {@link #getInteractive interactive}.
     * Defines if the component would be interactive,
     * e.g gets hover effect and `click` event is fired, when pressed.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractive(interactiveValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getAvatar avatar}.
     * Defines an avatar image, displayed in the left most part of the header.
     * @returns The content of the aggregation
     */
    getAvatar(): Array<Control> | Control;

    /**
     * Destroys the avatar in the aggregation {@link #getAvatar avatar}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAvatar(): this;

    /**
     * Adds some avatar to the aggregation {@link #getAvatar avatar}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addAvatar(avatarValue: Array<Control> | Control): this;

    /**
     * Inserts an avatar into the aggregation {@link #getAvatar avatar}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAvatar(
      avatarValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an avatar from the aggregation {@link #getAvatar avatar}.
     * @returns The removed avatar or `null`
     */
    removeAvatar(
      avatarValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getAvatar avatar}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAvatar(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getAvatar avatar} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAvatar(avatarValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getAction action}.
     * Defines an action, displayed in the right most part of the header.
     * @returns The content of the aggregation
     */
    getAction(): Array<Control> | Control;

    /**
     * Destroys the action in the aggregation {@link #getAction action}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyAction(): this;

    /**
     * Adds some action to the aggregation {@link #getAction action}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addAction(actionValue: Array<Control> | Control): this;

    /**
     * Inserts an action into the aggregation {@link #getAction action}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertAction(
      actionValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an action from the aggregation {@link #getAction action}.
     * @returns The removed action or `null`
     */
    removeAction(
      actionValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getAction action}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAction(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getAction action} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfAction(actionValue: Array<Control> | Control): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `CardHeader`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: CardHeader$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this CardHeader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `CardHeader`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `CardHeader` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: CardHeader$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this CardHeader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `CardHeader`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `CardHeader` itself.
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
      fnFunctionValue: (p1: CardHeader$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this CardHeader itself
       */
      oListenerValue?: object
    ): this;
  }
}
