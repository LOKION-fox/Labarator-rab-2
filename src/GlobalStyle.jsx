import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function GlobalStyles({ children }) {
  const { theme } = useContext(ThemeContext);

  const appStyles = {
  backgroundColor: theme === "dark" ? "#333" : "#fff",
  color: theme === "dark" ? "#fff" : "#000",
  width: "100%",
  minHeight: "100vh",
  padding: "20px",
  margin: 0
    };


  return <div style={appStyles}>{children}</div>;
}

export default GlobalStyles;

