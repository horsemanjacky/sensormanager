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

import type { default as Token } from "@ui5/webcomponents/dist/Token";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Tokenizer" {
  export interface $TokenizerSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     */
    readonly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether tokens are displayed on multiple lines.
     *
     * **Note:** The `multiLine` property is in an experimental state and is a subject to change.
     */
    multiLine?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * **Note:** When the component is used inside a form element,
     * the value is sent as the first element in the form data, even if it's empty.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.
     *
     * **Note:** The `showClearAll` property is in an experimental state and is a subject to change.
     */
    showClearAll?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is completely noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
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
     * Defines the tokens to be displayed.
     */
    tokens?: Array<Token> | Token | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when tokens are being deleted (delete icon, delete or backspace is pressed)
     */
    tokenDelete?: (oEvent: Tokenizer$TokenDeleteEvent) => void;

    /**
     * Fired when token selection is changed by user interaction
     */
    selectionChange?: (oEvent: Tokenizer$SelectionChangeEvent) => void;
  }
  export interface Tokenizer$TokenDeleteEventParameters {
    /**
     * An array containing the deleted tokens.
     */
    tokens?: any;
  }

  export type Tokenizer$TokenDeleteEvent = Event<
    Tokenizer$TokenDeleteEventParameters,
    Tokenizer
  >;
  export interface Tokenizer$SelectionChangeEventParameters {
    /**
     * An array of the selected items.
     */
    tokens?: Array<Token> | Token;
  }

  export type Tokenizer$SelectionChangeEvent = Event<
    Tokenizer$SelectionChangeEventParameters,
    Tokenizer
  >;

  export default class Tokenizer extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TokenizerSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TokenizerSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Tokenizer" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Tokenizer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Tokenizer".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getReadonly readonly}.
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * Default value is `false`.
     * @returns The content of the property
     */
    getReadonly(): boolean;

    /**
     * Sets a new value for property {@link #getReadonly readonly}.
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setReadonly(readonlyValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getMultiLine multiLine}.
     * Defines whether tokens are displayed on multiple lines.
     *
     * **Note:** The `multiLine` property is in an experimental state and is a subject to change.
     * Default value is `false`.
     * @returns The content of the property
     */
    getMultiLine(): boolean;

    /**
     * Sets a new value for property {@link #getMultiLine multiLine}.
     * Defines whether tokens are displayed on multiple lines.
     *
     * **Note:** The `multiLine` property is in an experimental state and is a subject to change.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMultiLine(multiLineValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getName name}.
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * **Note:** When the component is used inside a form element,
     * the value is sent as the first element in the form data, even if it's empty.
     * @returns The content of the property
     */
    getName(): string;

    /**
     * Sets a new value for property {@link #getName name}.
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * **Note:** When the component is used inside a form element,
     * the value is sent as the first element in the form data, even if it's empty.
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(nameValue: string | null): this;

    /**
     * Gets current value of property {@link #getShowClearAll showClearAll}.
     * Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.
     *
     * **Note:** The `showClearAll` property is in an experimental state and is a subject to change.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowClearAll(): boolean;

    /**
     * Sets a new value for property {@link #getShowClearAll showClearAll}.
     * Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.
     *
     * **Note:** The `showClearAll` property is in an experimental state and is a subject to change.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowClearAll(showClearAllValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is completely noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is completely noninteractive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getTokens tokens}.
     * Defines the tokens to be displayed.
     * @returns The content of the aggregation
     */
    getTokens(): Array<Token> | Token;

    /**
     * Destroys the tokens in the aggregation {@link #getTokens tokens}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyTokens(): this;

    /**
     * Adds some tokens to the aggregation {@link #getTokens tokens}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addToken(tokenValue: Array<Token> | Token): this;

    /**
     * Inserts a tokens into the aggregation {@link #getTokens tokens}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertToken(
      tokenValue: Array<Token> | Token,

      indexValue: int
    ): this;

    /**
     * Removes a tokens from the aggregation {@link #getTokens tokens}.
     * @returns The removed tokens or `null`
     */
    removeToken(
      tokenValue: Array<Token> | Token | int | ID
    ): Array<Token> | Token | null;

    /**
     * Removes all the controls from the aggregation {@link #getTokens tokens}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllTokens(): Array<Token> | Token;

    /**
     * Checks for the provided 'Token' in the aggregation {@link #getTokens tokens} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfToken(tokenValue: Array<Token> | Token): int;

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
     * Detaches event handler `fnFunction` from the {@link #getTokenDelete tokenDelete} event of this `Tokenizer`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachTokenDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tokenizer$TokenDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tokenizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getTokenDelete tokenDelete} event of this `Tokenizer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tokenizer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTokenDelete(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tokenizer$TokenDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tokenizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getTokenDelete tokenDelete} event of this `Tokenizer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tokenizer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachTokenDelete(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tokenizer$TokenDeleteEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tokenizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelectionChange selectionChange} event of this `Tokenizer`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tokenizer$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tokenizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Tokenizer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tokenizer` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Tokenizer$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tokenizer itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Tokenizer`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Tokenizer` itself.
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
      fnFunctionValue: (p1: Tokenizer$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Tokenizer itself
       */
      oListenerValue?: object
    ): this;
  }
}
