import {AllRoutes} from "./routes/AllRoutes";
import {Header} from "./Components";
import './App.css';
function App() {
  return (
    <div className="App">

     <Header/>
     <AllRoutes/>
 
    </div>
  );
};
export default App;

/*import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
// Import other pages if necessary

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes if necessary }
    </Routes>
  );
};

export default App;
*/
    
    
