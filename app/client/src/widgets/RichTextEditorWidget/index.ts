import { Alignment } from "@blueprintjs/core";
import { LabelPosition } from "components/constants";
import IconSVG from "./icon.svg";
import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "Rich Text Editor",
  iconSVG: IconSVG,
  needsMeta: true,
  searchTags: ["input", "rte"],
  features: {
    dynamicHeight: true,
  },
  defaults: {
    defaultText: "This is the initial <b>content</b> of the editor",
    rows: 20,
    columns: 24,
    animateLoading: true,
    isDisabled: false,
    isVisible: true,
    isRequired: false,
    widgetName: "RichTextEditor",
    isDefaultClickDisabled: true,
    inputType: "html",
    labelText: "Label",
    labelPosition: LabelPosition.Left,
    labelAlignment: Alignment.LEFT,
    labelWidth: 5,
    version: 1,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;
