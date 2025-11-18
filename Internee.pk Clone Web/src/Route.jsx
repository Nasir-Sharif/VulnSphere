import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";
import "./Loader.css";
import Home from "./pages/home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import GraduateProgram from "./pages/premiumcontent.jsx";
import StudentAmbassadorSection from "./pages/StudentAmbassadorSection.jsx";
import SignUp from "./pages/auth/signup.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import CyberDashboard from "./pages/CyberDashboard.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import { AuthProvider, AuthContext } from "./components/AuthContext.jsx";
import PremiumPortal from "./components/PremiumPortal.jsx";
import Payment from "./pages/auth/Payment.jsx";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
          <p className="mt-4">Please refresh the page or try again later.</p>
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/sign-in" />;
}

function AppRouter() {
  return (
    <AuthProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ErrorBoundary>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/premium-content" element={<GraduateProgram />} />
            <Route path="/studentambassadors" element={<StudentAmbassadorSection />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cyberdashboard" element={<ProtectedRoute><CyberDashboard /></ProtectedRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/premium-portal" element={<PremiumPortal />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;