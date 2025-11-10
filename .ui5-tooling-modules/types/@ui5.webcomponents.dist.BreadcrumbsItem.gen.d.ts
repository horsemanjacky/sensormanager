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

import type { CSSSize } from "sap/ui/core/library";

declare module "@ui5/webcomponents/dist/BreadcrumbsItem" {
  export interface $BreadcrumbsItemSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the link href.
     *
     * **Note:** Standard hyperlink behavior is supported.
     */
    href?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the link target.
     *
     * Available options are:
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **Note:** This property must only be used when the `href` property is set.
     */
    target?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the item.
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
  }

  export default class BreadcrumbsItem extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BreadcrumbsItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $BreadcrumbsItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/BreadcrumbsItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, BreadcrumbsItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/BreadcrumbsItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getHref href}.
     * Defines the link href.
     *
     * **Note:** Standard hyperlink behavior is supported.
     * @returns The content of the property
     */
    getHref(): string;

    /**
     * Sets a new value for property {@link #getHref href}.
     * Defines the link href.
     *
     * **Note:** Standard hyperlink behavior is supported.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHref(hrefValue: string | null): this;

    /**
     * Gets current value of property {@link #getTarget target}.
     * Defines the link target.
     *
     * Available options are:
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **Note:** This property must only be used when the `href` property is set.
     * @returns The content of the property
     */
    getTarget(): string;

    /**
     * Sets a new value for property {@link #getTarget target}.
     * Defines the link target.
     *
     * Available options are:
     *
     * - `_self`
     * - `_top`
     * - `_blank`
     * - `_parent`
     * - `_search`
     *
     * **Note:** This property must only be used when the `href` property is set.
     * @returns Reference to `this` in order to allow method chaining
     */
    setTarget(targetValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the item.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the item.
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
  }
}
