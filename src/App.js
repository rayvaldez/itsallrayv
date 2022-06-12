import { ThemeProvider, createTheme } from "@mui/material/styles";
import Landing from './components/Landing';
import Header from './components/Header';
import Introduction from "./components/Introduction";
import CssBaseline from '@mui/material/CssBaseline';


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif"
    }
  });
  return (
    <div className="App">
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
        <Landing />
        <Introduction />
      </ThemeProvider>
    </CssBaseline>
    </div>
  );
}

export default App;
