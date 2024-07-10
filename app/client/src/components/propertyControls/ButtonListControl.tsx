import React from "react";
import type { ControlProps } from "./BaseControl";
import BaseControl from "./BaseControl";
import { generateReactKey } from "utils/generators";
import orderBy from "lodash/orderBy";
import isString from "lodash/isString";
import isUndefined from "lodash/isUndefined";
import { Button, Flex } from "design-system";
import { ButtonPlacementTypes } from "components/constants";
import { DraggableListControl } from "pages/Editor/PropertyPane/DraggableListControl";
import { DraggableListCard } from "components/propertyControls/DraggableListCard";
import {
  createMessage,
  BUTTON_WIDGET_DEFAULT_LABEL,
} from "@appsmith/constants/messages";
import { map, includes } from "lodash";
import {
  getduplicateLabelWidgetIds,
  getWidgetIdsWithDuplicateLabelWhenUpdated,
  onDeleteGetDuplicateIds,
} from "components/utils/getWidgetIdsWithDuplicateLabel";

interface State {
  focusedIndex: number | null;
  duplicateButtonIds: string[];
}

export interface MenuItem {
  id: string;
  label: string;
  isDisabled: boolean;
  isVisible: boolean;
  widgetId: string;
  itemType: "SEPARATOR" | "BUTTON";
  isDuplicateLabel?: boolean;
}

class ButtonListControl extends BaseControl<
  ControlProps & { allowSeparators?: boolean; allowSpatialGrouping?: boolean },
  State
