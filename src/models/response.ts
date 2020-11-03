export interface IResponse {
  image: string;
  slug: string;
  title: string;
}

export class Response implements IResponse {
  public image: string;
  public slug: string;
  public title: string;
  constructor(image: string, slug: string, title: string) {
    this.image = image;
    this.slug = slug;
    this.title = title;
  }
}
