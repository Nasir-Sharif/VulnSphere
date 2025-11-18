import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/auth/me`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setUser(response.data);
          setIsLoggedIn(true);
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("AuthContext: Fetched user data:", response.data);
        } catch (error) {
          console.error("Auth check failed:", error.message);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setIsLoggedIn(false);
          setUser(null);
        }
      }
    };
    checkAuth();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("AuthContext: User logged in:", userData);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("AuthContext: User logged out");
  };

  const updatePremiumStatus = (isPremium) => {
    setUser((prev) => (prev ? { ...prev, isPremium } : null));
    localStorage.setItem("user", JSON.stringify({ ...user, isPremium }));
    console.log("AuthContext: Updated premium status:", isPremium);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, updatePremiumStatus }}>
      {children}
    </AuthContext.Provider>
  );
};