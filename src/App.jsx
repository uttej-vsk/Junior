// App.js
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Protected from "./Protected";
import { Navbar } from "./components/Navbar";
import AuthProvider from "./components/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar />
                <h1>Welcome to Junior</h1>
                <h2>Other components</h2>
              </>
            }
          />
          <Route path='/login' element={<Login />} />

          <Route
            path='/dashboard'
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          >
            <Route path='home' />
            <Route path='analytics' />
            <Route path='clients' />
            <Route path='settings' />
          </Route>

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
