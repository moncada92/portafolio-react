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
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OutWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
   );
}
 
export default App;