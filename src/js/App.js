import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// global styles
import GlobalStyle from './components/GlobalStyle';
//components
import Nav from './components/Nav';
import MovieDetail from './pages/MoveDetail';

//import page
import AboutUs from './pages/AboutUs';
import OutWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

//animation
import { AnimatePresence } from "framer-motion";


const App = () => {

  const location = useLocation();
  return ( 
    <div className="app">
      <GlobalStyle />
      <Nav />

        <Switch location={location} key={location.pathname}>
          <Route path="/portafolio-react/" exact>
            <AboutUs />
          </Route>
          <Route path="/portafolio-react/work" exact>
            <OutWork />
          </Route>
          <Route path="/portafolio-react/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/portafolio-react/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
        
    </div>
   );
}
 
export default App;