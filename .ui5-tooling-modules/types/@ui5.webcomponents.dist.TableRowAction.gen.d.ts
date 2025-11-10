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

declare module "@ui5/webcomponents/dist/TableRowAction" {
  export interface $TableRowActionSettings extends $TableRowActionBaseSettings {
    /**
     * Properties
     */

    /**
     * Defines the icon of the row action.
     *
     * **Note:** For row actions to work properly, this property is mandatory.
     *
     * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the row action.
     *
     * **Note:** For row actions to work properly, this property is mandatory.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

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
    click?: (oEvent: TableRowAction$ClickEvent) => void;
  }
  export interface TableRowAction$ClickEventParameters {}

  export type TableRowAction$ClickEvent = Event<
    TableRowAction$ClickEventParameters,
    TableRowAction
  >;

  export default class TableRowAction extends TableRowActionBase {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableRowActionSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableRowActionSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableRowAction" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableRowAction>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableRowAction".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon of the row action.
     *
     * **Note:** For row actions to work properly, this property is mandatory.
     *
     * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * Default value is ``.
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon of the row action.
     *
     * **Note:** For row actions to work properly, this property is mandatory.
     *
     * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue?: string | null): this;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text of the row action.
     *
     * **Note:** For row actions to work properly, this property is mandatory.
     * Default value is ``.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text of the row action.
     *
     * **Note:** For row actions to work properly, this property is mandatory.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue?: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `TableRowAction`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableRowAction$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableRowAction itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `TableRowAction`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableRowAction` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableRowAction$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableRowAction itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `TableRowAction`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableRowAction` itself.
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
      fnFunctionValue: (p1: TableRowAction$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableRowAction itself
       */
      oListenerValue?: object
    ): this;
  }
}
