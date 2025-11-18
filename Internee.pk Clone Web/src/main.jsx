import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./Route.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeContextProvider>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </ThemeContextProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);