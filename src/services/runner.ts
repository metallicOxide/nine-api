import { IResponse } from "../models/response";
import { IFilterService, FilterService } from "./filter";
import { IFormatterService, FormatterService } from "./formatter";

export interface IRunner {
  runPipes: (data: any[]) => IResponse[];
}

// kind of doesn't make sense to use class here
// but good for longivity of code
export class Runner implements IRunner {
  private readonly filterService: IFilterService;
  private readonly formatterService: IFormatterService;
  constructor() {
    const requireDRM = process.env.REQUIRE_DRM === "true";
    const numEp = process.env.MIN_EP_COUNT
      ? parseInt(process.env.MIN_EP_COUNT)
      : 0;
    this.filterService = new FilterService(requireDRM, numEp);
    this.formatterService = new FormatterService();
  }

  public runPipes(data: any[]) {
    return this.formatterService.formatData(
      this.filterService.runFilters(data)
    );
  }
}