> {
  constructor(props: ControlProps) {
    super(props);

    this.state = {
      focusedIndex: null,
      duplicateButtonIds: getduplicateLabelWidgetIds(this.props.propertyValue),
    };
  }

  componentDidUpdate(prevProps: ControlProps): void {
    //on adding a new column last column should get focused
    if (
      Object.keys(prevProps.propertyValue).length + 1 ===
      Object.keys(this.props.propertyValue).length
    ) {
      this.updateFocus(Object.keys(this.props.propertyValue).length - 1, true);
    }
  }

  getMenuItems = () => {
    let menuItems: MenuItem[] =
      isString(this.props.propertyValue) ||
      isUndefined(this.props.propertyValue)
        ? []
        : Object.values(this.props.propertyValue);

      menuItems = orderBy(menuItems, ["index"], ["asc"]);
      menuItems = menuItems.map((button: MenuItem) => ({
        ...button,
        isDuplicateLabel: includes(this.state.duplicateButtonIds, button.id),
     }));
      return menuItems;
  };

  updateItems = (items: Array<Record<string, any>>) => {
    const menuItems = items.reduce((obj: any, each: any, index: number) => {
      obj[each.id] = {
        ...each,
        index,
      };
      return obj;
    }, {});
    this.updateProperty(this.props.propertyName, menuItems);
  };

  onEdit = (index: number) => {
    const menuItems = this.getMenuItems();
    const targetMenuItem = menuItems[index];

    this.props.openNextPanel({
      index,
      ...targetMenuItem,
      propPaneId: this.props.widgetProperties.widgetId,
    });
  };

  render() {
    const hasSeparator = this.getMenuItems().some(
      (item: MenuItem) => item.itemType === "SEPARATOR",
    );

    return (
      <div className="flex flex-col gap-1">
        <DraggableListControl
          deleteOption={this.deleteOption}
          fixedHeight={370}
          focusedIndex={this.state.focusedIndex}
          itemHeight={45}
          items={this.getMenuItems()}
          onEdit={this.onEdit}
          propertyPath={this.props.dataTreePath}
          renderComponent={(props: any) =>
            DraggableListCard({
              ...props,
              isDelete: true,
              placeholder: "Button label",
            })
          }
          toggleVisibility={this.toggleVisibility}
          updateFocus={this.updateFocus}
          updateItems={this.updateItems}
          updateOption={this.updateOption}
        />

        <Flex gap="spaces-3" justifyContent="end">
          {(this.props.allowSeparators ||
            (this.props.allowSpatialGrouping && !hasSeparator)) && (
            <Button
              className="self-end"
              kind="tertiary"
              onClick={() => this.addOption({ isSeparator: true })}
              size="sm"
            >
              Add separator
            </Button>
          )}
          <Button
            className="self-end"
            kind="secondary"
            onClick={() => this.addOption({ isSeparator: false })}
            size="sm"
          >
            Add button
          </Button>
        </Flex>
      </div>
    );
  }

  toggleVisibility = (index: number) => {
    const menuItems = this.getMenuItems();
    const isVisible = menuItems[index].isVisible === true ? false : true;
    const updatedMenuItems = menuItems.map((item, itemIndex) => {
      if (index === itemIndex) {
        return {
          ...item,
          isVisible: isVisible,
        };
      }
      return item;
    });
    this.updateProperty(this.props.propertyName, updatedMenuItems);
  };

  deleteOption = (index: number) => {
    const menuItemsArray = this.getMenuItems();
    if (menuItemsArray.length === 1) return;
    const updatedArray = menuItemsArray.filter((eachItem: any, i: number) => {
      return i !== index;
    });
    const labels = map(updatedArray, "label");
    const updatedObj: MenuItem[] = updatedArray.reduce(
      (obj: any, each: any, index: number) => {
        obj[each.id] = {
          ...each,
          index,
        };
        return obj;
      },
      {},
    );
    const updateMenuProperty = (widgetId: string, isDuplicate = false) => {
      this.updateProperty(
        `${this.props.propertyName}.${widgetId}.isDuplicateLabel`,
        isDuplicate,
      );
    };
    const duplicateIds = onDeleteGetDuplicateIds(
      updatedArray,
      this.state.duplicateButtonIds,
      labels,
      updateMenuProperty,
    );
    this.setState({ duplicateButtonIds: duplicateIds });
    this.updateProperty(this.props.propertyName, updatedObj);
  };

  updateOption = (index: number, updatedLabel: string) => {
    const menuItemsArray = this.getMenuItems();
    const itemId = menuItemsArray[index].id;
    const ButtonNames = map(menuItemsArray, "label");
    const updateMenuProperty = (widgetId: string, isDuplicate = false) => {
      this.updateProperty(
        `${this.props.propertyName}.${widgetId}.isDuplicateLabel`,
        isDuplicate,
      );
    };
    const duplicateButtonIds = getWidgetIdsWithDuplicateLabelWhenUpdated(
      this.state.duplicateButtonIds,
      ButtonNames,
      updatedLabel,
      itemId,
      index,
      updateMenuProperty,
      menuItemsArray,
    );
    this.setState({
      duplicateButtonIds: duplicateButtonIds,
    });
    this.updateProperty(
      `${this.props.propertyName}.${itemId}.label`,
      updatedLabel,
    );
  };

  addOption = ({ isSeparator }: { isSeparator?: boolean }) => {
    let groupButtons = this.props.propertyValue;
    const groupButtonsArray = this.getMenuItems();
    const newGroupButtonId = generateReactKey({ prefix: "groupButton" });

    groupButtons = {
      ...groupButtons,
      [newGroupButtonId]: {
        id: newGroupButtonId,
        index: groupButtonsArray.length,
        label: isSeparator
          ? "Separator"
          : createMessage(BUTTON_WIDGET_DEFAULT_LABEL),
        widgetId: generateReactKey(),
        isDisabled: false,
        itemType: isSeparator ? "SEPARATOR" : "BUTTON",
        isSeparator,
        isVisible: true,
        variant: "filled",
        isDuplicateLabel: false,
      },
    };

    if (this.props.widgetProperties.type === "BUTTON_GROUP_WIDGET") {
      /**c
       * These properties are required for "BUTTON_GROUP_WIDGET" but not for
       * "WDS_TOOLBAR_BUTTONS_GROUP_WIDGET"
       */
      const buttonNames = map(groupButtonsArray, "label");
      const optionalButtonGroupItemProperties = {
        menuItems: {},
        buttonType: "SIMPLE",
        placement: ButtonPlacementTypes.CENTER,
        buttonColor:
          this.props.widgetProperties.childStylesheet.button.buttonColor,
        isDuplicateLabel: includes(
            buttonNames,
            createMessage(BUTTON_WIDGET_DEFAULT_LABEL),)
      };

      groupButtons[newGroupButtonId] = {
        ...groupButtons[newGroupButtonId],
        ...optionalButtonGroupItemProperties,
      };
    }

    if (this.props.widgetProperties.type === "WDS_INLINE_BUTTONS_WIDGET") {
      // if buttonVariant and buttonColor values ar present in session storage, then we should use those values
      const buttonVariantSessionValue = sessionStorage.getItem(
        "WDS_INLINE_BUTTONS_WIDGET.buttonVariant",
      );
      const buttonColorSessionValue = sessionStorage.getItem(
        "WDS_INLINE_BUTTONS_WIDGET.buttonColor",
      );

      groupButtons[newGroupButtonId] = {
        ...groupButtons[newGroupButtonId],
        buttonVariant: buttonVariantSessionValue || "filled",
        buttonColor: buttonColorSessionValue || "accent",
      };

      // if the widget is a WDS_INLINE_BUTTONS_WIDGET, and button already have filled button variant in groupButtons,
      // then we should add a secondary button ( outlined button ) instead of simple button
      const filledButtonVariant = groupButtonsArray.find(
        (groupButton: any) => groupButton.buttonVariant === "filled",
      );

      if (filledButtonVariant) {
        groupButtons[newGroupButtonId] = {
          ...groupButtons[newGroupButtonId],
          buttonVariant: buttonVariantSessionValue || "outlined",
        };
      }
    }

    this.updateProperty(this.props.propertyName, groupButtons);
    if (groupButtons[newGroupButtonId].isDuplicateLabel) {
      this.setState({
        duplicateButtonIds: [
          ...this.state.duplicateButtonIds,
          newGroupButtonId,
        ],
      });
    }
  };

  updateFocus = (index: number, isFocused: boolean) => {
    this.setState({ focusedIndex: isFocused ? index : null });
  };

  static getControlType() {
    return "GROUP_BUTTONS";
  }
}

export default ButtonListControl;
