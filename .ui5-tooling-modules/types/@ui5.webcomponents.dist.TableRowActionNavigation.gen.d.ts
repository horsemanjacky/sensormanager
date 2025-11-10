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
  default as TableRowActionBase,
  $TableRowActionBaseSettings
} from "@ui5/webcomponents/dist/TableRowActionBase";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TableRowActionNavigation" {
  export interface $TableRowActionNavigationSettings
    extends $TableRowActionBaseSettings {
    /**
     * Properties
     */

    /**
     * Defines the interactive state of the navigation action.
     */
    interactive?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the row action.
     *
     * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
     */
    invisible?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Fired when a row action is clicked.
     */
    click?: (oEvent: TableRowActionNavigation$ClickEvent) => void;
  }
  export interface TableRowActionNavigation$ClickEventParameters {}

  export type TableRowActionNavigation$ClickEvent = Event<
    TableRowActionNavigation$ClickEventParameters,
    TableRowActionNavigation
  >;

  export default class TableRowActionNavigation extends TableRowActionBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableRowActionNavigationSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableRowActionNavigationSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableRowActionNavigation" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableRowActionNavigation>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableRowActionNavigation".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getInteractive interactive}.
     * Defines the interactive state of the navigation action.
     * Default value is `false`.
     * @returns The content of the property
     */
    getInteractive(): boolean;

    /**
     * Sets a new value for property {@link #getInteractive interactive}.
     * Defines the interactive state of the navigation action.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInteractive(interactiveValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getInvisible invisible}.
     * Defines the visibility of the row action.
     *
     * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
     * Default value is `false`.
     * @returns The content of the property
     */
    getInvisible(): boolean;

    /**
     * Sets a new value for property {@link #getInvisible invisible}.
     * Defines the visibility of the row action.
     *
     * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setInvisible(invisibleValue?: boolean | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `TableRowActionNavigation`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableRowActionNavigation$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableRowActionNavigation itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `TableRowActionNavigation`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableRowActionNavigation` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableRowActionNavigation$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableRowActionNavigation itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `TableRowActionNavigation`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableRowActionNavigation` itself.
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
      fnFunctionValue: (p1: TableRowActionNavigation$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableRowActionNavigation itself
       */
      oListenerValue?: object
    ): this;
  }
}
