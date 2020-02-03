interface IResult {
  data: any;
  isError: boolean;
  errors: string[];
}

export class Result implements IResult {
  data: any = null;
  isError: boolean = false;
  errors: string[] = [];
}
