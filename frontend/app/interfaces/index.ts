import { Platforms } from "../types/global";
export interface Requirements_pc {
  system_requirements: string;
  processor: string;
  memory: number;
  graphics_card: string;
  storage: number;
}
interface a {
  name: string;
}
export interface Prices_per_platform {
  platform: Platforms;
  price: number;
}
