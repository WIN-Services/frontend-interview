import React from 'react';
import {styled} from '@mui/system';
import ContactSection, {theme} from './components/ContactSection';
import SubscribeToEmail from './components/SubscribeToEmailSection';

import './App.css';

const MainWrapper = styled('div')({
  padding: '104px 100px 113px 100px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100vw',
    padding: '30px 20px',
  },
});

function App() {
  return (
    <MainWrapper>
      <ContactSection />
      <SubscribeToEmail />
    </MainWrapper>
  );
}

export default App;
