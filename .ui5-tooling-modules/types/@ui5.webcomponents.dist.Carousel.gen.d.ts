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
  CarouselPageIndicatorType,
  BackgroundDesign,
  BorderDesign,
  CarouselArrowsPlacement
} from "@ui5/webcomponents";

import type { CSSSize, ID } from "sap/ui/core/library";

import type { default as Control } from "sap/ui/core/Control";

import type { default as Event } from "sap/ui/base/Event";

declare module "@ui5/webcomponents/dist/Carousel" {
  export interface $CarouselSettings extends $WebComponentSettings {
    /**
     * Properties
     */

    /**
     * Defines the accessible name of the component.
     */
    accessibleName?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
     */
    cyclic?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the number of items per page depending on the carousel width.
     *
     * - 'S' for screens smaller than 600 pixels.
     * - 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
     * - 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
     * - 'XL' for screens greater than or equal to 1440 pixels.
     *
     * One item per page is shown by default.
     */
    itemsPerPage?: string | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the navigation arrows.
     * If set to true the navigation arrows will be hidden.
     */
    hideNavigationArrows?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the visibility of the page indicator.
     * If set to true the page indicator will be hidden.
     */
    hidePageIndicator?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the style of the page indicator.
     * Available options are:
     *
     * - `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
     * - `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)
     */
    pageIndicatorType?:
      | CarouselPageIndicatorType
      | keyof typeof CarouselPageIndicatorType
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the carousel's background design.
     */
    backgroundDesign?:
      | BackgroundDesign
      | keyof typeof BackgroundDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the page indicator background design.
     */
    pageIndicatorBackgroundDesign?:
      | BackgroundDesign
      | keyof typeof BackgroundDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the page indicator border design.
     */
    pageIndicatorBorderDesign?:
      | BorderDesign
      | keyof typeof BorderDesign
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the position of arrows.
     *
     * Available options are:
     *
     * - `Content` - the arrows are placed on the sides of the current page.
     * - `Navigation` - the arrows are placed on the sides of the page indicator.
     */
    arrowsPlacement?:
      | CarouselArrowsPlacement
      | keyof typeof CarouselArrowsPlacement
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
     * Defines the content of the component.
     *
     * **Note:** Items with the `hidden` attribute will be automatically excluded from carousel navigation and page calculations.
     * They will not be displayed or accessible via keyboard navigation. See [sample](./#carousel-with-hidden-items).
     */
    content?: Array<Control> | Control | AggregationBindingInfo | `{${string}}`;

    /**
     * Associations
     */

    /**
     * Defines the IDs of the elements that label the input.
     */
    ariaLabelledBy?: Array<Control> | Control | Array<string> | string;

    /**
     * Events
     */

    /**
     * Fired whenever the page changes due to user interaction,
     * when the user clicks on the navigation arrows or while resizing,
     * based on the `items-per-page` property.
     */
    navigate?: (oEvent: Carousel$NavigateEvent) => void;
  }
  export interface Carousel$NavigateEventParameters {
    /**
     * the current selected index
     */
    selectedIndex?: int;
  }

  export type Carousel$NavigateEvent = Event<
    Carousel$NavigateEventParameters,
    Carousel
  >;

