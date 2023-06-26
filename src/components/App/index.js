import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from '../../Router';

import defaltTheme from '../../assets/themes/default';
import Header from '../Header';
import GlobalStyles from '../../assets/styles/global';

import { Container } from './style';
import WhatsappIcon from '../WhatsappIcon';
import Footer from '../Footer';

function App() {
  return (
    <BrowserRouter>

      <ThemeProvider theme={defaltTheme}>
        <GlobalStyles />

        <Container>
          <Header />
          <Router />
          <WhatsappIcon />
          <Footer />
        </Container>
      </ThemeProvider>
      ;

    </BrowserRouter>
  );
}

export default App;
