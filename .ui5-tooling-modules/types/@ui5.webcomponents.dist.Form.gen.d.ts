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

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type {
  FormAccessibleMode,
  TitleLevel,
  FormItemSpacing,
  IFormItem
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/Form" {
  export interface $FormSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessibility mode of the component in "edit" and "display" use-cases.
     *
     * Based on the mode, the component renders different HTML elements and ARIA attributes,
     * which are appropriate for the use-case.
     *
     * **Usage:**
     * - Set this property to "Display", when the form consists of non-editable (e.g. texts) form items.
     * - Set this property to "Edit", when the form consists of editable (e.g. input fields) form items.
     */
    accessibleMode?:
      | FormAccessibleMode
      | keyof typeof FormAccessibleMode
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the number of columns to distribute the form content by breakpoint.
     *
     * Supported values:
     * - `S` - 1 column by default (1 column is recommended)
     * - `M` - 1 column by default (up to 2 columns are recommended)
     * - `L` - 2 columns by default (up to 3 columns are recommended)
     * - `XL` - 3 columns by default (up to 6 columns  are recommended)
     */
    layout?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the width proportion of the labels and fields of a form item by breakpoint.
     *
     * By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
     * and 12/12 in S size, e.g in S the label is on top of its associated field.
     *
     * The supported values are between 1 and 12. Greater the number, more space the label will use.
     *
     * **Note:** If "12" is set, the label will be displayed on top of its assosiated field.
     */
    labelSpan?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.
     *
     * By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
     * The `emptySpan` provides additional layout flexibility by defining empty space at the form item’s end.
     *
     * **Note:**
     * - The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
     * - When `emptySpan` is specified (greater than 0), ensure that the combined value of `emptySpan` and `labelSpan` does not exceed 11. This guarantees a minimum of 1 cell for the field.
     */
    emptySpan?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the header text of the component.
     *
     * **Note:** The property gets overridden by the `header` slot.
     */
    headerText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the compoennt heading level,
     * set by the `headerText`.
     */
    headerLevel?:
      | TitleLevel
      | keyof typeof TitleLevel
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the vertical spacing between form items.
     *
     * **Note:** If the Form is meant to be switched between "display"("non-edit") and "edit" modes,
     * we recommend using "Large" item spacing in "display"("non-edit") mode, and "Normal" - for "edit" mode,
     * to avoid "jumping" effect, caused by the hight difference between texts in "display"("non-edit") mode and the input fields in "edit" mode.
     */
    itemSpacing?:
      | FormItemSpacing
      | keyof typeof FormItemSpacing
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
     * Defines the component header area.
     *
     * **Note:** When a `header` is provided, the `headerText` property is ignored.
     */
    header?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the component content - FormGroups or FormItems.
     *
     * **Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
     * Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.
     */
    items?:
      | Array<IFormItem>
      | IFormItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines id (or many ids) of the element (or elements) that label the component.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;
  }

  export default class Form extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $FormSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Form" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Form>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Form".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Gets current value of property {@link #getAccessibleMode accessibleMode}.
     * Defines the accessibility mode of the component in "edit" and "display" use-cases.
     *
     * Based on the mode, the component renders different HTML elements and ARIA attributes,
     * which are appropriate for the use-case.
     *
     * **Usage:**
     * - Set this property to "Display", when the form consists of non-editable (e.g. texts) form items.
     * - Set this property to "Edit", when the form consists of editable (e.g. input fields) form items.
     * Default value is `Display`.
     * @returns The content of the property
     */
    getAccessibleMode(): FormAccessibleMode | keyof typeof FormAccessibleMode;

    /**
     * Sets a new value for property {@link #getAccessibleMode accessibleMode}.
     * Defines the accessibility mode of the component in "edit" and "display" use-cases.
     *
     * Based on the mode, the component renders different HTML elements and ARIA attributes,
     * which are appropriate for the use-case.
     *
     * **Usage:**
     * - Set this property to "Display", when the form consists of non-editable (e.g. texts) form items.
     * - Set this property to "Edit", when the form consists of editable (e.g. input fields) form items.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Display`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleMode(
      accessibleModeValue?:
        | FormAccessibleMode
        | keyof typeof FormAccessibleMode
        | null
    ): this;

    /**
     * Gets current value of property {@link #getLayout layout}.
     * Defines the number of columns to distribute the form content by breakpoint.
     *
     * Supported values:
     * - `S` - 1 column by default (1 column is recommended)
     * - `M` - 1 column by default (up to 2 columns are recommended)
     * - `L` - 2 columns by default (up to 3 columns are recommended)
     * - `XL` - 3 columns by default (up to 6 columns  are recommended)
     * Default value is `S1 M1 L2 XL3`.
     * @returns The content of the property
     */
    getLayout(): string;

    /**
     * Sets a new value for property {@link #getLayout layout}.
     * Defines the number of columns to distribute the form content by breakpoint.
     *
     * Supported values:
     * - `S` - 1 column by default (1 column is recommended)
     * - `M` - 1 column by default (up to 2 columns are recommended)
     * - `L` - 2 columns by default (up to 3 columns are recommended)
     * - `XL` - 3 columns by default (up to 6 columns  are recommended)
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S1 M1 L2 XL3`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLayout(layoutValue?: string | null): this;

    /**
     * Gets current value of property {@link #getLabelSpan labelSpan}.
     * Defines the width proportion of the labels and fields of a form item by breakpoint.
     *
     * By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
     * and 12/12 in S size, e.g in S the label is on top of its associated field.
     *
     * The supported values are between 1 and 12. Greater the number, more space the label will use.
     *
     * **Note:** If "12" is set, the label will be displayed on top of its assosiated field.
     * Default value is `S12 M4 L4 XL4`.
     * @returns The content of the property
     */
    getLabelSpan(): string;

    /**
     * Sets a new value for property {@link #getLabelSpan labelSpan}.
     * Defines the width proportion of the labels and fields of a form item by breakpoint.
     *
     * By default, the labels take 4/12 (or 1/3) of the form item in M,L and XL sizes,
     * and 12/12 in S size, e.g in S the label is on top of its associated field.
     *
     * The supported values are between 1 and 12. Greater the number, more space the label will use.
     *
     * **Note:** If "12" is set, the label will be displayed on top of its assosiated field.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S12 M4 L4 XL4`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setLabelSpan(labelSpanValue?: string | null): this;

    /**
     * Gets current value of property {@link #getEmptySpan emptySpan}.
     * Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.
     *
     * By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
     * The `emptySpan` provides additional layout flexibility by defining empty space at the form item’s end.
     *
     * **Note:**
     * - The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
     * - When `emptySpan` is specified (greater than 0), ensure that the combined value of `emptySpan` and `labelSpan` does not exceed 11. This guarantees a minimum of 1 cell for the field.
     * Default value is `S0 M0 L0 XL0`.
     * @returns The content of the property
     */
    getEmptySpan(): string;

    /**
     * Sets a new value for property {@link #getEmptySpan emptySpan}.
     * Defines the number of cells that are empty at the end of each form item, configurable by breakpoint.
     *
     * By default, a form item spans 12 cells, fully divided between its label (4 cells) and field (8 cells), with no empty space at the end.
     * The `emptySpan` provides additional layout flexibility by defining empty space at the form item’s end.
     *
     * **Note:**
     * - The maximum allowable empty space is 10 cells. At least 1 cell each must remain for the label and the field.
     * - When `emptySpan` is specified (greater than 0), ensure that the combined value of `emptySpan` and `labelSpan` does not exceed 11. This guarantees a minimum of 1 cell for the field.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S0 M0 L0 XL0`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEmptySpan(emptySpanValue?: string | null): this;

    /**
     * Gets current value of property {@link #getHeaderText headerText}.
     * Defines the header text of the component.
     *
     * **Note:** The property gets overridden by the `header` slot.
     * @returns The content of the property
     */
    getHeaderText(): string;

    /**
     * Sets a new value for property {@link #getHeaderText headerText}.
     * Defines the header text of the component.
     *
     * **Note:** The property gets overridden by the `header` slot.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderText(headerTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getHeaderLevel headerLevel}.
     * Defines the compoennt heading level,
     * set by the `headerText`.
     * Default value is `H2`.
     * @returns The content of the property
     */
    getHeaderLevel(): TitleLevel | keyof typeof TitleLevel;

    /**
     * Sets a new value for property {@link #getHeaderLevel headerLevel}.
     * Defines the compoennt heading level,
     * set by the `headerText`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `H2`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeaderLevel(
      headerLevelValue?: TitleLevel | keyof typeof TitleLevel | null
    ): this;

    /**
     * Gets current value of property {@link #getItemSpacing itemSpacing}.
     * Defines the vertical spacing between form items.
     *
     * **Note:** If the Form is meant to be switched between "display"("non-edit") and "edit" modes,
     * we recommend using "Large" item spacing in "display"("non-edit") mode, and "Normal" - for "edit" mode,
     * to avoid "jumping" effect, caused by the hight difference between texts in "display"("non-edit") mode and the input fields in "edit" mode.
     * Default value is `Normal`.
     * @returns The content of the property
     */
    getItemSpacing(): FormItemSpacing | keyof typeof FormItemSpacing;

    /**
     * Sets a new value for property {@link #getItemSpacing itemSpacing}.
     * Defines the vertical spacing between form items.
     *
     * **Note:** If the Form is meant to be switched between "display"("non-edit") and "edit" modes,
     * we recommend using "Large" item spacing in "display"("non-edit") mode, and "Normal" - for "edit" mode,
     * to avoid "jumping" effect, caused by the hight difference between texts in "display"("non-edit") mode and the input fields in "edit" mode.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Normal`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setItemSpacing(
      itemSpacingValue?: FormItemSpacing | keyof typeof FormItemSpacing | null
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
     * Gets content of aggregation {@link #getHeader header}.
     * Defines the component header area.
     *
     * **Note:** When a `header` is provided, the `headerText` property is ignored.
     * @returns The content of the aggregation
     */
    getHeader(): Array<Control> | Control;

    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyHeader(): this;

    /**
     * Adds some header to the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addHeader(headerValue: Array<Control> | Control): this;

    /**
     * Inserts a header into the aggregation {@link #getHeader header}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertHeader(
      headerValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a header from the aggregation {@link #getHeader header}.
     * @returns The removed header or `null`
     */
    removeHeader(
      headerValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getHeader header}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllHeader(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getHeader header} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfHeader(headerValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getItems items}.
     * Defines the component content - FormGroups or FormItems.
     *
     * **Note:** Mixing FormGroups and standalone FormItems (not belonging to a group) is not supported.
     * Either use FormGroups and make sure all FormItems are part of a FormGroup, or use just FormItems without any FormGroups.
     * @returns The content of the aggregation
     */
    getItems(): Array<IFormItem> | IFormItem;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<IFormItem> | IFormItem): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<IFormItem> | IFormItem,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<IFormItem> | IFormItem | int | ID
    ): Array<IFormItem> | IFormItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<IFormItem> | IFormItem;

    /**
     * Checks for the provided 'IFormItem' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<IFormItem> | IFormItem): int;

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