  export default class Carousel extends WebComponent {
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CarouselSettings
    );

    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      id?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CarouselSettings
    );

    /**
     * Creates a new subclass of class "@ui5/webcomponents/dist/Carousel" with name `sClassName` and enriches it with the information
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
      oClassInfo?: sap.ClassInfo<T, Carousel>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;

    /**
     * Returns a metadata object for class "@ui5/webcomponents/dist/Carousel".
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;

    /**
     * Changes the currently displayed page.
     */
    navigateTo(
      /**
       * The index of the target page
       */
      itemIndexValue: float
    ): void;

    /**
     * Gets current value of property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the component.
     * @returns The content of the property
     */
    getAccessibleName(): string;

    /**
     * Sets a new value for property {@link #getAccessibleName accessibleName}.
     * Defines the accessible name of the component.
     * @returns Reference to `this` in order to allow method chaining
     */
    setAccessibleName(accessibleNameValue: string | null): this;

    /**
     * Gets current value of property {@link #getCyclic cyclic}.
     * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
     * Default value is `false`.
     * @returns The content of the property
     */
    getCyclic(): boolean;

    /**
     * Sets a new value for property {@link #getCyclic cyclic}.
     * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setCyclic(cyclicValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getItemsPerPage itemsPerPage}.
     * Defines the number of items per page depending on the carousel width.
     *
     * - 'S' for screens smaller than 600 pixels.
     * - 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
     * - 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
     * - 'XL' for screens greater than or equal to 1440 pixels.
     *
     * One item per page is shown by default.
     * Default value is `S1 M1 L1 XL1`.
     * @returns The content of the property
     */
    getItemsPerPage(): string;

    /**
     * Sets a new value for property {@link #getItemsPerPage itemsPerPage}.
     * Defines the number of items per page depending on the carousel width.
     *
     * - 'S' for screens smaller than 600 pixels.
     * - 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
     * - 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
     * - 'XL' for screens greater than or equal to 1440 pixels.
     *
     * One item per page is shown by default.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `S1 M1 L1 XL1`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setItemsPerPage(itemsPerPageValue?: string | null): this;

    /**
     * Gets current value of property {@link #getHideNavigationArrows hideNavigationArrows}.
     * Defines the visibility of the navigation arrows.
     * If set to true the navigation arrows will be hidden.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHideNavigationArrows(): boolean;

    /**
     * Sets a new value for property {@link #getHideNavigationArrows hideNavigationArrows}.
     * Defines the visibility of the navigation arrows.
     * If set to true the navigation arrows will be hidden.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHideNavigationArrows(hideNavigationArrowsValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getHidePageIndicator hidePageIndicator}.
     * Defines the visibility of the page indicator.
     * If set to true the page indicator will be hidden.
     * Default value is `false`.
     * @returns The content of the property
     */
    getHidePageIndicator(): boolean;

    /**
     * Sets a new value for property {@link #getHidePageIndicator hidePageIndicator}.
     * Defines the visibility of the page indicator.
     * If set to true the page indicator will be hidden.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setHidePageIndicator(hidePageIndicatorValue?: boolean | null): this;

    /**
     * Gets current value of property {@link #getPageIndicatorType pageIndicatorType}.
     * Defines the style of the page indicator.
     * Available options are:
     *
     * - `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
     * - `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)
     * Default value is `Default`.
     * @returns The content of the property
     */
    getPageIndicatorType():
      | CarouselPageIndicatorType
      | keyof typeof CarouselPageIndicatorType;

    /**
     * Sets a new value for property {@link #getPageIndicatorType pageIndicatorType}.
     * Defines the style of the page indicator.
     * Available options are:
     *
     * - `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
     * - `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPageIndicatorType(
      pageIndicatorTypeValue?:
        | CarouselPageIndicatorType
        | keyof typeof CarouselPageIndicatorType
        | null
    ): this;

    /**
     * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
     * Defines the carousel's background design.
     * Default value is `Translucent`.
     * @returns The content of the property
     */
    getBackgroundDesign(): BackgroundDesign | keyof typeof BackgroundDesign;

    /**
     * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
     * Defines the carousel's background design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Translucent`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setBackgroundDesign(
      backgroundDesignValue?:
        | BackgroundDesign
        | keyof typeof BackgroundDesign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getPageIndicatorBackgroundDesign pageIndicatorBackgroundDesign}.
     * Defines the page indicator background design.
     * Default value is `Solid`.
     * @returns The content of the property
     */
    getPageIndicatorBackgroundDesign():
      | BackgroundDesign
      | keyof typeof BackgroundDesign;

    /**
     * Sets a new value for property {@link #getPageIndicatorBackgroundDesign pageIndicatorBackgroundDesign}.
     * Defines the page indicator background design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPageIndicatorBackgroundDesign(
      pageIndicatorBackgroundDesignValue?:
        | BackgroundDesign
        | keyof typeof BackgroundDesign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getPageIndicatorBorderDesign pageIndicatorBorderDesign}.
     * Defines the page indicator border design.
     * Default value is `Solid`.
     * @returns The content of the property
     */
    getPageIndicatorBorderDesign(): BorderDesign | keyof typeof BorderDesign;

    /**
     * Sets a new value for property {@link #getPageIndicatorBorderDesign pageIndicatorBorderDesign}.
     * Defines the page indicator border design.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setPageIndicatorBorderDesign(
      pageIndicatorBorderDesignValue?:
        | BorderDesign
        | keyof typeof BorderDesign
        | null
    ): this;

    /**
     * Gets current value of property {@link #getArrowsPlacement arrowsPlacement}.
     * Defines the position of arrows.
     *
     * Available options are:
     *
     * - `Content` - the arrows are placed on the sides of the current page.
     * - `Navigation` - the arrows are placed on the sides of the page indicator.
     * Default value is `Content`.
     * @returns The content of the property
     */
    getArrowsPlacement():
      | CarouselArrowsPlacement
      | keyof typeof CarouselArrowsPlacement;

    /**
     * Sets a new value for property {@link #getArrowsPlacement arrowsPlacement}.
     * Defines the position of arrows.
     *
     * Available options are:
     *
     * - `Content` - the arrows are placed on the sides of the current page.
     * - `Navigation` - the arrows are placed on the sides of the page indicator.
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Content`.
     * @returns Reference to `this` in order to allow method chaining
     */
    setArrowsPlacement(
      arrowsPlacementValue?:
        | CarouselArrowsPlacement
        | keyof typeof CarouselArrowsPlacement
        | null
    ): this;

    /**
     * Gets current value of property {@link #getVisibleItemsIndices visibleItemsIndices}.
     * The indices of the currently visible items of the component.
     * @returns The content of the property
     */
    getVisibleItemsIndices(): Array<float> | float;

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
     * Gets content of aggregation {@link #getContent content}.
     * Defines the content of the component.
     *
     * **Note:** Items with the `hidden` attribute will be automatically excluded from carousel navigation and page calculations.
     * They will not be displayed or accessible via keyboard navigation. See [sample](./#carousel-with-hidden-items).
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
     * Detaches event handler `fnFunction` from the {@link #getNavigate navigate} event of this `Carousel`.
     * The passed function and listener object must match the ones used for event registration.
     * @returns Reference to `this` in order to allow method chaining
     */
    detachNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Carousel$NavigateEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Carousel itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getNavigate navigate} event of this `Carousel`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Carousel` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigate(
      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Carousel$NavigateEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Carousel itself
       */
      oListenerValue?: object
    ): this;

    /**
     * Attaches event handler `fnFunction` to the {@link #getNavigate navigate} event of this `Carousel`.
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     *  * otherwise it will be bound to this `Carousel` itself.
     * @returns Reference to `this` in order to allow method chaining
     */
    attachNavigate(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event object when firing the event
       */
      oDataValue: object,

      /**
       * The function to be called when the event occurs
       */
      fnFunctionValue: (p1: Carousel$NavigateEvent) => void,

      /**
       * Context object to call the event handler with. Defaults to this Carousel itself
       */
      oListenerValue?: object
    ): this;
  }
}
