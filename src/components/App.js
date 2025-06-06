
import React, { useState } from "react";
import './../styles/App.css';
import { AuthProvider } from "./AuthContext";
import Auth from "./Auth";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Auth/>
      </AuthProvider>
    </div>
  )
}

export default App
