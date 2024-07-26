import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <h1 style={{ fontSize: 35, marginTop: 20, textAlign: 'center'}}>Hi! I am Brian Altan👋</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <footer style={styles.footer}>
          <p>© 2024 Brian Altan</p>
        </footer>
      </div>
    </Router>
  );
};

const styles = {
  footer: {
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    fontSize: '16px',
  },
};

export default App;
