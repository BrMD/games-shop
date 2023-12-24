interface ChildrenProps extends StylingProps {
  children?: React.ReactNode;
}
type StylingProps = {
  style?: React.CSSProperties;
  className?: string;
};

type TypeItems = "DLC" | "Game";

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
  | "First-Person"
  | "Third-Person"
  | "FPS"
  | "TPS"
  | "Adventure"
  | "RPG"
  | "Fighting Game";
export type GameTypes = {
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

export type userStructure = {
  name: string;
  email: string;
  password: string;
  permissionLevel: number;
};
