//Este código es reutilizable
import "../css/AccountHeader.css";

function AccountHeader() {
  return (
    <>
      <header>
        <div className="accountHeaderContainer">
          <div className="leftSide">
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
        </div>
      </header>
    </>
  );
}

export default AccountHeader;
