import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Portfolio from "./portfolio/Portfolio"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App

