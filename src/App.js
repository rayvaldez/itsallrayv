import { ThemeProvider, createTheme } from "@mui/material/styles";
import Landing from './components/Landing';
import Header from './components/Header';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif"
    }
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
      </ThemeProvider>
    </div>
  );
}

export default App;
