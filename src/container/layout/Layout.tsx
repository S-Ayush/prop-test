import React, { ReactNode } from "react";
import NavBar from "../../components/navbar/NavBar";
import { ChildDiv, MainDiv } from "../../styles/Layout.style";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <MainDiv>
      <NavBar />
      <ChildDiv>{children}</ChildDiv>
    </MainDiv>
  );
}

export default Layout;
