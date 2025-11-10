// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { ISegmentedButtonItem, IButton } from "@ui5/webcomponents";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/SegmentedButtonItem" {
  export interface $SegmentedButtonItemSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the component is disabled.
     * A disabled component can't be selected or
     * focused, and it is not in the tab chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines whether the component is displayed as selected.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the IDs of the HTML Elements that describe the component.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon, displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

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
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;
  }

  export default class SegmentedButtonItem
    extends WebComponent
    implements ISegmentedButtonItem, IButton
  {
    __implements__ui5_webcomponents_ISegmentedButtonItem: boolean;
    __implements__ui5_webcomponents_IButton: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $SegmentedButtonItemSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $SegmentedButtonItemSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/SegmentedButtonItem" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, SegmentedButtonItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/SegmentedButtonItem".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     * A disabled component can't be selected or
     * focused, and it is not in the tab chain.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is disabled.
     * A disabled component can't be selected or
     * focused, and it is not in the tab chain.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Determines whether the component is displayed as selected.
     * Default value is `false`.
     * @returns The content of the property
     */
    getSelected(): boolean;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Determines whether the component is displayed as selected.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible ARIA name of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleDescription accessibleDescription}.
     * Defines the accessible description of the component.
     * @returns The content of the property
     */
    getAccessibleDescription(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescription accessibleDescription}.
     * Defines the accessible description of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescription(accessibleDescriptionValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Defines the IDs of the HTML Elements that describe the component.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Defines the IDs of the HTML Elements that describe the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
    ): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon, displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon, displayed as graphical element within the component.
     * The SAP-icons font provides numerous options.
     *
     * Example:
     * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

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
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns The content of the association
     */
    getAriaLabelledBy(): Array<ID> | ID;

    /**
     * Adds some ariaLabelledBy to the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaLabelledBy(ariaLabelledByValue: Array<Control> | Control | ID): this;

    /**
     * Removes an ariaLabelledBy from the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns The removed ariaLabelledBy or `null`
     */
    removeAriaLabelledBy(
      ariaLabelledByValue: Array<Control> | Control | int | ID
    ): ID | null;

    /**
     * Removes all the controls from the association {@link #getAriaLabelledBy ariaLabelledBy}.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): Array<ID> | ID;
  }
}
