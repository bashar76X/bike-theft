import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./configs/react-query-config";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
