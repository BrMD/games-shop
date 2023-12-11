import { Div, Main } from "./components/semantics";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";
import Game_preview from "./components/Game_preview";
export default function Home() {
  return (
    <Div className="flex flex-col h-[max-content]">
      <Header></Header>
      <Main className="h-[80vh] grid_games">
        <Game_preview />
        <Game_preview />
        <Game_preview />
        <Game_preview />
        <Game_preview />
      </Main>
      <Footer></Footer>
    </Div>
  );
}
