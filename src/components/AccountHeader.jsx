//Este código es reutilizable
import "../css/AccountHeader.css";

function AccountHeader() {
  return (
    <>
      <header>
        <div className="accountHeaderContainer">
          <div className="leftSide">
            <span>
              <a className="leftSideA Dashboard" href="Account">
                Dashboard
              </a>
            </span>
            <span>
              <a className="leftSideA" href="/">
                Home
              </a>
            </span>
            <span>
              <a className="leftSideA" href="/">
                Search
              </a>
            </span>
            <span>
              <a className="leftSideA" href="Login">
                Message
              </a>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default AccountHeader;
