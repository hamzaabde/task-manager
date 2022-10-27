import type { ReactElement } from "react";

import Container from "../components/layout/Container";
import Header from "../components/header/Header";

export default function MainLayout(): ReactElement {
  return (
    <Container>
      <Header />
    </Container>
  );
}
