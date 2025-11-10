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

import type { ToolbarItemOverflowBehavior } from "@ui5/webcomponents";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

declare module "@ui5/webcomponents/dist/ToolbarItem" {
  export interface $ToolbarItemSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
     * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
     */
    overflowPriority?:
      | ToolbarItemOverflowBehavior
      | keyof typeof ToolbarItemOverflowBehavior
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines if the toolbar overflow popup should close upon intereaction with the item.
     * It will close by default.
     */
    preventOverflowClosing?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The text-content of the Web Component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;
  }

  export default class ToolbarItem extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ToolbarItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ToolbarItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ToolbarItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ToolbarItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getOverflowPriority overflowPriority}.
     * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
     * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getOverflowPriority():
      | ToolbarItemOverflowBehavior
      | keyof typeof ToolbarItemOverflowBehavior;

    /**
     * Sets a new value for property {@link #getOverflowPriority overflowPriority}.
     * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
     * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOverflowPriority(
      overflowPriorityValue?:
        | ToolbarItemOverflowBehavior
        | keyof typeof ToolbarItemOverflowBehavior
        | null
    ): this;

    /**
     * Gets current value of property {@link #getPreventOverflowClosing preventOverflowClosing}.
     * Defines if the toolbar overflow popup should close upon intereaction with the item.
     * It will close by default.
     * Default value is `false`.
     * @returns The content of the property
     */
    getPreventOverflowClosing(): boolean;

    /**
     * Sets a new value for property {@link #getPreventOverflowClosing preventOverflowClosing}.
     * Defines if the toolbar overflow popup should close upon intereaction with the item.
     * It will close by default.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPreventOverflowClosing(
      preventOverflowClosingValue?: boolean | null
    ): this;

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
  }
}
