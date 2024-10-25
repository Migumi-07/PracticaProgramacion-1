import Header from "../components/Header";
import "../css/Signup.css";

function Signup() {
  return (
    <>
      <Header />
      <div className="overlay"></div>
      <div className="signupContainer">
        <div className="boxContainerSignup">
          <div className="items">
            <div className="title">
              <h1 className="formPrincipalTitle">Sign up</h1>
            </div>

            <form className="form">
              <div className="itemsContainer">
                <h1 className="formTitle">Email</h1>
                <div className="signupInputContainer">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="inputSignupPlaceholder"
                    required
                  />
                  <button className="signupInputIcon" type="button">
                    <img
                      src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-xiao/sticker_11.png?6db88912cad22fad72227c504f085c83&d=200x200"
                      alt=""
                      className="signupButtonIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="itemsContainerSignup">
                <h1 className="formTitle">User</h1>
                <div className="signupInputContainer">
                  <input
                    type="text"
                    placeholder="Enter your user"
                    className="inputSignupPlaceholder"
                    required
                  />
                  <button className="signupInputIcon" type="button">
                    <img
                      src="https://i.pinimg.com/originals/eb/bb/c1/ebbbc1d9d4f0f7fcfcd997eb26803c5c.png"
                      alt=""
                      className="signupButtonIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="itemsContainerSignup">
                <h1 className="formTitle">Password</h1>
                <div className="signupInputContainer">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="inputSignupPlaceholder"
                    required
                  />
                  <button className="signupInputIcon" type="button">
                    <img
                      src="https://ih1.redbubble.net/image.5126000533.8420/st,small,507x507-pad,600x600,f8f8f8.jpg"
                      alt=""
                      className="signupButtonIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="itemsContainerSignup">
                <h1 className="formTitle">Confirm Password</h1>
                <div className="signupInputContainer">
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="inputSignupPlaceholder"
                    required
                  />
                  <button className="signupInputIcon" type="button">
                    <img
                      src="https://i.pinimg.com/736x/f6/8b/af/f68baf4ea6bcf54edd8decf4c26c1798.jpg"
                      alt=""
                      className="signupButtonIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="signupButtonContainer">
                <input
                  type="submit"
                  className="inputBottonSignup"
                  value="Register"
                />
              </div>

              <div className="otherSelectionSignup">
                <div className="otherSelectionItemsSignup">
                  <a className="helpSelectionItemsSignup" href="/Login">
                    Already have an account? Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
