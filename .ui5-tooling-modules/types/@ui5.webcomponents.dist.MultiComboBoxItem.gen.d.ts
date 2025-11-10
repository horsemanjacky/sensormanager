// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IMultiComboBoxItem } from "@ui5/webcomponents";

import type {
  default as ComboBoxItem,
  $ComboBoxItemSettings
} from "@ui5/webcomponents/dist/ComboBoxItem";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

declare module "@ui5/webcomponents/dist/MultiComboBoxItem" {
  export interface $MultiComboBoxItemSettings extends $ComboBoxItemSettings {
    /**
     * Properties
     */

    /**
     * Defines the selected state of the component.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text of the component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the additional text of the component.
     */
    additionalText?: string | PropertyBindingInfo | `{${string}}`;
  }

  export default class MultiComboBoxItem
    extends ComboBoxItem
    implements IMultiComboBoxItem
  {
    __implements__ui5_webcomponents_IMultiComboBoxItem: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MultiComboBoxItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MultiComboBoxItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/MultiComboBoxItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, MultiComboBoxItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/MultiComboBoxItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Defines the selected state of the component.
     * Default value is `false`.
     * @returns The content of the property
     */
    getSelected(): boolean;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Defines the selected state of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text of the component.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getAdditionalText additionalText}.
     * Defines the additional text of the component.
     * @returns The content of the property
     */
    getAdditionalText(): string;

    /**
     * Sets a new value for property {@link #getAdditionalText additionalText}.
     * Defines the additional text of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalText(additionalTextValue: string | null): this;
  }
}
