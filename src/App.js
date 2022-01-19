import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import { Profile, Login } from "./components";
import { HomePage } from './pages'
import PrivateRoute from "./utils/PrivateRoute"
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route 
              path="profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
