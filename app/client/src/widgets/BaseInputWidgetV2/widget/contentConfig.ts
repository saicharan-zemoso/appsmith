import { ValidationTypes } from "constants/WidgetValidation";

import type { BaseInputWidgetProps } from "./types";

export const propertyPaneContentConfig = [
  {
    sectionName: "Label",
    children: [
      {
        helpText: "Sets the label text of the widget",
        propertyName: "label",
        label: "Text",
        controlType: "INPUT_TEXT",
        placeholderText: "Name:",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.TEXT },
      },
    ],
  },
  {
    sectionName: "Validation",
    children: [
      {
        helpText:
          "Adds a validation to the input which displays an error on failure",
        propertyName: "regex",
        label: "Regex",
        controlType: "INPUT_TEXT",
        placeholderText: "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.REGEX },
      },
      {
        helpText: "Sets the input validity based on a JS expression",
        propertyName: "validation",
        label: "Valid",
        controlType: "INPUT_TEXT",
        placeholderText: "{{ Input1.text.length > 0 }}",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: {
          type: ValidationTypes.BOOLEAN,
          params: {
            default: true,
          },
        },
      },
      {
        helpText:
          "The error message to display if the regex or valid property check fails",
        propertyName: "errorMessage",
        label: "Error message",
        controlType: "INPUT_TEXT",
        placeholderText: "Not a valid value!",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.TEXT },
      },
    ],
  },
  {
    sectionName: "General",
    children: [
      {
        helpText: "Show help text or details about current input",
        propertyName: "tooltip",
        label: "Tooltip",
        controlType: "INPUT_TEXT",
        placeholderText: "Value must be atleast 6 chars",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.TEXT },
      },
      {
        helpText: "Sets a placeholder text for the input",
        propertyName: "placeholderText",
        label: "Placeholder",
        controlType: "INPUT_TEXT",
        placeholderText: "Placeholder",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.TEXT },
      },
      {
        helpText: "Controls the visibility of the widget",
        propertyName: "isVisible",
        label: "Visible",
        controlType: "SWITCH",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.BOOLEAN },
      },
      {
        helpText: "Disables input to this widget",
        propertyName: "isDisabled",
        label: "Disabled",
        controlType: "SWITCH",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.BOOLEAN },
      },
      {
        propertyName: "animateLoading",
        label: "Animate loading",
        controlType: "SWITCH",
        helpText: "Controls the loading of the widget",
        defaultValue: true,
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.BOOLEAN },
      },
      {
        helpText: "Focus input automatically on load",
        propertyName: "autoFocus",
        label: "Auto focus",
        controlType: "SWITCH",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.BOOLEAN },
      },
      {
        propertyName: "allowFormatting",
        label: "Enable formatting",
        helpText: "Formats the phone number as per the country selected",
        controlType: "SWITCH",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.BOOLEAN },
        hidden: (props: BaseInputWidgetProps) => {
          return props.type !== "PHONE_INPUT_WIDGET";
        },
      },
    ],
  },
  {
    sectionName: "Events",
    children: [
      {
        helpText: "when the text is changed",
        propertyName: "onTextChanged",
        label: "onTextChanged",
        controlType: "ACTION_SELECTOR",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: true,
      },
      {
        helpText: "when the input field receives focus",
        propertyName: "onFocus",
        label: "onFocus",
        controlType: "ACTION_SELECTOR",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: true,
      },
      {
        helpText: "when the input field loses focus",
        propertyName: "onBlur",
        label: "onBlur",
        controlType: "ACTION_SELECTOR",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: true,
      },
      {
        helpText: "on submit (when the enter key is pressed)",
        propertyName: "onSubmit",
        label: "onSubmit",
        controlType: "ACTION_SELECTOR",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: true,
      },
      {
        helpText: "Clears the input value after submit",
        propertyName: "resetOnSubmit",
        label: "Reset on submit",
        controlType: "SWITCH",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.BOOLEAN },
      },
    ],
  },
];
