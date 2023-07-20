import { InstructionsTypesEnum } from "../configurations";

const checkInstructions = (type: string, instructions: any): boolean => {
  if (
    !Object.values(InstructionsTypesEnum).includes(
      type as InstructionsTypesEnum
    )
  ) {
    return false;
  }
  switch (type as InstructionsTypesEnum) {
    case InstructionsTypesEnum.BEST_MAX_RATE: {
      return !!instructions?.maxRate && typeof instructions?.gmt === "number";
    }
    case InstructionsTypesEnum.BEST_MIN_RATE: {
      return !!instructions?.minRate && typeof instructions?.gmt === "number";
    }
    case InstructionsTypesEnum.DAILY_RATE: {
      return typeof instructions?.gmt === "number";
    }
    default: {
      return false;
    }
  }
};

export { checkInstructions };
