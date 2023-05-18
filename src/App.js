import React from 'react';
import './App.css';
import { styled } from '@mui/system';
import ContactUs, {theme} from "./components/contactUsComponent";
import SubscribeComponent from "./components/subscribeComponent";

const MainContainer = styled('div')({
    padding: "104px 100px 113px 100px",
    position: "relative",
    [theme.breakpoints.down('md')]: {
        display: "block",
        width: "100vw"
    },
})

function App() {
  return (
    <MainContainer>
      <ContactUs/>
      <SubscribeComponent/>
    </MainContainer>
  );
}

export default App;
