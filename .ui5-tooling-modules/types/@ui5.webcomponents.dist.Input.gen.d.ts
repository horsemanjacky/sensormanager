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
  IFormContent,
  ValueState,
  CSSSize,
  ID
} from "sap/ui/core/library";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type {
  PropertyBindingInfo,
  AggregationBindingInfo
} from "sap/ui/base/ManagedObject";

import type {
  InputType,
  IInputSuggestionItem,
  IIcon
} from "@ui5/webcomponents";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Input" {
  export interface $InputSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is completely noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a short hint intended to aid the user with data entry when the
     * component has no value.
     */
    placeholder?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     */
    readonly?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the value will be autcompleted to match an item
     */
    noTypeahead?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the HTML type of the component.
     *
     * **Notes:**
     *
     * - The particular effect of this property differs depending on the browser
     * and the current language settings, especially for type `Number`.
     * - The property is mostly intended to be used with touch devices
     * that use different soft keyboard layouts depending on the given input type.
     */
    type?:
      | InputType
      | keyof typeof InputType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the value of the component.
     *
     * **Note:** The property is updated upon typing.
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component should show suggestions, if such are present.
     */
    showSuggestions?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the maximum number of characters available in the input field.
     *
     * **Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.
     */
    maxlength?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible ARIA name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the accessible description of the component.
     */
    accessibleDescription?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Receives id(or many ids) of the elements that describe the input.
     */
    accessibleDescriptionRef?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the clear icon of the input will be shown.
     */
    showClearIcon?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the suggestions picker is open.
     * The picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.
     * The picker will close automatically and `close` event will be fired if the input is not in the viewport.
     */
    open?: boolean | PropertyBindingInfo | `{${string}}`;

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
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
     */
    valueStateText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * Defines the suggestion items.
     *
     * **Note:** The suggestions would be displayed only if the `showSuggestions`
     * property is set to `true`.
     *
     * **Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.
     */
    suggestionItems?:
      | Array<IInputSuggestionItem>
      | IInputSuggestionItem
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * Defines the icon to be displayed in the component.
     */
    icon?: Array<IIcon> | IIcon | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Receives id(or many ids) of the elements that label the input.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired when the input operation has finished by pressing Enter or on focusout.
     */
    change?: (oEvent: Input$ChangeEvent) => void;

    /**
     * Fired when the value of the component changes at each keystroke,
     * and when a suggestion item has been selected.
     */
    input?: (oEvent: Input$InputEvent) => void;

    /**
     * Fired when some text has been selected.
     */
    select?: (oEvent: Input$SelectEvent) => void;

    /**
     * Fired when the user navigates to a suggestion item via the ARROW keys,
     * as a preview, before the final selection.
     */
    selectionChange?: (oEvent: Input$SelectionChangeEvent) => void;

    /**
     * Fired when the suggestions picker is open.
     */
    open?: (oEvent: Input$OpenEvent) => void;

    /**
     * Fired when the suggestions picker is closed.
     */
    close?: (oEvent: Input$CloseEvent) => void;
  }
  export interface Input$ChangeEventParameters {}

  export type Input$ChangeEvent = Event<Input$ChangeEventParameters, Input>;
  export interface Input$InputEventParameters {}

  export type Input$InputEvent = Event<Input$InputEventParameters, Input>;
  export interface Input$SelectEventParameters {}

  export type Input$SelectEvent = Event<Input$SelectEventParameters, Input>;
  export interface Input$SelectionChangeEventParameters {
    /**
     * The previewed suggestion item.
     */
    item?: Control;
  }

  export type Input$SelectionChangeEvent = Event<
    Input$SelectionChangeEventParameters,
    Input
  >;
  export interface Input$OpenEventParameters {}

  export type Input$OpenEvent = Event<Input$OpenEventParameters, Input>;
  export interface Input$CloseEventParameters {}

  export type Input$CloseEvent = Event<Input$CloseEventParameters, Input>;

  export default class Input extends WebComponent implements IFormContent {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $InputSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $InputSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Input" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Input>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Input".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getEnabled enabled}.
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is completely noninteractive.
     * Default value is `true`.
     * @returns The content of the property
     */
    getEnabled(): boolean;

    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is completely noninteractive.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setEnabled(enabledValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getPlaceholder placeholder}.
     * Defines a short hint intended to aid the user with data entry when the
     * component has no value.
     * @returns The content of the property
     */
    getPlaceholder(): string;

    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     * Defines a short hint intended to aid the user with data entry when the
     * component has no value.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlaceholder(placeholderValue: string | null): this;

    /**
     * Gets current value of property {@link #getReadonly readonly}.
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * Default value is `false`.
     * @returns The content of the property
     */
    getReadonly(): boolean;

    /**
     * Sets a new value for property {@link #getReadonly readonly}.
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setReadonly(readonlyValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getRequired required}.
     * Defines whether the component is required.
     * Default value is `false`.
     * @returns The content of the property
     */
    getRequired(): boolean;

    /**
     * Sets a new value for property {@link #getRequired required}.
     * Defines whether the component is required.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setRequired(requiredValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getNoTypeahead noTypeahead}.
     * Defines whether the value will be autcompleted to match an item
     * Default value is `false`.
     * @returns The content of the property
     */
    getNoTypeahead(): boolean;

    /**
     * Sets a new value for property {@link #getNoTypeahead noTypeahead}.
     * Defines whether the value will be autcompleted to match an item
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setNoTypeahead(noTypeaheadValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getType type}.
     * Defines the HTML type of the component.
     *
     * **Notes:**
     *
     * - The particular effect of this property differs depending on the browser
     * and the current language settings, especially for type `Number`.
     * - The property is mostly intended to be used with touch devices
     * that use different soft keyboard layouts depending on the given input type.
     * Default value is `Text`.
     * @returns The content of the property
     */
    getType(): InputType | keyof typeof InputType;

    /**
     * Sets a new value for property {@link #getType type}.
     * Defines the HTML type of the component.
     *
     * **Notes:**
     *
     * - The particular effect of this property differs depending on the browser
     * and the current language settings, especially for type `Number`.
     * - The property is mostly intended to be used with touch devices
     * that use different soft keyboard layouts depending on the given input type.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Text`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(typeValue?: InputType | keyof typeof InputType | null): this;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines the value of the component.
     *
     * **Note:** The property is updated upon typing.
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the value of the component.
     *
     * **Note:** The property is updated upon typing.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getValueState valueState}.
     * Defines the value state of the component.
     * Default value is `None`.
     * @returns The content of the property
     */
    getValueState(): ValueState | keyof typeof ValueState;

    /**
     * Sets a new value for property {@link #getValueState valueState}.
     * Defines the value state of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueState(
      valueStateValue?: ValueState | keyof typeof ValueState | null
    ): this;

    /**
     * Gets current value of property {@link #getName name}.
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * @returns The content of the property
     */
    getName(): string;

    /**
     * Sets a new value for property {@link #getName name}.
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(nameValue: string | null): this;

    /**
     * Gets current value of property {@link #getShowSuggestions showSuggestions}.
     * Defines whether the component should show suggestions, if such are present.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowSuggestions(): boolean;

    /**
     * Sets a new value for property {@link #getShowSuggestions showSuggestions}.
     * Defines whether the component should show suggestions, if such are present.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowSuggestions(showSuggestionsValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getMaxlength maxlength}.
     * Sets the maximum number of characters available in the input field.
     *
     * **Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.
     * @returns The content of the property
     */
    getMaxlength(): float;

    /**
     * Sets a new value for property {@link #getMaxlength maxlength}.
     * Sets the maximum number of characters available in the input field.
     *
     * **Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxlength(maxlengthValue: float | null): this;

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
     * Receives id(or many ids) of the elements that describe the input.
     * @returns The content of the property
     */
    getAccessibleDescriptionRef(): string;

    /**
     * Sets a new value for property {@link #getAccessibleDescriptionRef accessibleDescriptionRef}.
     * Receives id(or many ids) of the elements that describe the input.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleDescriptionRef(
      accessibleDescriptionRefValue: string | null
    ): this;

    /**
     * Gets current value of property {@link #getShowClearIcon showClearIcon}.
     * Defines whether the clear icon of the input will be shown.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowClearIcon(): boolean;

    /**
     * Sets a new value for property {@link #getShowClearIcon showClearIcon}.
     * Defines whether the clear icon of the input will be shown.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowClearIcon(showClearIconValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getOpen open}.
     * Defines whether the suggestions picker is open.
     * The picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.
     * The picker will close automatically and `close` event will be fired if the input is not in the viewport.
     * Default value is `false`.
     * @returns The content of the property
     */
    getOpen(): boolean;

    /**
     * Sets a new value for property {@link #getOpen open}.
     * Defines whether the suggestions picker is open.
     * The picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.
     * The picker will close automatically and `close` event will be fired if the input is not in the viewport.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setOpen(openValue?: boolean | null): this;

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
     * Gets current value of property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
     * @returns The content of the property
     */
    getValueStateText(): string;

    /**
     * Sets a new value for property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueStateText(valueStateTextValue: string | null): this;

    /**
     * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
     * Defines the suggestion items.
     *
     * **Note:** The suggestions would be displayed only if the `showSuggestions`
     * property is set to `true`.
     *
     * **Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.
     * @returns The content of the aggregation
     */
    getSuggestionItems(): Array<IInputSuggestionItem> | IInputSuggestionItem;

    /**
     * Destroys the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroySuggestionItems(): this;

    /**
     * Adds some suggestionItems to the aggregation {@link #getSuggestionItems suggestionItems}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addSuggestionItem(
      suggestionItemValue: Array<IInputSuggestionItem> | IInputSuggestionItem
    ): this;

    /**
     * Inserts a suggestionItems into the aggregation {@link #getSuggestionItems suggestionItems}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertSuggestionItem(
      suggestionItemValue: Array<IInputSuggestionItem> | IInputSuggestionItem,

      indexValue: int
    ): this;

    /**
     * Removes a suggestionItems from the aggregation {@link #getSuggestionItems suggestionItems}.
     * @returns The removed suggestionItems or `null`
     */
    removeSuggestionItem(
      suggestionItemValue:
        | Array<IInputSuggestionItem>
        | IInputSuggestionItem
        | int
        | ID
    ): Array<IInputSuggestionItem> | IInputSuggestionItem | null;

    /**
     * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllSuggestionItems():
      | Array<IInputSuggestionItem>
      | IInputSuggestionItem;

    /**
     * Checks for the provided 'IInputSuggestionItem' in the aggregation {@link #getSuggestionItems suggestionItems} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfSuggestionItem(
      suggestionItemValue: Array<IInputSuggestionItem> | IInputSuggestionItem
    ): int;

    /**
     * Gets content of aggregation {@link #getIcon icon}.
     * Defines the icon to be displayed in the component.
     * @returns The content of the aggregation
     */
    getIcon(): Array<IIcon> | IIcon;

    /**
     * Destroys the icon in the aggregation {@link #getIcon icon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyIcon(): this;

    /**
     * Adds some icon to the aggregation {@link #getIcon icon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    addIcon(iconValue: Array<IIcon> | IIcon): this;

    /**
     * Inserts an icon into the aggregation {@link #getIcon icon}.
     * @returns Reference to `this` in order to allow method chaining
     */
    insertIcon(
      iconValue: Array<IIcon> | IIcon,

      indexValue: int
    ): this;

    /**
     * Removes an icon from the aggregation {@link #getIcon icon}.
     * @returns The removed icon or `null`
     */
    removeIcon(
      iconValue: Array<IIcon> | IIcon | int | ID
    ): Array<IIcon> | IIcon | null;

    /**
     * Removes all the controls from the aggregation {@link #getIcon icon}.
     * Additionally, it unregisters them from the hosting UIArea.
     * @returns An array of the removed elements (might be empty)
     */
    removeAllIcon(): Array<IIcon> | IIcon;

    /**
     * Checks for the provided 'IIcon' in the aggregation {@link #getIcon icon} and returns its index if found or -1 otherwise.
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfIcon(iconValue: Array<IIcon> | IIcon): int;

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

    /**
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `Input`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getInput input} event of this `Input`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getInput input} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachInput(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$InputEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelect select} event of this `Input`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$SelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelect select} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$SelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelect select} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelect(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$SelectEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getSelectionChange selectionChange} event of this `Input`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getSelectionChange selectionChange} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachSelectionChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$SelectionChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getOpen open} event of this `Input`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getOpen open} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachOpen(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$OpenEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getClose close} event of this `Input`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClose close} event of this `Input`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Input` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClose(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Input$CloseEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Input itself
       */
      oListenerValue?: object
    ): this;
  }
}
