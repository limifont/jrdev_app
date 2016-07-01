import React from 'react';
import Navbar from '../components/Navbar';

const App = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
)

export default App;

