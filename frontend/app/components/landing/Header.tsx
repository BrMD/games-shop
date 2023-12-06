import React from "react";
import { Nav, Div, Header as Head } from "../semantics";
import Logo from "./Logo";

const Header = () => {
  return (
    <Head>
      <Nav className="w-[100vw] h-[10vh] border-2 border-solid border-red-100 flex flex-row justify-between">
        <Div>Search</Div>
        <Div>
          <a href="#">
            <Logo />
          </a>
        </Div>
        <Div>
          <a href="#">Perfil/Money</a>
        </Div>
      </Nav>
    </Head>
  );
};

export default Header;
