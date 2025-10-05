import React, { ReactNode } from "react";
import { ThemeProvider } from "../hooks/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import ToasterProvider from "./ToasterProvider";
const Provider: React.FC<{ children: ReactNode; }> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <ToasterProvider />
          {children}
        </ReduxProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Provider;
