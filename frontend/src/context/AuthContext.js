// 10. AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Simulate API call
    const fakeUser = {
      id: 1,
      name: 'John Doe',
      email: credentials.email,
      role: credentials.email === 'admin@example.com' ? 'admin' : 'customer',
    };
    setUser(fakeUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
