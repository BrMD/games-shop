import { Requirements_pc, Prices_per_platform } from "../../interfaces";
import { Categories, TypeItems } from "../../types/global";

export class Item {
  id: string;
  type: TypeItems;
  name: string;
  categories: Array<Categories>;
  cover: string;
  trailers: Array<string>;
  images: Array<string>;
  publisher: string;
  studio: string;
  description: string;
  minimum_requirements_pc?: Requirements_pc;
  recommended_requirements_pc?: Requirements_pc;
  languages: Array<string>;
  prices: Array<Prices_per_platform>;
  //release_data: date;
  launcher: string;
  constructor(
    id: string,
    type: TypeItems,
    name: string,
    categories: Array<Categories>,
    cover: string,
    trailers: Array<string>,
    images: Array<string>,
    publisher: string,
    studio: string,
    description: string,
    languages: Array<string>,
    prices: Array<Prices_per_platform>,
    launcher: string,
    minimum_requirements_pc?: Requirements_pc,
    recommended_requirements_pc?: Requirements_pc
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.categories = categories;
    this.cover = cover;
    this.trailers = trailers;
    this.images = images;
    this.publisher = publisher;
    this.studio = studio;
    this.description = description;
    this.languages = languages;
    this.prices = prices;
    this.launcher = launcher;
    this.minimum_requirements_pc = minimum_requirements_pc;
    this.recommended_requirements_pc = recommended_requirements_pc;
  }
}
