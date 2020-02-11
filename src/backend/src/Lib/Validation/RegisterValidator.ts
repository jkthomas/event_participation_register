import { Request, Response } from "express";

export namespace RegisterValidator {
  export function addErrors(e: any): string[] {
    const errorMessages: string[] = [];
    addGlobalErrors(e, errorMessages);
    addFieldsErrors(e, errorMessages);
    return errorMessages;
  }

  function addGlobalErrors(e: any, errorMessages: string[]): void {
    if (!(e.message as string).includes("validation failed")) {
      errorMessages.push(e.message);
    }
  }

  function addFieldsErrors(err: any, errorMessages: string[]): void {
    for (let errorName in err.errors) {
      if (err.errors[errorName].name === "CastError") {
        errorMessages.push(
          "Field " + err.errors[errorName].path + " has invalid value"
        );
      }
      errorMessages.push(err.errors[errorName].message);
    }
  }
}
