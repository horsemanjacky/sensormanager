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

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { RatingIndicatorSize } from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/RatingIndicator" {
  export interface $RatingIndicatorSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * The indicated value of the rating.
     *
     * **Note:** If you set a number which is not round, it would be shown as follows:
     *
     * - 1.0 - 1.2 -> 1
     * - 1.3 - 1.7 -> 1.5
     * - 1.8 - 1.9 -> 2
     */
    value?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * The number of displayed rating symbols.
     */
    max?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the size of the component.
     */
    size?:
      | RatingIndicatorSize
      | keyof typeof RatingIndicatorSize
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component is disabled.
     *
     * **Note:** A disabled component is completely noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     */
    readonly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * The event is fired when the value changes.
     */
    change?: (oEvent: RatingIndicator$ChangeEvent) => void;
  }
  export interface RatingIndicator$ChangeEventParameters {}

  export type RatingIndicator$ChangeEvent = Event<
    RatingIndicator$ChangeEventParameters,
    RatingIndicator
  >;

  export default class RatingIndicator extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $RatingIndicatorSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $RatingIndicatorSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/RatingIndicator" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, RatingIndicator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/RatingIndicator".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getValue value}.
     * The indicated value of the rating.
     *
     * **Note:** If you set a number which is not round, it would be shown as follows:
     *
     * - 1.0 - 1.2 -> 1
     * - 1.3 - 1.7 -> 1.5
     * - 1.8 - 1.9 -> 2
     * Default value is `0`.
     * @returns The content of the property
     */
    getValue(): float;

    /**
     * Sets a new value for property {@link #getValue value}.
     * The indicated value of the rating.
     *
     * **Note:** If you set a number which is not round, it would be shown as follows:
     *
     * - 1.0 - 1.2 -> 1
     * - 1.3 - 1.7 -> 1.5
     * - 1.8 - 1.9 -> 2
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: float | null): this;

    /**
     * Gets current value of property {@link #getMax max}.
     * The number of displayed rating symbols.
     * Default value is `5`.
     * @returns The content of the property
     */
    getMax(): float;

    /**
     * Sets a new value for property {@link #getMax max}.
     * The number of displayed rating symbols.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `5`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMax(maxValue?: float | null): this;

    /**
     * Gets current value of property {@link #getSize size}.
     * Defines the size of the component.
     * Default value is `M`.
     * @returns The content of the property
     */
    getSize(): RatingIndicatorSize | keyof typeof RatingIndicatorSize;

    /**
     * Sets a new value for property {@link #getSize size}.
     * Defines the size of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `M`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSize(
      sizeValue?: RatingIndicatorSize | keyof typeof RatingIndicatorSize | null
    ): this;

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
     * Gets current value of property {@link #getRequired required}.
     * Defines whether the component is required.
     * Default value is `false`.
     * @returns The content of the property
     */
    getRequired(): boolean;

    /**
     * Sets a new value for property {@link #getRequired required}.
     * Defines whether the component is required.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(requiredValue?: boolean | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `RatingIndicator`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RatingIndicator$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RatingIndicator itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `RatingIndicator`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `RatingIndicator` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RatingIndicator$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RatingIndicator itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `RatingIndicator`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `RatingIndicator` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: RatingIndicator$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this RatingIndicator itself
       */
      oListenerValue?: object
    ): this;
  }
}
