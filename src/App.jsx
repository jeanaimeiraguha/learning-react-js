import './App.css';
import React from 'react'
import NavigationBar from './nav';
import Welcome from './Welcome';
import home from './themes/home';
// import footer from './footer';

const App = () => {
  return (
    <div>
   <NavigationBar/>
   <Welcome/>
   {/* <Home/> */}
   {/* <footer/> */}
    </div>
  )
}

export default App
