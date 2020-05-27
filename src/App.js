import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import './App.css'

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Navbar />
        <Search />
      </MuiThemeProvider>
    </div>
  );
}

export default App
