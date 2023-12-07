interface ChildrenProps extends StylingProps {
  children?: React.ReactNode;
}
type StylingProps = {
  style?: React.CSSProperties;
  className?: string;
};

type Platforms =
  | "Playstation 4"
  | "Xbox One"
  | "Playstation 5"
  | "Xbox Series X"
  | "Xbox Series S"
  | "Nintendo Switch";

export type Categories =
  | "Action"
  | "SinglePlayer"
  | "Multiplayer"
  | "FirstPerson"
  | "ThirdPerson"
  | "FPS"
  | "TPS"
  | "Adventure"
  | "RPG"
  | "Fighting Game";
export type ItemTypes = {
  id: string;
  name: string;
  categories: Array<Categories>;
  cover: string;
  trailers: Array<string>;
  images: Array<string>;
  publisher: string;
  studio: string;
  description: string;
  languages: Array<string>;
  prices: Array<Prices_per_platform>;
  launcher: string;
  minimum_requirements_pc?: Requirements_pc;
  recommended_requirements_pc?: Requirements_pc;
};
