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

import type { BarDesign, BarAccessibleRole } from "@ui5/webcomponents";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/Bar" {
  export interface $BarSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the component's design.
     */
    design?:
      | BarDesign
      | keyof typeof BarDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies the ARIA role applied to the component for accessibility purposes.
     *
     * **Note:**
     *
     * - Set accessibleRole to "toolbar" only when the component contains two or more active, interactive elements (such as buttons, links, or input fields) within the bar.
     *
     * - If there is only one or no active element, it is recommended to avoid using the "toolbar" role, as it implies a grouping of multiple interactive controls.
     */
    accessibleRole?:
      | BarAccessibleRole
      | keyof typeof BarAccessibleRole
      | PropertyBindingInfo
      | `{${string}}`;

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
     * Aggregations
     */

    /**
     * Defines the content at the start of the bar.
     */
    startContent?:
      | Array<Control>
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the content in the middle of the bar.
     */
    middleContent?:
      | Array<Control>
      | Control
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the content at the end of the bar.
     */
    endContent?:
      | Array<Control>
      | Control
      | AggregationBindingInfo
      | `{${string}}`;
  }

  export default class Bar extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $BarSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $BarSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Bar" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Bar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Bar".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component's design.
     * Default value is `Header`.
     * @returns The content of the property
     */
    getDesign(): BarDesign | keyof typeof BarDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component's design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Header`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(designValue?: BarDesign | keyof typeof BarDesign | null): this;

    /**
     * Gets current value of property {@link #getAccessibleRole accessibleRole}.
     * Specifies the ARIA role applied to the component for accessibility purposes.
     *
     * **Note:**
     *
     * - Set accessibleRole to "toolbar" only when the component contains two or more active, interactive elements (such as buttons, links, or input fields) within the bar.
     *
     * - If there is only one or no active element, it is recommended to avoid using the "toolbar" role, as it implies a grouping of multiple interactive controls.
     * Default value is `Toolbar`.
     * @returns The content of the property
     */
    getAccessibleRole(): BarAccessibleRole | keyof typeof BarAccessibleRole;

    /**
     * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
     * Specifies the ARIA role applied to the component for accessibility purposes.
     *
     * **Note:**
     *
     * - Set accessibleRole to "toolbar" only when the component contains two or more active, interactive elements (such as buttons, links, or input fields) within the bar.
     *
     * - If there is only one or no active element, it is recommended to avoid using the "toolbar" role, as it implies a grouping of multiple interactive controls.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Toolbar`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleRole(
      accessibleRoleValue?:
        | BarAccessibleRole
        | keyof typeof BarAccessibleRole
        | null
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
     * Gets content of aggregation {@link #getStartContent startContent}.
     * Defines the content at the start of the bar.
     * @returns The content of the aggregation
     */
    getStartContent(): Array<Control> | Control;

    /**
     * Destroys the startContent in the aggregation {@link #getStartContent startContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyStartContent(): this;

    /**
     * Adds some startContent to the aggregation {@link #getStartContent startContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addStartContent(startContentValue: Array<Control> | Control): this;

    /**
     * Inserts a startContent into the aggregation {@link #getStartContent startContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertStartContent(
      startContentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a startContent from the aggregation {@link #getStartContent startContent}.
     * @returns The removed startContent or `null`
     */
    removeStartContent(
      startContentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getStartContent startContent}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllStartContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getStartContent startContent} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfStartContent(startContentValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getMiddleContent middleContent}.
     * Defines the content in the middle of the bar.
     * @returns The content of the aggregation
     */
    getMiddleContent(): Array<Control> | Control;

    /**
     * Destroys the middleContent in the aggregation {@link #getMiddleContent middleContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyMiddleContent(): this;

    /**
     * Adds some middleContent to the aggregation {@link #getMiddleContent middleContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addMiddleContent(middleContentValue: Array<Control> | Control): this;

    /**
     * Inserts a middleContent into the aggregation {@link #getMiddleContent middleContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertMiddleContent(
      middleContentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a middleContent from the aggregation {@link #getMiddleContent middleContent}.
     * @returns The removed middleContent or `null`
     */
    removeMiddleContent(
      middleContentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getMiddleContent middleContent}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllMiddleContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getMiddleContent middleContent} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfMiddleContent(middleContentValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getEndContent endContent}.
     * Defines the content at the end of the bar.
     * @returns The content of the aggregation
     */
    getEndContent(): Array<Control> | Control;

    /**
     * Destroys the endContent in the aggregation {@link #getEndContent endContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyEndContent(): this;

    /**
     * Adds some endContent to the aggregation {@link #getEndContent endContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addEndContent(endContentValue: Array<Control> | Control): this;

    /**
     * Inserts an endContent into the aggregation {@link #getEndContent endContent}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertEndContent(
      endContentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an endContent from the aggregation {@link #getEndContent endContent}.
     * @returns The removed endContent or `null`
     */
    removeEndContent(
      endContentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getEndContent endContent}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllEndContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getEndContent endContent} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfEndContent(endContentValue: Array<Control> | Control): int;
  }
}
