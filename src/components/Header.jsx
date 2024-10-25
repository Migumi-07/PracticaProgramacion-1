//Este código es reutilizable
import "../css/Header.css";
import { IoPerson } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/Login";
  const isSignupPage = location.pathname === "/Signup";
  const isArtworkPage = location.pathname === "/Artwork";

  return (
    <>
      <header>
        <div className={`overlay ${isArtworkPage ? "Disable" : ""}`}></div>

        <div className="headerContainer">
          <div className="leftSide">
            <a href="Account" className="headerLeftIcon">
              <IoPerson
                className={`headerIcon ${isLoginPage ? "loginIcon" : ""}${
                  isSignupPage ? "signupIcon" : ""
                }${isArtworkPage ? "artWorkIcon" : ""}`}
              />
            </a>
            <a href="/" className="headerRightIcon">
              <FaPlusSquare
                className={`headerIcon2 ${isLoginPage ? "loginIcon2" : ""}${
                  isSignupPage ? "signupIcon" : ""
                }${isArtworkPage ? "artWorkIcon" : ""}`}
              />
            </a>
          </div>

          <div
            className={`centerSide ${isLoginPage ? "centerLoginSide" : ""}${
              isSignupPage ? "centerSignupSide" : ""
            }${isArtworkPage ? "centerArtworkSide" : ""}`}
          >
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/">Search</a>
            </span>
            <span>
              <a href="Login">Message</a>
            </span>
          </div>

          <div className="rightSide">
            <a href="Login" className="btnLogin">
              Login
            </a>

            <a
              href="Signup"
              className={`btnLogin2 ${isLoginPage ? "btnLoginS2" : ""} ${
                isSignupPage ? "btnSignup2" : ""
              }`}
            >
              Sign up
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
