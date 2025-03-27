import './App.css';
import Todo from "./page/todo";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Nanum Gothic', sans-serif"
  }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Todo/>
      </ThemeProvider>
  );
}

export default App;
