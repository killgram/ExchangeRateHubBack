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
      return !!instructions?.maxRate;
    }
    case InstructionsTypesEnum.BEST_MIN_RATE: {
      return !!instructions?.minRate;
    }
    case InstructionsTypesEnum.EVERY_DAY: {
      return true;
    }
    case InstructionsTypesEnum.BANK_RATE: {
      return !!instructions?.bankUid;
    }
    default: {
      return false;
    }
  }
};

export { checkInstructions };
