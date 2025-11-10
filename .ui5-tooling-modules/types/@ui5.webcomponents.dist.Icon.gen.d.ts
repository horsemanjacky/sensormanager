// ESLint directives, to have no conflicts with project ESLint settings
/* eslint-disable @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-function-type */

/**
 * Default imports
 */
import type { default as WebComponentMetadata } from "sap/ui/core/webc/WebComponentMetadata";

/**
 * Dynamic imports
 */
import type { IIcon, IconDesign, IconMode } from "@ui5/webcomponents";

import type {
  default as WebComponent,
  $WebComponentSettings
} from "sap/ui/core/webc/WebComponent";

import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

import type { CSSSize } from "sap/ui/core/library";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Icon" {
  export interface $IconSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the component semantic design.
     */
    design?:
      | IconDesign
      | keyof typeof IconDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the unique identifier (icon name) of the component.
     *
     * To browse all available icons, see the
     * [SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),
     * [SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and
     * [SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)
     *
     * Example:
     * `name='add'`, `name='delete'`, `name='employee'`.
     *
     * **Note:** To use the SAP Fiori Tools icons,
     * you need to set the `tnt` prefix in front of the icon's name.
     *
     * Example:
     * `name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.
     *
     * **Note:** To use the SAP Business Suite icons,
     * you need to set the `business-suite` prefix in front of the icon's name.
     *
     * Example:
     * `name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.
     */
    name?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the text alternative of the component.
     * If not provided a default text alternative will be set, if present.
     *
     * **Note:** Every icon should have a text alternative in order to
     * calculate its accessible name.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the component should have a tooltip.
     *
     * **Note:** The tooltip text should be provided via the `accessible-name` property.
     */
    showTooltip?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the mode of the component.
     */
    mode?:
      | IconMode
      | keyof typeof IconMode
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
     * Events
     */

    /**
     * Fired on mouseup, `SPACE` and `ENTER`.
     * - on mouse click, the icon fires native `click` event
     * - on `SPACE` and `ENTER`, the icon fires custom `click` event
     */
    click?: (oEvent: Icon$ClickEvent) => void;
  }
  export interface Icon$ClickEventParameters {}

  export type Icon$ClickEvent = Event<Icon$ClickEventParameters, Icon>;

  export default class Icon extends WebComponent implements IIcon {
    __implements__ui5_webcomponents_IIcon: boolean;

    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $IconSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $IconSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Icon" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Icon>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Icon".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Gets current value of property {@link #getDesign design}.
     * Defines the component semantic design.
     * Default value is `Default`.
     * @returns The content of the property
     */
    getDesign(): IconDesign | keyof typeof IconDesign;

    /**
     * Sets a new value for property {@link #getDesign design}.
     * Defines the component semantic design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(designValue?: IconDesign | keyof typeof IconDesign | null): this;

    /**
     * Gets current value of property {@link #getName name}.
     * Defines the unique identifier (icon name) of the component.
     *
     * To browse all available icons, see the
     * [SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),
     * [SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and
     * [SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)
     *
     * Example:
     * `name='add'`, `name='delete'`, `name='employee'`.
     *
     * **Note:** To use the SAP Fiori Tools icons,
     * you need to set the `tnt` prefix in front of the icon's name.
     *
     * Example:
     * `name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.
     *
     * **Note:** To use the SAP Business Suite icons,
     * you need to set the `business-suite` prefix in front of the icon's name.
     *
     * Example:
     * `name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.
     * @returns The content of the property
     */
    getName(): string;

    /**
     * Sets a new value for property {@link #getName name}.
     * Defines the unique identifier (icon name) of the component.
     *
     * To browse all available icons, see the
     * [SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),
     * [SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and
     * [SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)
     *
     * Example:
     * `name='add'`, `name='delete'`, `name='employee'`.
     *
     * **Note:** To use the SAP Fiori Tools icons,
     * you need to set the `tnt` prefix in front of the icon's name.
     *
     * Example:
     * `name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.
     *
     * **Note:** To use the SAP Business Suite icons,
     * you need to set the `business-suite` prefix in front of the icon's name.
     *
     * Example:
     * `name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setName(nameValue: string | null): this;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     * If not provided a default text alternative will be set, if present.
     *
     * **Note:** Every icon should have a text alternative in order to
     * calculate its accessible name.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the text alternative of the component.
     * If not provided a default text alternative will be set, if present.
     *
     * **Note:** Every icon should have a text alternative in order to
     * calculate its accessible name.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getShowTooltip showTooltip}.
     * Defines whether the component should have a tooltip.
     *
     * **Note:** The tooltip text should be provided via the `accessible-name` property.
     * Default value is `false`.
     * @returns The content of the property
     */
    getShowTooltip(): boolean;

    /**
     * Sets a new value for property {@link #getShowTooltip showTooltip}.
     * Defines whether the component should have a tooltip.
     *
     * **Note:** The tooltip text should be provided via the `accessible-name` property.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setShowTooltip(showTooltipValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getMode mode}.
     * Defines the mode of the component.
     * Default value is `Decorative`.
     * @returns The content of the property
     */
    getMode(): IconMode | keyof typeof IconMode;

    /**
     * Sets a new value for property {@link #getMode mode}.
     * Defines the mode of the component.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Decorative`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setMode(modeValue?: IconMode | keyof typeof IconMode | null): this;

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
     * Detaches event handler `fnFunction` from the {@link #getClick click} event of this `Icon`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Icon$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Icon itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Icon`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Icon` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Icon$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Icon itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getClick click} event of this `Icon`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Icon` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachClick(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Icon$ClickEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Icon itself
       */
      oListenerValue?: object
    ): this;
  }
}
