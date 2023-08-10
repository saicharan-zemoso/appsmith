import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@design-system/widgets";
import { StoryGrid } from "../../../helpers/StoryGrid";
import { DataAttrWrapper } from "../../../helpers/DataAttrWrapper";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Design System/Widgets/Switch",
};

export default meta;

type Story = StoryObj<typeof Switch>;

const states = ["", "data-hovered", "data-focused", "data-disabled"];

export const LightMode: Story = {
  render: () => (
    <StoryGrid>
      {states.map((state) => (
        <>
          <DataAttrWrapper attr={state} key={state}>
            <Switch>unchecked {state}</Switch>
          </DataAttrWrapper>
          <DataAttrWrapper attr={state} key={state}>
            <Switch defaultSelected>checked {state}</Switch>
          </DataAttrWrapper>
        </>
      ))}
    </StoryGrid>
  ),
};

export const DarkMode: Story = Object.assign({}, LightMode);

DarkMode.parameters = {
  colorMode: "dark",
};
