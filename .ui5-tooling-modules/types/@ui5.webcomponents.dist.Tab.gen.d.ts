// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { ITab, SemanticColor } from "@ui5/webcomponents";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

declare module "@ui5/webcomponents/dist/Tab" {
  export interface $TabSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * The text to be displayed for the item.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Disabled tabs can't be selected.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.
     */
    additionalText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the icon source URI to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous built-in icons.
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the component's design color.
     *
     * The design is applied to:
     *
     * - the component icon
     * - the `text` when the component overflows
     * - the tab selection line
     *
     * Available designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.
     *
     * **Note:** The design depends on the current theme.
     */
    design?:
      | SemanticColor
      | keyof typeof SemanticColor
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Specifies if the component is selected.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the tab is movable.
     */
    movable?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Holds the content associated with this tab.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines hierarchies with nested sub tabs.
     *
     * **Note:** Use `ui5-tab` and `ui5-tab-separator` for the intended design.
     */
    items?: Array<ITab> | ITab | AggregationBindingInfo | `{${string}}`;
  }

  export default class Tab extends WebComponent implements ITab {
    __implements__ui5_webcomponents_ITab: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TabSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TabSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Tab" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Tab>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Tab".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Returns the DOM reference of the tab that is placed in the header.
     *
     * **Note:** Tabs, placed in the `items` slot of other tabs are not shown in the header. Calling this method on such tabs will return `undefined`.
     *
     * **Note:** If you need a DOM ref to the tab content please use the `getDomRef` method.
     */
    getDomRefInStrip(): void;

    /**
     * Gets current value of property {@link #getText text}.
     * The text to be displayed for the item.
     * @returns The content of the property
     */
    getText(): string;

    /**
     * Sets a new value for property {@link #getText text}.
     * The text to be displayed for the item.
     * @returns Reference to `this` in order to allow method chaining
     */
    setText(textValue: string | null): this;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Disabled tabs can't be selected.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Disabled tabs can't be selected.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAdditionalText additionalText}.
     * Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.
     * @returns The content of the property
     */
    getAdditionalText(): string;

    /**
     * Sets a new value for property {@link #getAdditionalText additionalText}.
     * Represents the "additionalText" text, which is displayed in the tab. In the cases when in the same time there are tabs with icons and tabs without icons, if a tab has no icon the "additionalText" is displayed larger.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalText(additionalTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the icon source URI to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous built-in icons.
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the icon source URI to be displayed as graphical element within the component.
     * The SAP-icons font provides numerous built-in icons.
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component's design color.
     *
     * The design is applied to:
     *
     * - the component icon
     * - the `text` when the component overflows
     * - the tab selection line
     *
     * Available designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.
     *
     * **Note:** The design depends on the current theme.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getDesign(): SemanticColor | keyof typeof SemanticColor;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component's design color.
     *
     * The design is applied to:
     *
     * - the component icon
     * - the `text` when the component overflows
     * - the tab selection line
     *
     * Available designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.
     *
     * **Note:** The design depends on the current theme.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      designValue?: SemanticColor | keyof typeof SemanticColor | null
    ): this;

    /**
     * Gets current value of property {@link #getSelected selected}.
     * Specifies if the component is selected.
     * Default value is `false`.
     * @returns The content of the property
     */
    getSelected(): boolean;

    /**
     * Sets a new value for property {@link #getSelected selected}.
     * Specifies if the component is selected.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setSelected(selectedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getMovable movable}.
     * Defines if the tab is movable.
     * Default value is `false`.
     * @returns The content of the property
     */
    getMovable(): boolean;

    /**
     * Sets a new value for property {@link #getMovable movable}.
     * Defines if the tab is movable.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMovable(movableValue?: boolean | null): this;

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
     * Gets content of aggregation {@link #getContent content}.
     * Holds the content associated with this tab.
     * @returns The content of the aggregation
     */
    getContent(): Array<Control> | Control;

    /**
     * Destroys the content in the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyContent(): this;

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addContent(contentValue: Array<Control> | Control): this;

    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertContent(
      contentValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes a content from the aggregation {@link #getContent content}.
     * @returns The removed content or `null`
     */
    removeContent(
      contentValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllContent(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getContent content} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfContent(contentValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getItems items}.
     * Defines hierarchies with nested sub tabs.
     *
     * **Note:** Use `ui5-tab` and `ui5-tab-separator` for the intended design.
     * @returns The content of the aggregation
     */
    getItems(): Array<ITab> | ITab;

    /**
     * Destroys the items in the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyItems(): this;

    /**
     * Adds some items to the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addItem(itemValue: Array<ITab> | ITab): this;

    /**
     * Inserts an items into the aggregation {@link #getItems items}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertItem(
      itemValue: Array<ITab> | ITab,

      indexValue: int
    ): this;

    /**
     * Removes an items from the aggregation {@link #getItems items}.
     * @returns The removed items or `null`
     */
    removeItem(
      itemValue: Array<ITab> | ITab | int | ID
    ): Array<ITab> | ITab | null;

    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllItems(): Array<ITab> | ITab;

    /**
     * Checks for the provided 'ITab' in the aggregation {@link #getItems items} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfItem(itemValue: Array<ITab> | ITab): int;
  }
}
