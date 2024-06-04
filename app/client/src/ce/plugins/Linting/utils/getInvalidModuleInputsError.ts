import type { MemberCallExpressionData } from "@shared/ast";
import type { Position } from "codemirror";
import type { LintError } from "utils/DynamicBindingUtils";

export interface GetInvalidModuleInputsErrorProps {
  data: Record<string, unknown>;
  memberCallExpressions: MemberCallExpressionData[];
  originalBinding: string;
  script: string;
  scriptPos: Position;
}

function getInvalidModuleInputsError(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: GetInvalidModuleInputsErrorProps,
): LintError[] {
  return [];
}

export default getInvalidModuleInputsError;
