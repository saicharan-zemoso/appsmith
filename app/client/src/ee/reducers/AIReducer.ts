import type {
  TAssistantPrompt,
  TChatGPTPrompt,
} from "@appsmith/components/editorComponents/GPT/utils";
import { isAssistantPrompt } from "@appsmith/components/editorComponents/GPT/utils";
import type { ReduxAction } from "@appsmith/constants/ReduxActionConstants";
import { ReduxActionTypes } from "@appsmith/constants/ReduxActionConstants";
import type { ENTITY_TYPE } from "entities/DataTree/types";
import { createImmerReducer } from "utils/ReducerUtils";
import type { ExpectedValueExample } from "utils/validation/common";

export type GPTTriggerContext = Partial<{
  expectedType: string;
  entityType: ENTITY_TYPE;
  propertyPath: string;
  entityId: string;
  example: ExpectedValueExample;
  noOfTimesAITriggered: number;
}>;

export interface AIReduxState {
  isAIWindowOpen: boolean;
  evaluationResults: Record<string, any>;
  messages: TChatGPTPrompt[];
  showExamplePrompt: boolean;
  isLoading: boolean;
  context: GPTTriggerContext;
  noOfTimesAITriggered: number;
}

const initialGPTState: AIReduxState = {
  isAIWindowOpen: false,
  evaluationResults: {},
  messages: [],
  showExamplePrompt: false,
  isLoading: false,
  context: {},
  noOfTimesAITriggered: 0,
};

const handlers = {
  [ReduxActionTypes.TOGGLE_AI_WINDOW]: (
    state: AIReduxState,
    action: ReduxAction<{ show: boolean; context: any }>,
  ) => {
    state.isAIWindowOpen = action.payload.show;
    state.context = action.payload.context || {};
    state.showExamplePrompt = Boolean(!state.messages.length);
  },
  [ReduxActionTypes.EVALUATE_GPT_RESPONSE_COMPLETE]: (
    state: AIReduxState,
    action: ReduxAction<{ error: string; result: any; messageId: string }>,
  ) => {
    state.evaluationResults[action.payload.messageId] = action.payload.result;
  },
  [ReduxActionTypes.ADD_GPT_MESSAGE]: (
    state: AIReduxState,
    action: ReduxAction<TChatGPTPrompt>,
  ) => {
    state.messages.push(action.payload);
  },
  [ReduxActionTypes.UPDATE_GPT_MESSAGE]: (
    state: AIReduxState,
    action: ReduxAction<Partial<TAssistantPrompt>>,
  ) => {
    const { messageId } = action.payload;
    const messageIndex = state.messages.findIndex(
      (message) =>
        isAssistantPrompt(message) && message.messageId === messageId,
    );
    state.messages[messageIndex] = {
      ...(state.messages[messageIndex] as TAssistantPrompt),
      ...action.payload,
    };
  },
  [ReduxActionTypes.SHOW_EXAMPLE_GPT_PROMPT]: (
    state: AIReduxState,
    action: ReduxAction<boolean>,
  ) => {
    state.showExamplePrompt = action.payload;
  },
  [ReduxActionTypes.AI_LOADING]: (
    state: AIReduxState,
    action: ReduxAction<boolean>,
  ) => {
    state.isLoading = action.payload;
  },
  [ReduxActionTypes.UPDATE_AI_TRIGGERED]: (
    state: AIReduxState,
    action: {
      payload: { value: number };
    },
  ) => {
    const { value } = action.payload;
    state.noOfTimesAITriggered = value;
  },
};

export default createImmerReducer(initialGPTState, handlers);
