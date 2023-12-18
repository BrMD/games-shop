import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const Categories = new Schema({ name: String });
const Trailers = new Schema({ urlVideo: String });
const Images = new Schema({ imagesUrl: String });
const Languages = new Schema({ languages: String });
const Prices_per_platform = new Schema({ name: String, price: Number });
const Requirements_pc = new Schema({
  system_requirements: String,
  processor: String,
  memory: Number,
  graphics_card: String,
  storage: Number,
});

const gameSchema = new Schema({
  _id: ObjectId,
  name: String,
  categories: [Categories],
  cover: String,
  trailers: [Trailers],
  images: [Images],
  publisher: String,
  studio: String,
  description: String,
  minimum_requirements_pc: Requirements_pc,
  recommended_requirements_pc: Requirements_pc,
  languages: [Languages],
  prices: [Prices_per_platform],
  release_data: Date,
  launcher: String,
});

const gameModel = mongoose.model("Game", gameSchema);
export default gameModel;

// _id: ObjectId;
//   name: string;
//   categories: Array<Categories>;
//   cover: string;
//   trailers: Array<string>;
//   images: Array<string>;
//   publisher: string;
//   studio: string;
//   description: string;
//   minimum_requirements_pc?: Requirements_pc;
//   recommended_requirements_pc?: Requirements_pc;
//   languages: Array<string>;
//   prices: Array<Prices_per_platform>;
//   //release_data: date;
//   launcher: string;
