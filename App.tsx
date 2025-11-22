import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ClientLayout from './components/ClientLayout';
import Home from './app/page';
import Login from './app/login/page';
import Register from './app/register/page';
import Profile from './app/profile/page';

const App: React.FC = () => {
  return (
    <Router>
      <ClientLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Home />} />
          <Route path="/maps" element={<Home />} />
          <Route path="/wishlist" element={<Profile />} />
        </Routes>
      </ClientLayout>
    </Router>
  );
};

export default App;