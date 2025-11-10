declare module "@ui5/webcomponents-base" {
  /**
   * Declaration of enums
   */
  /**
   * Different types of AnimationMode.
   */
  export enum AnimationMode {
    Full = "Full",

    Basic = "Basic",

    Minimal = "Minimal",

    None = "None"
  }
  /**
   * Different calendar types.
   */
  export enum CalendarType {
    Gregorian = "Gregorian",

    Islamic = "Islamic",

    Japanese = "Japanese",

    Buddhist = "Buddhist",

    Persian = "Persian"
  }
  /**
   * Different behavior for ItemNavigation.
   */
  export enum ItemNavigationBehavior {
    /**
     * Static behavior: navigations stops at the first or last item.
     */
    Static = "Static",
    /**
     * Cycling behavior: navigating past the last item continues with the first and vice versa.
     */
    Cyclic = "Cyclic"
  }
  /**
   * Placements of a moved element relative to a target element.
   */
  export enum MovePlacement {
    On = "On",

    Before = "Before",

    After = "After"
  }
  /**
   * Different navigation modes for ItemNavigation.
   */
  export enum NavigationMode {
    Auto = "Auto",

    Vertical = "Vertical",

    Horizontal = "Horizontal",

    Paging = "Paging"
  }
  /**
   * Defines the sort order.
   */
  export enum SortOrder {
    /**
     * Sorting is not applied.
     */
    None = "None",
    /**
     * Sorting is applied in ascending order.
     */
    Ascending = "Ascending",
    /**
     * Sorting is applied in descending order.
     */
    Descending = "Descending"
  }
  /**
   * Different types of ValueStates.
   */
  export enum ValueState {
    None = "None",

    Positive = "Positive",

    Critical = "Critical",

    Negative = "Negative",

    Information = "Information"
  }
}
