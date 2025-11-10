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

import type { TableGrowingMode } from "@ui5/webcomponents";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/TableGrowing" {
  export interface $TableGrowingSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the mode of the <code>ui5-table</code> growing.
     *
     * Available options are:
     *
     * Button - Shows a More button at the bottom of the table, pressing it will load more rows.
     *
     * Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
     * a growing button will be rendered instead to ensure growing functionality.
     */
    mode?:
      | TableGrowingMode
      | keyof typeof TableGrowingMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text that will be displayed inside the growing button.
     * Has no effect when mode is set to `Scroll`.
     *
     * **Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
     * current language.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text that will be displayed below the `text` inside the growing button.
     * Has no effect when mode is set to Scroll.
     */
    subtext?: string | PropertyBindingInfo | `{${string}}`;

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
     * Fired when the growing button is pressed or the user scrolls to the end of the table.
     */
    loadMore?: (oEvent: TableGrowing$LoadMoreEvent) => void;
  }
  export interface TableGrowing$LoadMoreEventParameters {}

  export type TableGrowing$LoadMoreEvent = Event<
    TableGrowing$LoadMoreEventParameters,
    TableGrowing
  >;

  export default class TableGrowing extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableGrowingSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TableGrowingSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/TableGrowing" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, TableGrowing>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/TableGrowing".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getMode mode}.
     * Defines the mode of the <code>ui5-table</code> growing.
     *
     * Available options are:
     *
     * Button - Shows a More button at the bottom of the table, pressing it will load more rows.
     *
     * Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
     * a growing button will be rendered instead to ensure growing functionality.
     * Default value is `Button`.
     * @returns The content of the property
     */
    getMode(): TableGrowingMode | keyof typeof TableGrowingMode;

    /**
     * Sets a new value for property {@link #getMode mode}.
     * Defines the mode of the <code>ui5-table</code> growing.
     *
     * Available options are:
     *
     * Button - Shows a More button at the bottom of the table, pressing it will load more rows.
     *
     * Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable,
     * a growing button will be rendered instead to ensure growing functionality.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Button`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMode(
      modeValue?: TableGrowingMode | keyof typeof TableGrowingMode | null
    ): this;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text that will be displayed inside the growing button.
     * Has no effect when mode is set to `Scroll`.
     *
     * **Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
     * current language.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text that will be displayed inside the growing button.
     * Has no effect when mode is set to `Scroll`.
     *
     * **Note:** When not provided and the mode is set to Button, a default text is displayed, corresponding to the
     * current language.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getSubtext subtext}.
     * Defines the text that will be displayed below the `text` inside the growing button.
     * Has no effect when mode is set to Scroll.
     * @returns The content of the property
     */
    getSubtext(): string;

    /**
     * Sets a new value for property {@link #getSubtext subtext}.
     * Defines the text that will be displayed below the `text` inside the growing button.
     * Has no effect when mode is set to Scroll.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSubtext(subtextValue: string | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getLoadMore loadMore} event of this `TableGrowing`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLoadMore(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableGrowing$LoadMoreEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableGrowing itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getLoadMore loadMore} event of this `TableGrowing`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableGrowing` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLoadMore(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableGrowing$LoadMoreEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableGrowing itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getLoadMore loadMore} event of this `TableGrowing`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `TableGrowing` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLoadMore(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: TableGrowing$LoadMoreEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this TableGrowing itself
       */
      oListenerValue?: object
    ): this;
  }
}
