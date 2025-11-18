import React, { useState, useEffect, useContext, useCallback } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext.jsx";
import logo from "../assets/images/Vulnlogoo.png";
import debounce from 'lodash/debounce';
import PaymentModal from "./PaymentModal.jsx";

function NavBar() {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Debounced scroll handler for performance
  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollPos = window.pageYOffset;
      setIsSticky(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    }, 100),
    [prevScrollPos]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Clean up debounce
    };
  }, [handleScroll]);

  const toggleIcon = () => {
    setIsOpen4((prev) => !prev);
    setExpanded((prev) => !prev);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      toggleIcon();
      scrollToTop();
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  const handlePremiumClick = () => {
    if (!isLoggedIn) {
      navigate("/sign-in");
      return;
    }
    if (user?.isPremium) {
      navigate("/premium-portal");
    } else {
      setShowPaymentModal(true);
    }
  };

  return (
    <div className={`navbar-container p-0 m-0 border-b-2 border-gray-700 bg-black text-white Urbanist ${isSticky ? "fade-in" : ""}`}>
      <div className="container-sm my-auto">
        <Navbar expand="lg" className="nav-bar items-center bg-black text-white" expanded={expanded}>
          <Navbar.Brand className="me-auto w-36 md:w-18 lg:w-52" as={Link} to="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          <div className="d-lg-none flex flex-col justify-center items-center mb-0 p-0">
            <div className="p-1.5 rounded-xl m-0 flex justify-center GreenColorBackground">
              <div
                className="navbar-toggler p-0 m-0 before:border-none after:border-none"
                type="button"
                onClick={() => setExpanded(!expanded)}
              >
                <div
                  id="nav-icon4"
                  className={` ${isOpen4 ? "open" : ""} p-0 m-0 before:border-none after:border-none`}
                  onClick={toggleIcon}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto items-center text-sm bg-black z-10 font-semibold">
              <Link to="/" className="nav-link text-white hover:text-green-400 px-3" onClick={handleToggle}>
                Home
              </Link>
              <Link to="/premium-content" className="nav-link text-white hover:text-green-400 px-3" onClick={handleToggle}>
                Premium Content
              </Link>
              <Link to="/studentambassadors" className="nav-link text-white hover:text-green-400 px-3" onClick={handleToggle}>
                Student Ambassador
              </Link>
              {isLoggedIn && (
                <Link to="/cyberdashboard" className="nav-link text-white hover:text-green-400 px-3" onClick={handleToggle}>
                  Cyber Dashboard
                </Link>
              )}
            </Nav>

            <div className="d-sm-none d-lg-block ms-auto font-semibold">
              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={handlePremiumClick}
                  className="bg-green-600 hover:bg-transparent text-white border border-green-500 hover:text-green-400 transition duration-300 rounded-lg px-3 py-2 shadow"
                >
                  Premium User
                </button>

                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white transition duration-300 rounded-lg px-3 py-2 shadow"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/sign-in" className="no-underline">
                    <button className="bg-green-600 hover:bg-green-700 text-white transition duration-300 rounded-lg px-3 py-2 shadow">
                      Sign In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <PaymentModal show={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
    </div>
  );
}

export default React.memo(NavBar);