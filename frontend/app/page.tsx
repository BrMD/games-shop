import { Div, Main } from "./components/semantics";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";
export default function Home() {
  return (
    <Div className="flex flex-col h-[max-content]">
      <Header></Header>
      <Main className="h-[80vh]"></Main>
      <Footer></Footer>
    </Div>
  );
}
