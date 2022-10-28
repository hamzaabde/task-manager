import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "./layouts/MainLayout";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <MainLayout />
    </QueryClientProvider>
  );
}

export default App;
