import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import { Profile, Login, SignIn, GuideForm, EventForm, SellerForm } from "./components";
import { HomePage, MainPage, GuideProfile } from './pages'
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
            <Route path="signin" element={<SignIn />} />
            <Route path="profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="home" 
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />

            <Route path="guide/:id" 
              element={
                <PrivateRoute>
                  <GuideProfile />
                </PrivateRoute>
              }
            />

            <Route path="admin/guide" 
              element={
                <PrivateRoute>
                  <GuideForm />
                </PrivateRoute>
              }
            />

            <Route path="admin/event" 
              element={
                <PrivateRoute>
                  <EventForm />
                </PrivateRoute>
              }
            />

            <Route path="admin/seller" 
              element={
                <PrivateRoute>
                  <SellerForm />
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
