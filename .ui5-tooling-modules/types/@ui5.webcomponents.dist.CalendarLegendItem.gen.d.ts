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

import type { CalendarLegendItemType } from "@ui5/webcomponents";

import type { CSSSize } from "sap/ui/core/library";

declare module "@ui5/webcomponents/dist/CalendarLegendItem" {
  export interface $CalendarLegendItemSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the text content of the Calendar Legend Item.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the type of the Calendar Legend Item.
     */
    type?:
      | CalendarLegendItemType
      | keyof typeof CalendarLegendItemType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The 'width' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The 'height' of the Web Component in <code>sap.ui.core.CSSSize</code>.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;
  }

  export default class CalendarLegendItem extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarLegendItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarLegendItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/CalendarLegendItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, CalendarLegendItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/CalendarLegendItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text content of the Calendar Legend Item.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text content of the Calendar Legend Item.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getType type}.
     * Defines the type of the Calendar Legend Item.
     * Default value is `None`.
     * @returns The content of the property
     */
    getType(): CalendarLegendItemType | keyof typeof CalendarLegendItemType;

    /**
     * Sets a new value for property {@link #getType type}.
     * Defines the type of the Calendar Legend Item.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      typeValue?:
        | CalendarLegendItemType
        | keyof typeof CalendarLegendItemType
        | null
    ): this;

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
  }
}
