import  {NavRoutes,Navbar,Footer} from './components';
import React , { useState } from 'react';


function App() {
  const [darkTheme,setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark': ' ' }>
      <div className="bg-gray-300 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <NavRoutes/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

