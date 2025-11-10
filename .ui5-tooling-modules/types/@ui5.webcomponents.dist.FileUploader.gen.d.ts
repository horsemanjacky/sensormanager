// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Original webc imports
 */
import type { FileData } from "@ui5/webcomponents/dist/FileUploader";

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

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/FileUploader" {
  export interface $FileUploaderSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Comma-separated list of file types that the component should accept.
     *
     * **Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.
     */
    accept?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.
     *
     * **Note:** Use this property in combination with the default slot to achieve a button-only file uploader design.
     */
    hideInput?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is completely noninteractive.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Allows multiple files to be chosen.
     */
    multiple?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a short hint intended to aid the user with data entry when the component has no value.
     */
    placeholder?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the name/names of the file/files to upload.
     */
    value?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.
     */
    maxFileSize?: float | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the value state of the component.
     */
    valueState?:
      | ValueState
      | keyof typeof ValueState
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines whether the component is required.
     */
    required?: boolean | PropertyBindingInfo | `{${string}}`;

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
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     */
    valueStateText?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Aggregations
     */

    /**
     * This slot allows you to add custom content to the component, such as a button or any other interactive element to trigger the file selection dialog.
     *
     * **Note:** For best accessibility experience, set a `tabindex` of "-1" on your interactive element, or it will be set automatically.
     * This slot is intended for use cases where you want a button-only file uploader.
     * It is recommended to set `hideInput` property to "true" when using this slot.
     * Not setting `hideInput` may negatively impact the screen reader users.
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

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
     * Event is fired when the value of the file path has been changed.
     *
     * **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.
     */
    change?: (oEvent: FileUploader$ChangeEvent) => void;

    /**
     * Event is fired when the size of a file is above the `maxFileSize` property value.
     */
    fileSizeExceed?: (oEvent: FileUploader$FileSizeExceedEvent) => void;
  }
  export interface FileUploader$ChangeEventParameters {
    /**
     * The current files.
     */
    files?: FileList | null;
  }

  export type FileUploader$ChangeEvent = Event<
    FileUploader$ChangeEventParameters,
    FileUploader
  >;
  export interface FileUploader$FileSizeExceedEventParameters {
    /**
     * An array of `FileData` objects containing the`fileName` and `fileSize` in MB of each file that exceeds the upload limit.
     */
    filesData?: Array<FileData> | FileData;
  }

  export type FileUploader$FileSizeExceedEvent = Event<
    FileUploader$FileSizeExceedEventParameters,
    FileUploader
  >;

  export default class FileUploader
    extends WebComponent
    implements IFormContent
  {
    __implements_sap_ui_core_library_IFormContent: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FileUploaderSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $FileUploaderSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/FileUploader" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, FileUploader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/FileUploader".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getAccept accept}.
     * Comma-separated list of file types that the component should accept.
     *
     * **Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.
     * @returns The content of the property
     */
    getAccept(): string;

    /**
     * Sets a new value for property {@link #getAccept accept}.
     * Comma-separated list of file types that the component should accept.
     *
     * **Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccept(acceptValue: string | null): this;

    /**
     * Gets current value of property {@link #getHideInput hideInput}.
     * If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.
     *
     * **Note:** Use this property in combination with the default slot to achieve a button-only file uploader design.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideInput(): boolean;

    /**
     * Sets a new value for property {@link #getHideInput hideInput}.
     * If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.
     *
     * **Note:** Use this property in combination with the default slot to achieve a button-only file uploader design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideInput(hideInputValue?: boolean | null): this;

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
     * Gets current value of property {@link #getMultiple multiple}.
     * Allows multiple files to be chosen.
     * Default value is `false`.
     * @returns The content of the property
     */
    getMultiple(): boolean;

    /**
     * Sets a new value for property {@link #getMultiple multiple}.
     * Allows multiple files to be chosen.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMultiple(multipleValue?: boolean | null): this;

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
     * Gets current value of property {@link #getPlaceholder placeholder}.
     * Defines a short hint intended to aid the user with data entry when the component has no value.
     * @returns The content of the property
     */
    getPlaceholder(): string;

    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     * Defines a short hint intended to aid the user with data entry when the component has no value.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPlaceholder(placeholderValue: string | null): this;

    /**
     * Gets current value of property {@link #getValue value}.
     * Defines the name/names of the file/files to upload.
     * Default value is ``.
     * @returns The content of the property
     */
    getValue(): string;

    /**
     * Sets a new value for property {@link #getValue value}.
     * Defines the name/names of the file/files to upload.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is ``.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(valueValue?: string | null): this;

    /**
     * Gets current value of property {@link #getMaxFileSize maxFileSize}.
     * Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.
     * @returns The content of the property
     */
    getMaxFileSize(): float;

    /**
     * Sets a new value for property {@link #getMaxFileSize maxFileSize}.
     * Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxFileSize(maxFileSizeValue: float | null): this;

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
     * Gets current value of property {@link #getFiles files}.
     * FileList of all selected files.
     * @returns The content of the property
     */
    getFiles(): FileList | null;

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
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     * @returns The content of the property
     */
    getValueStateText(): string;

    /**
     * Sets a new value for property {@link #getValueStateText valueStateText}.
     * Defines the value state message that will be displayed as pop up under the component.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Critical` or `Negative` value state.
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueStateText(valueStateTextValue: string | null): this;

    /**
     * Gets content of aggregation {@link #getContent content}.
     * This slot allows you to add custom content to the component, such as a button or any other interactive element to trigger the file selection dialog.
     *
     * **Note:** For best accessibility experience, set a `tabindex` of "-1" on your interactive element, or it will be set automatically.
     * This slot is intended for use cases where you want a button-only file uploader.
     * It is recommended to set `hideInput` property to "true" when using this slot.
     * Not setting `hideInput` may negatively impact the screen reader users.
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
     * Detaches event handler `fnFunction` from the {@link #getChange change} event of this `FileUploader`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: FileUploader$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this FileUploader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `FileUploader`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `FileUploader` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: FileUploader$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this FileUploader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getChange change} event of this `FileUploader`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `FileUploader` itself.
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
      fnFunctionValue: (p1: FileUploader$ChangeEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this FileUploader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Detaches event handler `fnFunction` from the {@link #getFileSizeExceed fileSizeExceed} event of this `FileUploader`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachFileSizeExceed(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: FileUploader$FileSizeExceedEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this FileUploader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getFileSizeExceed fileSizeExceed} event of this `FileUploader`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `FileUploader` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFileSizeExceed(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: FileUploader$FileSizeExceedEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this FileUploader itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getFileSizeExceed fileSizeExceed} event of this `FileUploader`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `FileUploader` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachFileSizeExceed(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: FileUploader$FileSizeExceedEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this FileUploader itself
       */
      oListenerValue?: object
    ): this;
  }
}
