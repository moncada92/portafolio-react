import React from 'react';
// global styles
import GlobalStyle from './components/GlobalStyle';

//import page
import AboutUs from './pages/AboutUs';


const App = () => {
  return ( 
    <div className="app">
      <AboutUs />
      <GlobalStyle />
    </div>
   );
}
 
export default App;