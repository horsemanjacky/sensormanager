// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { ListItemAccessibilityAttributes } from "@ui5/webcomponents/dist/ListItem";

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type {
  default as ListItem,
  $ListItemSettings
} from "@ui5/webcomponents/dist/ListItem";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type { ValueState, CSSSize, ID } from "sap/ui/core/library";

import type {
  WrappingType,
  ListItemType,
  Highlight,
  IButton
} from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/ListItemStandard" {
  export interface $ListItemStandardSettings extends $ListItemSettings {
    /**
     * Properties
     */

    /**
     * Defines the text of the component.
     */
    text?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the description displayed right under the item text, if such is present.
     */
    description?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `icon` source URI.
     *
     * **Note:**
     * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     */
    icon?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the `icon` should be displayed in the beginning of the list item or in the end.
     */
    iconEnd?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the `additionalText`, displayed in the end of the list item.
     */
    additionalText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the state of the `additionalText`.
     *
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     */
    additionalTextState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the item is movable.
     */
    movable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text alternative of the component.
     * Note: If not provided a default text alternative will be set, if present.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines if the text of the component should wrap when it's too long.
     * When set to "Normal", the content (title, description) will be wrapped
     * using the `ui5-expandable-text` component.<br/>
     *
     * The text can wrap up to 100 characters on small screens (size S) and
     * up to 300 characters on larger screens (size M and above). When text exceeds
     * these limits, it truncates with an ellipsis followed by a text expansion trigger.
     *
     * Available options are:
     * - `None` (default) - The text will truncate with an ellipsis.
     * - `Normal` - The text will wrap (without truncation).
     */
    wrappingType?:
      | WrappingType
      | keyof typeof WrappingType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     */
    type?:
      | ListItemType
      | keyof typeof ListItemType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     */
    accessibilityAttributes?:
      | ListItemAccessibilityAttributes
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     */
    navigated?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     */
    highlight?:
      | Highlight
      | keyof typeof Highlight
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the selected state of the component.
     */
    selected?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the custom formatted text of the component.
     *
     * **Note:** For optimal text wrapping and a consistent layout, it is strongly recommended to use the `text` property.
     *
     * Use the `default` slot only when custom formatting with HTML elements (e.g., `<b>`, `<i>`) is required.
     * Be aware that wrapping (via `wrappingType="Normal"`) may not function correctly with custom HTML content in the `default` slot.
     *
     * If both `text` and `default` slot are used, the `text` property takes precedence.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * **Note:** While the slot allows option for setting custom avatar, to match the
     * design guidelines, please use the `ui5-avatar` with it's default size - S.
     *
     * **Note:** If bigger `ui5-avatar` needs to be used, then the size of the
     * `ui5-li` should be customized in order to fit.
     */
    image?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Defines the delete button, displayed in "Delete" mode.
     * **Note:** While the slot allows custom buttons, to match
     * design guidelines, please use the `ui5-button` component.
     * **Note:** When the slot is not present, a built-in delete button will be displayed.
     */
    deleteButton?:
      | Array<IButton>
      | IButton
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Events
     */

    /**
     * Fired when the user clicks on the detail button when type is `Detail`.
     */
    detailClick?: (oEvent: ListItemStandard$DetailClickEvent) => void;
  }
  export interface ListItemStandard$DetailClickEventParameters {}

  export type ListItemStandard$DetailClickEvent = Event<
    ListItemStandard$DetailClickEventParameters,
    ListItemStandard
  >;

  export default class ListItemStandard extends ListItem {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ListItemStandardSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ListItemStandardSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/ListItemStandard" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, ListItemStandard>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/ListItemStandard".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

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
     * Gets current value of property {@link #getDescription description}.
     * Defines the description displayed right under the item text, if such is present.
     * @returns The content of the property
     */
    getDescription(): string;

    /**
     * Sets a new value for property {@link #getDescription description}.
     * Defines the description displayed right under the item text, if such is present.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDescription(descriptionValue: string | null): this;

    /**
     * Gets current value of property {@link #getIcon icon}.
     * Defines the `icon` source URI.
     *
     * **Note:**
     * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns The content of the property
     */
    getIcon(): string;

    /**
     * Sets a new value for property {@link #getIcon icon}.
     * Defines the `icon` source URI.
     *
     * **Note:**
     * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
     * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @returns Reference to `this` in order to allow method chaining
     */
    setIcon(iconValue: string | null): this;

    /**
     * Gets current value of property {@link #getIconEnd iconEnd}.
     * Defines whether the `icon` should be displayed in the beginning of the list item or in the end.
     * Default value is `false`.
     * @returns The content of the property
     */
    getIconEnd(): boolean;

    /**
     * Sets a new value for property {@link #getIconEnd iconEnd}.
     * Defines whether the `icon` should be displayed in the beginning of the list item or in the end.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setIconEnd(iconEndValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAdditionalText additionalText}.
     * Defines the `additionalText`, displayed in the end of the list item.
     * @returns The content of the property
     */
    getAdditionalText(): string;

    /**
     * Sets a new value for property {@link #getAdditionalText additionalText}.
     * Defines the `additionalText`, displayed in the end of the list item.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalText(additionalTextValue: string | null): this;

    /**
     * Gets current value of property {@link #getAdditionalTextState additionalTextState}.
     * Defines the state of the `additionalText`.
     *
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * Default value is `None`.
     * @returns The content of the property
     */
    getAdditionalTextState(): ValueState | keyof typeof ValueState;

    /**
     * Sets a new value for property {@link #getAdditionalTextState additionalTextState}.
     * Defines the state of the `additionalText`.
     *
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAdditionalTextState(
      additionalTextStateValue?: ValueState | keyof typeof ValueState | null
    ): this;

    /**
     * Gets current value of property {@link #getMovable movable}.
     * Defines whether the item is movable.
     * Default value is `false`.
     * @returns The content of the property
     */
    getMovable(): boolean;

    /**
     * Sets a new value for property {@link #getMovable movable}.
     * Defines whether the item is movable.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMovable(movableValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     * Note: If not provided a default text alternative will be set, if present.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     * Note: If not provided a default text alternative will be set, if present.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getWrappingType wrappingType}.
     * Defines if the text of the component should wrap when it's too long.
     * When set to "Normal", the content (title, description) will be wrapped
     * using the `ui5-expandable-text` component.<br/>
     *
     * The text can wrap up to 100 characters on small screens (size S) and
     * up to 300 characters on larger screens (size M and above). When text exceeds
     * these limits, it truncates with an ellipsis followed by a text expansion trigger.
     *
     * Available options are:
     * - `None` (default) - The text will truncate with an ellipsis.
     * - `Normal` - The text will wrap (without truncation).
     * Default value is `None`.
     * @returns The content of the property
     */
    getWrappingType(): WrappingType | keyof typeof WrappingType;

    /**
     * Sets a new value for property {@link #getWrappingType wrappingType}.
     * Defines if the text of the component should wrap when it's too long.
     * When set to "Normal", the content (title, description) will be wrapped
     * using the `ui5-expandable-text` component.<br/>
     *
     * The text can wrap up to 100 characters on small screens (size S) and
     * up to 300 characters on larger screens (size M and above). When text exceeds
     * these limits, it truncates with an ellipsis followed by a text expansion trigger.
     *
     * Available options are:
     * - `None` (default) - The text will truncate with an ellipsis.
     * - `Normal` - The text will wrap (without truncation).
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setWrappingType(
      wrappingTypeValue?: WrappingType | keyof typeof WrappingType | null
    ): this;

    /**
     * Gets current value of property {@link #getType type}.
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     * Default value is `Active`.
     * @returns The content of the property
     */
    getType(): ListItemType | keyof typeof ListItemType;

    /**
     * Sets a new value for property {@link #getType type}.
     * Defines the visual indication and behavior of the list items.
     * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
     *
     * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
     * while with type `Inactive` and `Detail` - will not.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Active`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(typeValue?: ListItemType | keyof typeof ListItemType | null): this;

    /**
     * Gets current value of property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     * Default value is `{}`.
     * @returns The content of the property
     */
    getAccessibilityAttributes(): ListItemAccessibilityAttributes;

    /**
     * Sets a new value for property {@link #getAccessibilityAttributes accessibilityAttributes}.
     * Defines the additional accessibility attributes that will be applied to the component.
     * The following fields are supported:
     *
     * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
     * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
     *
     * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
     * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `{}`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibilityAttributes(
      accessibilityAttributesValue?: ListItemAccessibilityAttributes | null
    ): this;

    /**
     * Gets current value of property {@link #getNavigated navigated}.
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     * Default value is `false`.
     * @returns The content of the property
     */
    getNavigated(): boolean;

    /**
     * Sets a new value for property {@link #getNavigated navigated}.
     * The navigated state of the list item.
     * If set to `true`, a navigation indicator is displayed at the end of the list item.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNavigated(navigatedValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHighlight highlight}.
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * Default value is `None`.
     * @returns The content of the property
     */
    getHighlight(): Highlight | keyof typeof Highlight;

    /**
     * Sets a new value for property {@link #getHighlight highlight}.
     * Defines the highlight state of the list items.
     * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHighlight(
      highlightValue?: Highlight | keyof typeof Highlight | null
    ): this;

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
     * Defines the custom formatted text of the component.
     *
     * **Note:** For optimal text wrapping and a consistent layout, it is strongly recommended to use the `text` property.
     *
     * Use the `default` slot only when custom formatting with HTML elements (e.g., `<b>`, `<i>`) is required.
     * Be aware that wrapping (via `wrappingType="Normal"`) may not function correctly with custom HTML content in the `default` slot.
     *
     * If both `text` and `default` slot are used, the `text` property takes precedence.
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
     * Gets content of aggregation {@link #getImage image}.
     * **Note:** While the slot allows option for setting custom avatar, to match the
     * design guidelines, please use the `ui5-avatar` with it's default size - S.
     *
     * **Note:** If bigger `ui5-avatar` needs to be used, then the size of the
     * `ui5-li` should be customized in order to fit.
     * @returns The content of the aggregation
     */
    getImage(): Array<Control> | Control;

    /**
     * Destroys the image in the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyImage(): this;

    /**
     * Adds some image to the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addImage(imageValue: Array<Control> | Control): this;

    /**
     * Inserts an image into the aggregation {@link #getImage image}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertImage(
      imageValue: Array<Control> | Control,

      indexValue: int
    ): this;

    /**
     * Removes an image from the aggregation {@link #getImage image}.
     * @returns The removed image or `null`
     */
    removeImage(
      imageValue: Array<Control> | Control | int | ID
    ): Array<Control> | Control | null;

    /**
     * Removes all the controls from the aggregation {@link #getImage image}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllImage(): Array<Control> | Control;

    /**
     * Checks for the provided 'Control' in the aggregation {@link #getImage image} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfImage(imageValue: Array<Control> | Control): int;

    /**
     * Gets content of aggregation {@link #getDeleteButton deleteButton}.
     * Defines the delete button, displayed in "Delete" mode.
     * **Note:** While the slot allows custom buttons, to match
     * design guidelines, please use the `ui5-button` component.
     * **Note:** When the slot is not present, a built-in delete button will be displayed.
     * @returns The content of the aggregation
     */
    getDeleteButton(): Array<IButton> | IButton;

    /**
     * Destroys the deleteButton in the aggregation {@link #getDeleteButton deleteButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyDeleteButton(): this;

    /**
     * Adds some deleteButton to the aggregation {@link #getDeleteButton deleteButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addDeleteButton(deleteButtonValue: Array<IButton> | IButton): this;

    /**
     * Inserts a deleteButton into the aggregation {@link #getDeleteButton deleteButton}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertDeleteButton(
      deleteButtonValue: Array<IButton> | IButton,

      indexValue: int
    ): this;

    /**
     * Removes a deleteButton from the aggregation {@link #getDeleteButton deleteButton}.
     * @returns The removed deleteButton or `null`
     */
    removeDeleteButton(
      deleteButtonValue: Array<IButton> | IButton | int | ID
    ): Array<IButton> | IButton | null;

    /**
     * Removes all the controls from the aggregation {@link #getDeleteButton deleteButton}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllDeleteButton(): Array<IButton> | IButton;

    /**
     * Checks for the provided 'IButton' in the aggregation {@link #getDeleteButton deleteButton} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfDeleteButton(deleteButtonValue: Array<IButton> | IButton): int;

    /**
     * Detaches event handler `fnFunction` from the {@link #getDetailClick detailClick} event of this `ListItemStandard`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ListItemStandard$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ListItemStandard itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `ListItemStandard`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ListItemStandard` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDetailClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ListItemStandard$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ListItemStandard itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getDetailClick detailClick} event of this `ListItemStandard`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `ListItemStandard` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachDetailClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: ListItemStandard$DetailClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this ListItemStandard itself
       */
      oListenerValue?: object
    ): this;
  }
}
