import React from "react";
import type { ControlProps } from "./BaseControl";
import BaseControl from "./BaseControl";
import { generateReactKey } from "utils/generators";
import orderBy from "lodash/orderBy";
import isString from "lodash/isString";
import isUndefined from "lodash/isUndefined";
import { DraggableListControl } from "pages/Editor/PropertyPane/DraggableListControl";
import { DraggableListCard } from "components/propertyControls/DraggableListCard";
import { Button } from "design-system";
import { map, includes } from "lodash";
import {
  getduplicateLabelWidgetIds,
  getWidgetIdsWithDuplicateLabelWhenUpdated,
} from "components/utils/getWidgetIdsWithDuplicateLabel";

interface State {
  focusedIndex: number | null;
  duplicateMenuIds: string[];
}

export interface MenuItem {
  id: string;
  label: string;
  isDisabled: boolean;
  isVisible: boolean;
  widgetId: string;
  isDuplicateLabel: boolean;
}

class MenuItemsControl extends BaseControl<ControlProps, State> {
  constructor(props: ControlProps) {
    super(props);

    this.state = {
      focusedIndex: null,
      duplicateMenuIds: getduplicateLabelWidgetIds(this.props.propertyValue),
    };
  }

  componentDidUpdate(prevProps: ControlProps): void {
    //on adding a new column last column should get focused
    if (
      prevProps.propertyValue &&
      this.props.propertyValue &&
      Object.keys(prevProps.propertyValue).length + 1 ===
        Object.keys(this.props.propertyValue).length
    ) {
      this.updateFocus(Object.keys(this.props.propertyValue).length - 1, true);
    }
  }
  updateItems = (items: Array<Record<string, any>>) => {
    const menuItems = items.reduce((obj: any, each: any, index) => {
      obj[each.id] = {
        ...each,
        index,
      };
      return obj;
    }, {});
    this.updateProperty(this.props.propertyName, menuItems);
  };

  getMenuItems = () => {
    let menuItems: MenuItem[] =
      isString(this.props.propertyValue) ||
      isUndefined(this.props.propertyValue)
        ? []
        : Object.values(this.props.propertyValue);

    menuItems = orderBy(menuItems, ["index"], ["asc"]);
    menuItems = menuItems.map((button: MenuItem) => ({
      ...button,
      isDuplicateLabel: includes(this.state.duplicateMenuIds, button.id),
    }));
    return menuItems;
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
              placeholder: "Menu item label",
            })
          }
          toggleVisibility={this.toggleVisibility}
          updateFocus={this.updateFocus}
          updateItems={this.updateItems}
          updateOption={this.updateOption}
        />

        <Button
          className="self-end t--add-menu-item-btn"
          kind="tertiary"
          onClick={this.addOption}
          startIcon="plus"
        >
          Add new menu item
        </Button>
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
    const updatedObj = updatedArray.reduce(
      (obj: any, each: any, index: number) => {
        obj[each.id] = {
          ...each,
          index,
        };
        return obj;
      },
      {},
    );
    const duplicateIds = getduplicateLabelWidgetIds(updatedObj);
    this.setState({ duplicateMenuIds: duplicateIds });
    this.updateProperty(this.props.propertyName, updatedObj);
  };

  updateOption = (index: number, updatedLabel: string) => {
    const menuItemsArray = this.getMenuItems();
    const itemId = menuItemsArray[index].id;
    const MenuButtonNames = map(menuItemsArray, "label");
    const updateMenuProperty = (widgetId: string, isDuplicate = false) => {
      this.updateProperty(
        `${this.props.propertyName}.${widgetId}.isDuplicateLabel`,
        isDuplicate,
      );
    };
    const duplicateMenuIds = getWidgetIdsWithDuplicateLabelWhenUpdated(
      this.state.duplicateMenuIds,
      MenuButtonNames,
      updatedLabel,
      itemId,
      index,
      updateMenuProperty,
      menuItemsArray,
    );
    this.setState({
      duplicateMenuIds: duplicateMenuIds,
    });
    this.updateProperty(
      `${this.props.propertyName}.${itemId}.label`,
      updatedLabel,
    );
  };

  addOption = () => {
    let menuItems = this.props.propertyValue || [];
    const menuItemsArray = this.getMenuItems();
    const newMenuItemId = generateReactKey({ prefix: "menuItem" });

    menuItems = {
      ...menuItems,
      [newMenuItemId]: {
        id: newMenuItemId,
        index: menuItemsArray.length,
        label: "Menu Item",
        widgetId: generateReactKey(),
        isDisabled: false,
        isVisible: true,
        isDuplicateLabel: false,
      },
    };

    this.updateProperty(this.props.propertyName, menuItems);
  };

  updateFocus = (index: number, isFocused: boolean) => {
    this.setState({ focusedIndex: isFocused ? index : null });
  };

  static getControlType() {
    return "MENU_ITEMS";
  }
}

export default MenuItemsControl;
