export interface IFilterService {
  // runs the filters then return the filtered data
  // which adhere to the conditions
  runFilters: (data: any[]) => any[];
}

export class FilterService implements IFilterService {
  private readonly requireDRM: boolean;
  private readonly numEpReq: number;

  constructor(requireDRM: boolean, numEp: number) {
    this.numEpReq = numEp;
    this.requireDRM = requireDRM;
  }

  private validateOne(data: any): boolean {
    if (!data) return false;
    if (this.requireDRM && !data.requireDRM) return false;
    if (!data.episodeCount || data.episodeCount < this.requireDRM) return false;
    return true;
  }

  public runFilters(data: any[]): any[] {
    return data.filter((d) => this.validateOne(d));
  }
}
