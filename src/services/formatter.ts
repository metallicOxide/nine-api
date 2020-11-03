import { IResponse, Response } from "../models/response";

export interface IFormatterService {
  formatData: (data: any[]) => IResponse[];
}

// kind of doesn't make sense to use class here
// but good for longivity of code
export class FormatterService implements IFormatterService {
  public formatData(data: any[]): IResponse[] {
    return data.map((d) => new Response(d.image, d.slug, d.title));
  }
}
