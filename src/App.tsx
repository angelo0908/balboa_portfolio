import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
