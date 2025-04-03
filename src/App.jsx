import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
// import Habits from './pages/Habits';
// import CalendarPage from './pages/CalendarPage';

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Layout><Home /></Layout>} />
            {/* <Route path="/habits" element={<Habits />} />
            <Route path="/calendar" element={<CalendarPage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;