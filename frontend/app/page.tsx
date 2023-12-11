import { Div, Main } from "./components/semantics";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";
import Game_preview from "./components/Game_preview";
export default function Home() {
  return (
    <Div className="home">
      <Header></Header>
      <Main className="h-[80vh]">
        <Div className="grid_games h-[fit-content] gap-2">
          <Game_preview />
          <Game_preview />
          <Game_preview />
          <Game_preview />
          <Game_preview />
        </Div>
      </Main>
      <Footer></Footer>
    </Div>
  );
}
