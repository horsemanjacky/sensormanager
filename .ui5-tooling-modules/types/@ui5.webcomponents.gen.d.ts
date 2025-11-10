declare module "@ui5/webcomponents" {
  /**
   * Declaration of enums
   */
  /**
   * Different types of AvatarColorScheme.
   */
  export enum AvatarColorScheme {
    Auto = "Auto",

    Accent1 = "Accent1",

    Accent2 = "Accent2",

    Accent3 = "Accent3",

    Accent4 = "Accent4",

    Accent5 = "Accent5",

    Accent6 = "Accent6",

    Accent7 = "Accent7",

    Accent8 = "Accent8",

    Accent9 = "Accent9",

    Accent10 = "Accent10",

    Placeholder = "Placeholder",

    Transparent = "Transparent"
  }
  /**
   * Different types of AvatarGroupType.
   */
  export enum AvatarGroupType {
    /**
     * The avatars are displayed as partially overlapped on top of each other and the entire group has one click or tap area.
     */
    Group = "Group",
    /**
     * The avatars are displayed side-by-side and each avatar has its own click or tap area.
     */
    Individual = "Individual"
  }
  /**
   * Different types of AvatarShape.
   */
  export enum AvatarShape {
    /**
     * Circular shape.
     */
    Circle = "Circle",
    /**
     * Square shape.
     */
    Square = "Square"
  }
  /**
   * Different types of AvatarSize.
   */
  export enum AvatarSize {
    /**
     * component size - 2rem
     * font size - 1rem
     */
    XS = "XS",
    /**
     * component size - 3rem
     * font size - 1.5rem
     */
    S = "S",
    /**
     * component size - 4rem
     * font size - 2rem
     */
    M = "M",
    /**
     * component size - 5rem
     * font size - 2.5rem
     */
    L = "L",
    /**
     * component size - 7rem
     * font size - 3rem
     */
    XL = "XL"
  }
  /**
   * Defines background designs.
   */
  export enum BackgroundDesign {
    /**
     * A solid background color dependent on the theme.
     */
    Solid = "Solid",
    /**
     * Transparent background.
     */
    Transparent = "Transparent",
    /**
     * A translucent background depending on the opacity value of the theme.
     */
    Translucent = "Translucent"
  }
  /**
   * ListItem accessible roles.
   */
  export enum BarAccessibleRole {
    /**
     * Represents the ARIA role "toolbar".
     */
    Toolbar = "Toolbar",
    /**
     * Represents the ARIA role "none".
     */
    None = "None"
  }
  /**
   * Different types of Bar design
   */
  export enum BarDesign {
    /**
     * Default type
     */
    Header = "Header",
    /**
     * Subheader type
     */
    Subheader = "Subheader",
    /**
     * Footer type
     */
    Footer = "Footer",
    /**
     * Floating Footer type - there is visible border on all sides
     */
    FloatingFooter = "FloatingFooter"
  }
  /**
   * Defines border designs.
   */
  export enum BorderDesign {
    /**
     * A solid border color dependent on the theme.
     */
    Solid = "Solid",
    /**
     * Specifies no border.
     */
    None = "None"
  }
  /**
   * Different  Breadcrumbs designs.
   */
  export enum BreadcrumbsDesign {
    /**
     * Shows the current page as the last item in the trail.
     * The last item contains only plain text and is not a link.
     */
    Standard = "Standard",
    /**
     * All items are displayed as links.
     */
    NoCurrentPage = "NoCurrentPage"
  }
  /**
   * Different Breadcrumbs separators.
   */
  export enum BreadcrumbsSeparator {
    /**
     * The separator appears as "/".
     */
    Slash = "Slash",
    /**
     * The separator appears as "\".
     */
    BackSlash = "BackSlash",
    /**
     * The separator appears as "\\".
     */
    DoubleBackSlash = "DoubleBackSlash",
    /**
     * The separator appears as ">>".
     */
    DoubleGreaterThan = "DoubleGreaterThan",
    /**
     * The separator appears as "//" .
     */
    DoubleSlash = "DoubleSlash",
    /**
     * The separator appears as ">".
     */
    GreaterThan = "GreaterThan"
  }
  /**
   * Different BusyIndicator sizes.
   */
  export enum BusyIndicatorSize {
    /**
     * small size
     */
    S = "S",
    /**
     * medium size
     */
    M = "M",
    /**
     * large size
     */
    L = "L"
  }
  /**
   * Different BusyIndicator text placements.
   */
  export enum BusyIndicatorTextPlacement {
    /**
     * The text will be displayed on top of the busy indicator.
     */
    Top = "Top",
    /**
     * The text will be displayed at the bottom of the busy indicator.
     */
    Bottom = "Bottom"
  }
  /**
   * Button accessible roles.
   */
  export enum ButtonAccessibleRole {
    /**
     * Represents Default (button) ARIA role.
     */
    Button = "Button",
    /**
     * Represents the ARIA role "link".
     */
    Link = "Link"
  }
  /**
   * Determines where the badge will be placed and how it will be styled.
   */
  export enum ButtonBadgeDesign {
    /**
     * The badge is displayed after the text, inside the button.
     */
    InlineText = "InlineText",
    /**
     * The badge is displayed at the top-end corner of the button.
     *
     * **Note:** According to design guidance, the OverlayText design mode is best used in cozy density to avoid potential visual issues in compact.
     */
    OverlayText = "OverlayText",
    /**
     * The badge is displayed as an attention dot.
     */
    AttentionDot = "AttentionDot"
  }
  /**
   * Different Button designs.
   */
  export enum ButtonDesign {
    /**
     * default type (no special styling)
     */
    Default = "Default",
    /**
     * accept type (green button)
     */
    Positive = "Positive",
    /**
     * reject style (red button)
     */
    Negative = "Negative",
    /**
     * transparent type
     */
    Transparent = "Transparent",
    /**
     * emphasized type
     */
    Emphasized = "Emphasized",
    /**
     * attention type
     */
    Attention = "Attention"
  }
  /**
   * Determines if the button has special form-related functionality.
   */
  export enum ButtonType {
    /**
     * The button does not do anything special when inside a form
     */
    Button = "Button",
    /**
     * The button acts as a submit button (submits a form)
     */
    Submit = "Submit",
    /**
     * The button acts as a reset button (resets a form)
     */
    Reset = "Reset"
  }
  /**
   * Enum for calendar legend items' types.
   */
  export enum CalendarLegendItemType {
    /**
     * Set when no type is set.
     */
    None = "None",
    /**
     * Represents the "Working" item in the calendar legend.
     */
    Working = "Working",
    /**
     * Represents the "NonWorking" item in the calendar legend.
     */
    NonWorking = "NonWorking",
    /**
     * Represents the "Type01" item in the calendar legend.
     */
    Type01 = "Type01",
    /**
     * Represents the "Type02" item in the calendar legend.
     */
    Type02 = "Type02",
    /**
     * Represents the "Type03" item in the calendar legend.
     */
    Type03 = "Type03",
    /**
     * Represents the "Type04" item in the calendar legend.
     */
    Type04 = "Type04",
    /**
     * Represents the "Type05" item in the calendar legend.
     */
    Type05 = "Type05",
    /**
     * Represents the "Type06" item in the calendar legend.
     */
    Type06 = "Type06",
    /**
     * Represents the "Type07" item in the calendar legend.
     */
    Type07 = "Type07",
    /**
     * Represents the "Type08" item in the calendar legend.
     */
    Type08 = "Type08",
    /**
     * Represents the "Type09" item in the calendar legend.
     */
    Type09 = "Type09",
    /**
     * Represents the "Type10" item in the calendar legend.
     */
    Type10 = "Type10",
    /**
     * Represents the "Type11" item in the calendar legend.
     */
    Type11 = "Type11",
    /**
     * Represents the "Type12" item in the calendar legend.
     */
    Type12 = "Type12",
    /**
     * Represents the "Type13" item in the calendar legend.
     */
    Type13 = "Type13",
    /**
     * Represents the "Type14" item in the calendar legend.
     */
    Type14 = "Type14",
    /**
     * Represents the "Type15" item in the calendar legend.
     */
    Type15 = "Type15",
    /**
     * Represents the "Type16" item in the calendar legend.
     */
    Type16 = "Type16",
    /**
     * Represents the "Type17" item in the calendar legend.
     */
    Type17 = "Type17",
    /**
     * Represents the "Type18" item in the calendar legend.
     */
    Type18 = "Type18",
    /**
     * Represents the "Type19" item in the calendar legend.
     */
    Type19 = "Type19",
    /**
     * Represents the "Type20" item in the calendar legend.
     */
    Type20 = "Type20"
  }
  /**
   * Different Calendar selection mode.
   */
  export enum CalendarSelectionMode {
    /**
     * Only one date can be selected at a time
     */
    Single = "Single",
    /**
     * Several dates can be selected
     */
    Multiple = "Multiple",
    /**
     * A range defined by a start date and an end date can be selected
     */
    Range = "Range"
  }
  /**
   * The <code>CalendarWeekNumbering</code> enum defines how to calculate calendar weeks. Each
   * value defines:
   * - The first day of the week,
   * - The first week of the year.
   */
  export enum CalendarWeekNumbering {
    /**
     * The default calendar week numbering:
     *
     * The framework determines the week numbering scheme; currently it is derived from the
     * active format locale. Future versions of ui5-webcomponents might select a different week numbering
     * scheme.
     */
    Default = "Default",
    /**
     * Official calendar week numbering in most of Europe (ISO 8601 standard):
     * Monday is first day of the week, the week containing January 4th is first week of the year.
     */
    ISO_8601 = "ISO_8601",
    /**
     * Official calendar week numbering in much of the Middle East (Middle Eastern calendar):
     * Saturday is first day of the week, the week containing January 1st is first week of the year.
     */
    MiddleEastern = "MiddleEastern",
    /**
     * Official calendar week numbering in the United States, Canada, Brazil, Israel, Japan, and
     * other countries (Western traditional calendar):
     * Sunday is first day of the week, the week containing January 1st is first week of the year.
     */
    WesternTraditional = "WesternTraditional"
  }
  /**
   * Different Carousel arrows placement.
   */
  export enum CarouselArrowsPlacement {
    /**
     * Carousel arrows are placed on the sides of the current Carousel page.
     */
    Content = "Content",
    /**
     * Carousel arrows are placed on the sides of the page indicator of the Carousel.
     */
    Navigation = "Navigation"
  }
  /**
   * Different Carousel page indicator types.
   */
  export enum CarouselPageIndicatorType {
    /**
     * The page indicator will be visualized as dots if there are fewer than 9 pages.
     * If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
     */
    Default = "Default",
    /**
     * The page indicator will display the current page and the total number of pages. (e.g. X of Y)
     */
    Numeric = "Numeric"
  }
  /**
   * Different filtering types of the ComboBox.
   */
  export enum ComboBoxFilter {
    /**
     * Defines filtering by first symbol of each word of item's text.
     */
    StartsWithPerTerm = "StartsWithPerTerm",
    /**
     * Defines filtering by starting symbol of item's text.
     */
    StartsWith = "StartsWith",
    /**
     * Defines contains filtering.
     */
    Contains = "Contains",
    /**
     * Removes any filtering applied while typing
     */
    None = "None"
  }
  /**
   * Overflow Mode.
   */
  export enum ExpandableTextOverflowMode {
    /**
     * Overflowing text is appended in-place.
     */
    InPlace = "InPlace",
    /**
     * Full text is displayed in a popover.
     */
    Popover = "Popover"
  }
  /**
   * Accessibility modes of the Form.
   *
   * Based on the mode, the Form and its items will render different HTML elements and ARIA attributes,
   * which are appropriate for the use-case.
   *
   * **Usage:**
   * - "Display" mode should be used when the form consists of non-editable (e.g. texts) form items.
   * - "Edit" mode should be used when the form consists of editable (e.g. input fields) form items.
   */
  export enum FormAccessibleMode {
    /**
     * Display mode.
     */
    Display = "Display",
    /**
     * Edit mode.
     */
    Edit = "Edit"
  }
  /**
   * Different spacing of the form items.
   */
  export enum FormItemSpacing {
    /**
     * Normal spacing (smaller vertical space between form items).
     */
    Normal = "Normal",
    /**
     * Large spacing (larger vertical space between form items).
     */
    Large = "Large"
  }
  /**
   * Different types of Highlight .
   */
  export enum Highlight {
    None = "None",

    Positive = "Positive",

    Critical = "Critical",

    Negative = "Negative",

    Information = "Information"
  }
  /**
   * Different Icon semantic designs.
   */
  export enum IconDesign {
    /**
     * Contrast design
     */
    Contrast = "Contrast",
    /**
     * Critical design
     */
    Critical = "Critical",
    /**
     * Default design (brand design)
     */
    Default = "Default",
    /**
     * info type
     */
    Information = "Information",
    /**
     * Negative design
     */
    Negative = "Negative",
    /**
     * Neutral design
     */
    Neutral = "Neutral",
    /**
     * Design that indicates an icon which isn't interactive
     */
    NonInteractive = "NonInteractive",
    /**
     * Positive design
     */
    Positive = "Positive"
  }
  /**
   * Different Icon modes.
   */
  export enum IconMode {
    /**
     * Image mode (by default).
     * Configures the component to internally render role="img".
     */
    Image = "Image",
    /**
     * Decorative mode.
     * Configures the component to internally render role="presentation" and aria-hidden="true",
     * making it purely decorative without semantic content or interactivity.
     */
    Decorative = "Decorative",
    /**
     * Interactive mode.
     * Configures the component to internally render role="button".
     * This mode also supports focus and press handling to enhance interactivity.
     */
    Interactive = "Interactive"
  }
  /**
   * Different input types.
   */
  export enum InputType {
    /**
     * Defines a one-line text input field:
     */
    Text = "Text",
    /**
     * Used for input fields that must contain an e-mail address.
     */
    Email = "Email",
    /**
     * Defines a numeric input field.
     */
    Number = "Number",
    /**
     * Defines a password field.
     */
    Password = "Password",
    /**
     * Used for input fields that should contain a telephone number.
     */
    Tel = "Tel",
    /**
     * Used for input fields that should contain a URL address.
     */
    URL = "URL",
    /**
     * Used for input fields that should contain a search term.
     */
    Search = "Search"
  }
  /**
   * Defines the area size around the component that the user can select.
   */
  export enum InteractiveAreaSize {
    /**
     * The default target area size (the area taken by the component itself without any extra invisible touch area).
     */
    Normal = "Normal",
    /**
     * Enlarged target area size (up to 24px in height) provides users with an enhanced dedicated space to interact with the component.
     */
    Large = "Large"
  }
  /**
   * Link accessible roles.
   */
  export enum LinkAccessibleRole {
    /**
     * Represents Default (link) ARIA role.
     */
    Link = "Link",
    /**
     * Represents the ARIA role "button".
     */
    Button = "Button"
  }
  /**
   * Different link designs.
   */
  export enum LinkDesign {
    /**
     * default type (no special styling)
     */
    Default = "Default",
    /**
     * subtle type (appears as regular text, rather than a link)
     */
    Subtle = "Subtle",
    /**
     * emphasized type
     */
    Emphasized = "Emphasized"
  }
  /**
   * List accessible roles.
   */
  export enum ListAccessibleRole {
    /**
     * Represents the ARIA role "list". (by default)
     */
    List = "List",
    /**
     * Represents the ARIA role "menu".
     */
    Menu = "Menu",
    /**
     * Represents the ARIA role "tree".
     */
    Tree = "Tree",
    /**
     * Represents the ARIA role "listbox".
     */
    ListBox = "ListBox"
  }
  /**
   * Different list growing modes.
   */
  export enum ListGrowingMode {
    /**
     * Component's "load-more" is fired upon pressing a "More" button.
     * at the bottom.
     */
    Button = "Button",
    /**
     * Component's "load-more" is fired upon scroll.
     */
    Scroll = "Scroll",
    /**
     * Component's growing is not enabled.
     */
    None = "None"
  }
  /**
   * ListItem accessible roles.
   */
  export enum ListItemAccessibleRole {
    /**
     * Represents the ARIA role "listitem". (by default)
     */
    ListItem = "ListItem",
    /**
     * Represents the ARIA role "menuitem".
     */
    MenuItem = "MenuItem",
    /**
     * Represents the ARIA role "treeitem".
     */
    TreeItem = "TreeItem",
    /**
     * Represents the ARIA role "option".
     */
    Option = "Option",
    /**
     * Represents the ARIA role "none".
     */
    None = "None"
  }
  /**
   * Different list item types.
   */
  export enum ListItemType {
    /**
     * Indicates the list item does not have any active feedback when item is pressed.
     */
    Inactive = "Inactive",
    /**
     * Indicates that the item is clickable via active feedback when item is pressed.
     */
    Active = "Active",
    /**
     * Enables detail button of the list item that fires detail-click event.
     */
    Detail = "Detail",
    /**
     * Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.
     */
    Navigation = "Navigation"
  }
  /**
   * Different list selection modes.
   */
  export enum ListSelectionMode {
    /**
     * Default mode (no selection).
     */
    None = "None",
    /**
     * Right-positioned single selection mode (only one list item can be selected).
     */
    Single = "Single",
    /**
     * Left-positioned single selection mode (only one list item can be selected).
     */
    SingleStart = "SingleStart",
    /**
     * Selected item is highlighted but no selection element is visible
     * (only one list item can be selected).
     */
    SingleEnd = "SingleEnd",
    /**
     * Selected item is highlighted and selection is changed upon arrow navigation
     * (only one list item can be selected - this is always the focused item).
     */
    SingleAuto = "SingleAuto",
    /**
     * Multi selection mode (more than one list item can be selected).
     */
    Multiple = "Multiple",
    /**
     * Delete mode (only one list item can be deleted via provided delete button)
     */
    Delete = "Delete"
  }
  /**
   * Different types of list items separators.
   */
  export enum ListSeparator {
    /**
     * Separators between the items including the last and the first one.
     */
    All = "All",
    /**
     * Separators between the items.
     * Note: This enumeration depends on the theme.
     */
    Inner = "Inner",
    /**
     * No item separators.
     */
    None = "None"
  }
  /**
   * Menu item group check modes.
   */
  export enum MenuItemGroupCheckMode {
    /**
     * default type (items in a group cannot be checked)
     */
    None = "None",
    /**
     * Single item check mode (only one item in a group can be checked at a time)
     */
    Single = "Single",
    /**
     * Multiple items check mode (multiple items in a group can be checked at a time)
     */
    Multiple = "Multiple"
  }
  /**
   * MessageStrip designs.
   */
  export enum MessageStripDesign {
    /**
     * Message should be just an information
     */
    Information = "Information",
    /**
     * Message is a success message
     */
    Positive = "Positive",
    /**
     * Message is an error
     */
    Negative = "Negative",
    /**
     * Message is a warning
     */
    Critical = "Critical",
    /**
     * Message uses custom color set 1
     */
    ColorSet1 = "ColorSet1",
    /**
     * Message uses custom color set 2
     */
    ColorSet2 = "ColorSet2"
  }
  /**
   * Different notification list growing modes.
   */
  export enum NotificationListGrowingMode {
    /**
     * Component's "load-more" is fired upon pressing a "More" button.
     * at the bottom.
     */
    Button = "Button",
    /**
     * Component's growing is not enabled.
     */
    None = "None"
  }
  /**
   * Tabs overflow mode in TabContainer.
   */
  export enum OverflowMode {
    /**
     * End type is used if there should be only one overflow with hidden the tabs at the end of the tab container.
     */
    End = "End",
    /**
     * StartAndEnd type is used if there should be two overflows on both ends of the tab container.
     */
    StartAndEnd = "StartAndEnd"
  }
  /**
   * Panel accessible roles.
   */
  export enum PanelAccessibleRole {
    /**
     * Represents the ARIA role "complementary".
     * A section of the page, designed to be complementary to the main content at a similar level in the DOM hierarchy.
     */
    Complementary = "Complementary",
    /**
     * Represents the ARIA role "Form".
     * A landmark region that contains a collection of items and objects that, as a whole, create a form.
     */
    Form = "Form",
    /**
     * Represents the ARIA role "Region".
     * A section of a page, that is important enough to be included in a page summary or table of contents.
     */
    Region = "Region"
  }
  /**
   * Popover horizontal align types.
   */
  export enum PopoverHorizontalAlign {
    /**
     * Popover is centered.
     */
    Center = "Center",
    /**
     * Popover is aligned with the start of the target.
     */
    Start = "Start",
    /**
     * Popover is aligned with the end of the target.
     */
    End = "End",
    /**
     * Popover is stretched.
     */
    Stretch = "Stretch"
  }
  /**
   * Popover placements.
   */
  export enum PopoverPlacement {
    /**
     * Popover will be placed at the start of the reference element.
     */
    Start = "Start",
    /**
     * Popover will be placed at the end of the reference element.
     */
    End = "End",
    /**
     * Popover will be placed at the top of the reference element.
     */
    Top = "Top",
    /**
     * Popover will be placed at the bottom of the reference element.
     */
    Bottom = "Bottom"
  }
  /**
   * Popover vertical align types.
   */
  export enum PopoverVerticalAlign {
    Center = "Center",
    /**
     * Popover will be placed at the top of the reference control.
     */
    Top = "Top",
    /**
     * Popover will be placed at the bottom of the reference control.
     */
    Bottom = "Bottom",
    /**
     * Popover will be streched
     */
    Stretch = "Stretch"
  }
  /**
   * Popup accessible roles.
   */
  export enum PopupAccessibleRole {
    /**
     * Represents no ARIA role.
     */
    None = "None",
    /**
     * Represents the ARIA role "dialog".
     */
    Dialog = "Dialog",
    /**
     * Represents the ARIA role "alertdialog".
     */
    AlertDialog = "AlertDialog"
  }
  /**
   * Different types of Priority.
   */
  export enum Priority {
    /**
     * High priority.
     */
    High = "High",
    /**
     * Medium priority.
     */
    Medium = "Medium",
    /**
     * Low priority.
     */
    Low = "Low",
    /**
     * Default, none priority.
     */
    None = "None"
  }
  /**
   * Types of icon sizes used in the RatingIndicator.
   * Provides predefined size categories to ensure consistent scaling and spacing of icons.
   */
  export enum RatingIndicatorSize {
    /**
     * Small size for compact layouts.
     */
    S = "S",
    /**
     * Medium size, used as the default option.
     * Offers a balanced appearance for most scenarios.
     */
    M = "M",
    /**
     * Large size for prominent or spacious layouts.
     */
    L = "L"
  }
  /**
   * Different SegmentedButton selection modes.
   */
  export enum SegmentedButtonSelectionMode {
    /**
     * There is always one selected. Selecting one deselects the previous one.
     */
    Single = "Single",
    /**
     * Multiple items can be selected at a time. All items can be deselected.
     */
    Multiple = "Multiple"
  }
  /**
   * Defines the separator types for Select component two-column layout.
   */
  export enum SelectTextSeparator {
    /**
     * Will show bullet(·) as separator on two columns layout when Select is in read-only mode.
     */
    Bullet = "Bullet",
    /**
     * Will show N-dash(–) as separator on two columns layout when Select is in read-only mode.
     */
    Dash = "Dash",
    /**
     * Will show vertical line(|) as separator on two columns layout when Select is in read-only mode.
     */
    VerticalLine = "VerticalLine"
  }
  /**
   * Different types of SemanticColor.
   */
  export enum SemanticColor {
    /**
     * Default color (brand color)
     */
    Default = "Default",
    /**
     * Positive color
     */
    Positive = "Positive",
    /**
     * Negative color
     */
    Negative = "Negative",
    /**
     * Critical color
     */
    Critical = "Critical",
    /**
     * Neutral color.
     */
    Neutral = "Neutral"
  }
  /**
   * Different types of Switch designs.
   */
  export enum SwitchDesign {
    /**
     * Defines the Switch as Textual
     */
    Textual = "Textual",
    /**
     * Defines the Switch as Graphical
     */
    Graphical = "Graphical"
  }
  /**
   * Tab layout of TabContainer.
   */
  export enum TabLayout {
    /**
     * Inline type, the tab "main text" and "additionalText" are displayed horizotally.
     */
    Inline = "Inline",
    /**
     * Standard type, the tab "main text" and "additionalText" are displayed vertically.
     */
    Standard = "Standard"
  }
  /**
   * Alignment of the &lt;ui5-table-cell&gt; component.
   */
  export enum TableCellHorizontalAlign {
    Left = "Left",

    Start = "Start",

    Right = "Right",

    End = "End",

    Center = "Center"
  }
  /**
   * Growing mode of the &lt;ui5-table&gt; component.
   */
  export enum TableGrowingMode {
    /**
     * Renders a growing button, which can be pressed to load more data.
     */
    Button = "Button",
    /**
     * Scroll to load more data.
     *
     * **Note:** If the table is not scrollable, a growing button will be rendered instead to ensure growing functionality.
     */
    Scroll = "Scroll"
  }
  /**
   * Overflow mode of the &lt;ui5-table&gt; component.
   */
  export enum TableOverflowMode {
    /**
     * Shows a scrollbar, when the table cannot fit all columns.
     */
    Scroll = "Scroll",
    /**
     * Pops in columns, that do not fit into the table anymore.
     */
    Popin = "Popin"
  }
  /**
   * Selection behavior of the `ui5-table` selection components.
   */
  export enum TableSelectionBehavior {
    /**
     * Rows can only be selected by using the row selector column.
     */
    RowSelector = "RowSelector",
    /**
     * Rows can only be selected by clicking directly on the row, as the row selector column is hidden.
     *
     * **Note:** In this mode, the `row-click` event of the `ui5-table` component is not fired.
     */
    RowOnly = "RowOnly"
  }
  /**
   * Selection modes of the &lt;ui5-table&gt; component.
   */
  export enum TableSelectionMode {
    /**
     * Default mode (no selection).
     */
    None = "None",
    /**
     * Single selection mode (only one table row can be selected).
     */
    Single = "Single",
    /**
     * Multi selection mode (more than one table row can be selected).
     */
    Multiple = "Multiple"
  }
  /**
   * Selectors of the table header row in multi-selection scenarios.
   */
  export enum TableSelectionMultiHeaderSelector {
    /**
     * Renders a checkbox in the table header row that toggles the selection of all rows.
     */
    SelectAll = "SelectAll",
    /**
     * Renders an icon in the table header row that removes the selection of all rows.
     */
    ClearAll = "ClearAll"
  }
  /**
   * Defines tag design types.
   */
  export enum TagDesign {
    /**
     * Set1 of generic indication colors that are intended for industry-specific use cases
     */
    Set1 = "Set1",
    /**
     * Set2 of generic indication colors that are intended for industry-specific use cases
     */
    Set2 = "Set2",
    /**
     * Neutral design
     */
    Neutral = "Neutral",
    /**
     * Information design
     */
    Information = "Information",
    /**
     * Positive design
     */
    Positive = "Positive",
    /**
     * Negative design
     */
    Negative = "Negative",
    /**
     * Critical design
     */
    Critical = "Critical"
  }
  /**
   * Predefined sizes for the tag.
   */
  export enum TagSize {
    /**
     * Small size of the tag
     */
    S = "S",
    /**
     * Large size of the tag
     */
    L = "L"
  }
  /**
   * Empty Indicator Mode.
   */
  export enum TextEmptyIndicatorMode {
    /**
     * Empty indicator is never rendered.
     */
    Off = "Off",
    /**
     * Empty indicator is rendered always when the component's content is empty.
     */
    On = "On"
  }
  /**
   * Different types of Title level.
   */
  export enum TitleLevel {
    /**
     * Renders `h1` tag.
     */
    H1 = "H1",
    /**
     * Renders `h2` tag.
     */
    H2 = "H2",
    /**
     * Renders `h3` tag.
     */
    H3 = "H3",
    /**
     * Renders `h4` tag.
     */
    H4 = "H4",
    /**
     * Renders `h5` tag.
     */
    H5 = "H5",
    /**
     * Renders `h6` tag.
     */
    H6 = "H6"
  }
  /**
   * Toast placement.
   */
  export enum ToastPlacement {
    /**
     * Toast is placed at the `TopStart` position of its container.
     */
    TopStart = "TopStart",
    /**
     * Toast is placed at the `TopCenter` position of its container.
     */
    TopCenter = "TopCenter",
    /**
     * Toast is placed at the `TopEnd` position of its container.
     */
    TopEnd = "TopEnd",
    /**
     * Toast is placed at the `MiddleStart` position of its container.
     */
    MiddleStart = "MiddleStart",
    /**
     * Toast is placed at the `MiddleCenter` position of its container.
     */
    MiddleCenter = "MiddleCenter",
    /**
     * Toast is placed at the `MiddleEnd` position of its container.
     */
    MiddleEnd = "MiddleEnd",
    /**
     * Toast is placed at the `BottomStart` position of its container.
     */
    BottomStart = "BottomStart",
    /**
     * Toast is placed at the `BottomCenter` position of its container.
     * Default placement (no selection)
     */
    BottomCenter = "BottomCenter",
    /**
     * Toast is placed at the `BottomEnd` position of its container.
     */
    BottomEnd = "BottomEnd"
  }
  /**
   * Defines which direction the items of ui5-toolbar will be aligned.
   */
  export enum ToolbarAlign {
    /**
     * Toolbar items are situated at the `start` of the Toolbar
     */
    Start = "Start",
    /**
     * Toolbar items are situated at the `end` of the Toolbar
     */
    End = "End"
  }
  /**
   * Defines the available toolbar designs.
   */
  export enum ToolbarDesign {
    /**
     * The toolbar and its content will be displayed with solid background.
     */
    Solid = "Solid",
    /**
     * The toolbar and its content will be displayed with transparent background.
     */
    Transparent = "Transparent"
  }
  /**
   * Defines the priority of the toolbar item to go inside overflow popover.
   */
  export enum ToolbarItemOverflowBehavior {
    /**
     * The item is presented inside the toolbar and goes in the popover, when there is not enough space.
     */
    Default = "Default",
    /**
     * When set, the item will never go to the overflow popover.
     */
    NeverOverflow = "NeverOverflow",
    /**
     * When set, the item will be always part of the overflow part of ui5-toolbar.
     */
    AlwaysOverflow = "AlwaysOverflow"
  }
  /**
   * Different types of wrapping.
   */
  export enum WrappingType {
    /**
     * The text will be truncated with an ellipsis.
     */
    None = "None",
    /**
     * The text will wrap. The words will not be broken based on hyphenation.
     */
    Normal = "Normal"
  }

  /**
   * Declaration of interfaces
   */
  /**
   * Interface for components that represent an avatar and may be slotted in numerous higher-order components such as `ui5-avatar-group`
   */
  export interface IAvatarGroupItem {
    __implements__ui5_webcomponents_IAvatarGroupItem: boolean;
  }
  /**
   * Interface for components that may be used as a button inside numerous higher-order components
   */
  export interface IButton {
    __implements__ui5_webcomponents_IButton: boolean;
  }
  /**
   * Interface for components that may be slotted inside a `ui5-calendar`.
   *
   * **Note:** Use with `ui5-date` or `ui5-date-range` as calendar date selection types.
   */
  export interface ICalendarSelectedDates {
    __implements__ui5_webcomponents_ICalendarSelectedDates: boolean;
  }
  /**
   * Interface for components that may be used inside a `ui5-color-palette` or `ui5-color-palette-popover`
   */
  export interface IColorPaletteItem {
    __implements__ui5_webcomponents_IColorPaletteItem: boolean;
  }
  /**
   * Interface for components that may be slotted inside a `ui5-combobox`
   */
  export interface IComboBoxItem {
    __implements__ui5_webcomponents_IComboBoxItem: boolean;
  }
  /**
   * Represents a dynamic date range option used by the `ui5-dynamic-date-range` component.
   *
   * Represents a dynamic date range option used for handling dynamic date ranges.
   * This interface defines the structure and behavior required for implementing
   * dynamic date range options, including formatting, parsing, validation, and
   * conversion of date range values.
   *
   *  * Properties:
   * - `icon`: The icon associated with the dynamic date range option, typically used for UI representation.
   * - `operator`: A unique operator identifying the dynamic date range option.
   * - `text`: The display text for the dynamic date range option.
   * - `template` (optional): A JSX template for rendering the dynamic date range option.
   *
   * Methods:
   * - `format(value: DynamicDateRangeValue): string`: Formats the given dynamic date range value into a string representation.
   * - `parse(value: string): DynamicDateRangeValue | undefined`: Parses a string into a dynamic date range value.
   * - `toDates(value: DynamicDateRangeValue): Array<Date>`: Converts a dynamic date range value into an array of `Date` objects.
   * - `handleSelectionChange?(event: CustomEvent): DynamicDateRangeValue | undefined`: (Optional) Handles selection changes in the UI of the dynamic date range option.
   * - `isValidString(value: string): boolean`: Validates whether a given string is a valid representation of the dynamic date range value.
   */
  export interface IDynamicDateRangeOption {
    __implements__ui5_webcomponents_IDynamicDateRangeOption: boolean;
  }
  /**
   * Interface for components that can be slotted inside `ui5-form` as items.
   */
  export interface IFormItem {
    __implements__ui5_webcomponents_IFormItem: boolean;
  }
  /**
   * Interface for components that represent an icon, usable in numerous higher-order components
   */
  export interface IIcon {
    __implements__ui5_webcomponents_IIcon: boolean;
  }
  /**
   * Interface for components that represent a suggestion item, usable in `ui5-input`
   */
  export interface IInputSuggestionItem {
    __implements__ui5_webcomponents_IInputSuggestionItem: boolean;
  }
  /**
   * Interface for components that may be slotted inside a `ui5-menu`.
   *
   * **Note:** Use with `ui5-menu-item` or `ui5-menu-separator`. Implementing the interface does not guarantee that any other classes can work with the `ui5-menu`.
   */
  export interface IMenuItem {
    __implements__ui5_webcomponents_IMenuItem: boolean;
  }
  /**
   * Interface for components that may be slotted inside a `ui5-multi-combobox` as items
   */
  export interface IMultiComboBoxItem {
    __implements__ui5_webcomponents_IMultiComboBoxItem: boolean;
  }
  /**
   * Interface for components that may be slotted inside `ui5-segmented-button` as items
   */
  export interface ISegmentedButtonItem {
    __implements__ui5_webcomponents_ISegmentedButtonItem: boolean;
  }
  /**
   * Interface for components that may be slotted inside `ui5-select` as options
   */
  export interface IOption {
    __implements__ui5_webcomponents_IOption: boolean;
  }
  /**
   * Interface for components that may be slotted inside `ui5-tabcontainer` as items
   *
   * **Note:** Use directly `ui5-tab` or `ui5-tab-seprator`. Implementing the interface does not guarantee that the class can work as a tab.
   */
  export interface ITab {
    __implements__ui5_webcomponents_ITab: boolean;
  }
  /**
   * Interface for components that can be slotted inside the `features` slot of the `ui5-table`.
   */
  export interface ITableFeature {
    __implements__ui5_webcomponents_ITableFeature: boolean;
  }
  /**
   * Interface for components that can be slotted inside the `features` slot of the `ui5-table`
   * and provide growing/data loading functionality.
   */
  export interface ITableGrowing {
    __implements__ui5_webcomponents_ITableGrowing: boolean;
  }
}
