import Header from "../components/Header";
import "../css/Login.css";

function Login() {
  return (
    <>
      <Header />
      <div className="overlay"></div>
      <div className="loginContainer">
        <div className="boxContainer">
          <div className="items">
            <div className="title">
              <h1 className="formPrincipalTitle">Login</h1>
            </div>

            <form className="form">
              <div className="itemsContainer">
                <h1 className="formTitle">User</h1>
                <div className="loginInputContainer">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="inputLoginPlaceholder"
                    required
                  />
                  <button className="loginInputIcon">
                    <img
                      src="https://media.tenor.com/IdbWvOT9Nz0AAAAi/raiden-shogun-genshin-impact.gif"
                      alt=""
                      className="loginButtonIcon"
                    />
                  </button>
                </div>
              </div>
              <div className="itemsContainer">
                <h1 className="formTitle">Password</h1>
                <div className="loginInputContainer">
                  <input
                    type="text"
                    placeholder="Enter your password"
                    className="inputLoginPlaceholder"
                    required
                  />
                  <button className="loginInputIcon">
                    <img
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/355994da-15f9-4cdb-a42d-8569f995b071/deq0pjs-5c0d4dfa-2993-4d87-ad2a-71470d42e3b9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTk5NGRhLTE1ZjktNGNkYi1hNDJkLTg1NjlmOTk1YjA3MVwvZGVxMHBqcy01YzBkNGRmYS0yOTkzLTRkODctYWQyYS03MTQ3MGQ0MmUzYjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2xstcziRhylIRP2OwrqBAfyg6zk6K-8kGRwQuRbne9A"
                      alt=""
                      className="loginButtonIcon"
                    />
                  </button>
                </div>
              </div>

              <div className="loginButtonContainer">
                <input type="submit" className="inputBotton" value="Login" />
              </div>
              <div className="otherSelection">
                <div className="otherSelectionItems">
                  <a
                    className="helpSelectionItems"
                    href="/Login"
                    onClick={(e) => {
                      alert("A password reset email has been sent.");
                    }}
                  >
                    Forgot Password
                  </a>

                  <a className="helpSelectionItems" href="/Signup">
                    Sign up
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

export default Login;
