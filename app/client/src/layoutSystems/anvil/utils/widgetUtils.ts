import type { SetDraggingStateActionPayload } from "utils/hooks/dragResizeHooks";
import type { AnvilConfig, SizeConfig } from "WidgetProvider/constants";
import { MOBILE_BREAKPOINT } from "./constants";
import type { BaseWidgetProps } from "widgets/BaseWidgetHOC/withBaseWidgetHOC";
import WidgetFactory from "WidgetProvider/factory";
import { isFunction } from "lodash";
import { FILL_WIDGET_MIN_WIDTH } from "constants/minWidthConstants";
import type { CanvasWidgetsReduxState } from "reducers/entityReducers/canvasWidgetsReducer";
import {
  addNewWidgetToDsl,
  getCreateWidgetPayload,
} from "./widgetAdditionUtils";
import { call } from "redux-saga/effects";
import type { AnvilHighlightInfo, LayoutProps } from "./anvilTypes";
import type BaseLayoutComponent from "../layoutComponents/BaseLayoutComponent";
import LayoutFactory from "../layoutComponents/LayoutFactory";

/**
 * Updates minWidth style for the widget based on its responsiveBehavior:
 * A Fill widget will expand to assume 100% of its parent's width when its parent width < 480px.
 * For other situations, it will adopt the minWidth provided in its widget config.
 * @param config Record<string, string | number> | undefined
 * @returns Record<string, string | number> | undefined
 */
export const getResponsiveMinWidth = (
  config: Record<string, string> | undefined,
  isFillWidget: boolean,
): Record<string, string> | undefined => {
  if (!config) {
    return isFillWidget
      ? { base: "100%", [`${MOBILE_BREAKPOINT}px`]: "auto" }
      : undefined;
  }
  if (!isFillWidget) return config;
  const minWidth = config["base"];
  return {
    ...config,
    base: `max(100%, ${minWidth})`, // using a max between 100% and minWidth because zones can go below mobile breakpoints even on larger screens.
    [`${MOBILE_BREAKPOINT}px`]: config[`${MOBILE_BREAKPOINT}px`] ?? minWidth,
  };
};

export const validateResponsiveProp = (
  data: Record<string, string | number> | undefined,
) => data && Object.keys(data)?.length;

export const generateDragStateForAnvilLayout = ({
  layoutId,
}: {
  layoutId: string;
}): SetDraggingStateActionPayload => {
  return {
    isDragging: true,
    dragGroupActualParent: layoutId || "",
    draggedOn: layoutId,
  };
};

export const defaultSizeConfig: SizeConfig = {
  maxHeight: {},
  maxWidth: {},
  minHeight: {},
  minWidth: {},
};

export const getWidgetSizeConfiguration = (
  type: string,
  props: BaseWidgetProps,
  isPreviewMode: boolean,
): SizeConfig => {
  let res: SizeConfig = defaultSizeConfig;

  const { widgetSize } = WidgetFactory.getWidgetAnvilConfig(type);

  if (!widgetSize) return res;

  if (isFunction(widgetSize)) {
    res = widgetSize(props, isPreviewMode);
  } else if (Object.keys(widgetSize).length) {
    res = widgetSize;
  }

  return {
    ...res,
    minHeight: Object.keys(res.minHeight).length
      ? res.minHeight
      : {
          base: `${WidgetFactory.widgetConfigMap.get(type)?.minHeight || 80}px`,
        },
    minWidth: Object.keys(res.minWidth).length
      ? res.minWidth
      : {
          base: `${
            WidgetFactory.widgetConfigMap.get(type)?.minWidth ||
            FILL_WIDGET_MIN_WIDTH
          }px`,
        },
  };
};

export function isLargeWidget(type: string): boolean {
  const config: AnvilConfig | null = WidgetFactory.getWidgetAnvilConfig(type);
  return config && config.isLargeWidget;
}

export function* addNewWidgetToParent(
  allWidgets: CanvasWidgetsReduxState,
  widgetId: string,
  type: string,
  parentId: string,
) {
  let updatedWidgets: CanvasWidgetsReduxState = { ...allWidgets };

  updatedWidgets = yield call(
    addNewWidgetToDsl,
    updatedWidgets,
    getCreateWidgetPayload(widgetId, type, parentId),
  );

  return updatedWidgets;
}

export function* addNewWidgetAndUpdateLayout(
  allWidgets: CanvasWidgetsReduxState,
  widgetId: string,
  type: string,
  parentId: string,
  highlight: AnvilHighlightInfo,
) {
  let updatedWidgets: CanvasWidgetsReduxState = { ...allWidgets };

  updatedWidgets = yield call(
    addNewWidgetToParent,
    allWidgets,
    widgetId,
    type,
    parentId,
  );

  const parentLayout: LayoutProps = updatedWidgets[widgetId].layout[0];

  const Comp: typeof BaseLayoutComponent = LayoutFactory.get(
    parentLayout.layoutType,
  );

  return {
    ...updatedWidgets,
    [parentId]: {
      ...updatedWidgets[parentId],
      layout: [
        Comp.addChild(
          parentLayout,
          [
            {
              alignment: highlight.alignment,
              widgetId,
              widgetType: type,
            },
          ],
          highlight,
        ),
      ],
    },
  };
}
