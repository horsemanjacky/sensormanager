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

import type { ButtonBadgeDesign } from "@ui5/webcomponents";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

declare module "@ui5/webcomponents/dist/ButtonBadge" {
  export interface $ButtonBadgeSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the badge placement and appearance.
     * - **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
     * - **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
     * - **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.
     */
    design?:
      | ButtonBadgeDesign
      | keyof typeof ButtonBadgeDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the text of the component.
     *
     * **Note:** Text is not applied when the `design` property is set to `AttentionDot`.
     *
     * **Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.
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

  export default class ButtonBadge extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ButtonBadgeSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ButtonBadgeSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ButtonBadge" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ButtonBadge>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ButtonBadge".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the badge placement and appearance.
     * - **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
     * - **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
     * - **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.
     * Default value is `AttentionDot`.
     * @returns The content of the property
     */
    getDesign(): ButtonBadgeDesign | keyof typeof ButtonBadgeDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the badge placement and appearance.
     * - **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
     * - **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
     * - **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `AttentionDot`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: ButtonBadgeDesign | keyof typeof ButtonBadgeDesign | null
    ): this;

    /**
     * Gets current value of property {@link #getText text}.
     * Defines the text of the component.
     *
     * **Note:** Text is not applied when the `design` property is set to `AttentionDot`.
     *
     * **Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.
     * Default value is ``.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * Defines the text of the component.
     *
     * **Note:** Text is not applied when the `design` property is set to `AttentionDot`.
     *
     * **Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue?: string | null): this;

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
