import type { ReactElement } from "react";

import Container from "../components/layout/Container";
import Header from "../components/header/Header";
import Kanban from "../components/kanban/Kanban";
import ModalContainer from "../components/modals/ModalContainer";

export default function MainLayout(): ReactElement {
  return (
    <Container>
      <Header />
      <Kanban />
      <ModalContainer />
    </Container>
  );
}
