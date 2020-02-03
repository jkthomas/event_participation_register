import { Request, Response } from "express";

export namespace RegisterValidator {
  export function addErrors(err: any): string[] {
    let errors: string[] = [];
    for (let errorName in err.errors) {
      errors.push(err.errors[errorName].message);
    }
    return errors;
  }
}
