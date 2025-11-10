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
  default as TableHeaderCellActionBase,
  $TableHeaderCellActionBaseSettings
} from "@ui5/webcomponents/dist/TableHeaderCellActionBase";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/TableHeaderCellActionAI" {
  export interface $TableHeaderCellActionAISettings
    extends $TableHeaderCellActionBaseSettings {
    /**
     * Properties
     */

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
     * Events
     */

    /**
     * Fired when a header cell action is clicked.
     */
    click?: (oEvent: TableHeaderCellActionAI$ClickEvent) => void;
  }
  export interface TableHeaderCellActionAI$ClickEventParameters {
    /**
     * The reference to the element that triggered the event
     */
    targetRef?: Control;
  }

  export type TableHeaderCellActionAI$ClickEvent = Event<
    TableHeaderCellActionAI$ClickEventParameters,
    TableHeaderCellActionAI
  >;

  export default class TableHeaderCellActionAI extends TableHeaderCellActionBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableHeaderCellActionAISettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableHeaderCellActionAISettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableHeaderCellActionAI" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableHeaderCellActionAI>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableHeaderCellActionAI".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `TableHeaderCellActionAI`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableHeaderCellActionAI$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableHeaderCellActionAI itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `TableHeaderCellActionAI`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableHeaderCellActionAI` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableHeaderCellActionAI$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableHeaderCellActionAI itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `TableHeaderCellActionAI`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableHeaderCellActionAI` itself.
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
      fnFunctionValue: (p1: TableHeaderCellActionAI$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableHeaderCellActionAI itself
       */
      oListenerValue?: object
    ): this;
  }
}
