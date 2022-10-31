import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "./layouts/MainLayout";
import { ModalStateProvider } from "./context/modal-context";

const client = new QueryClient();

function App() {
  document.title = "Task Manager";

  return (
    <QueryClientProvider client={client}>
      <ModalStateProvider>
        <MainLayout />
      </ModalStateProvider>
    </QueryClientProvider>
  );
}

export default App;
