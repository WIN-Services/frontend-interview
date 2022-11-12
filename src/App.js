import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Contact from './Contact/Contact';

const theme = createTheme({
  typography: {
    h1: {
      color: "#004461"
    },
    h4: {
      color: "#004461"
    },
    subtitle2: {
      color: "#004461"
    },
    overline: {
      color: "#2f2f2f"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Contact />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
