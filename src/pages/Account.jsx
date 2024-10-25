import "../css/Account.css";
import AccountHeader from "../components/AccountHeader";

function Account() {
  return (
    <>
      <div class="accountParent">
        <div class="slideAccount">
          <img
            className="accountLogo"
            src="https://cdn.custom-cursor.com/packs/4997/genshin-impact-hu-tao-and-spirit-soother-pack.png"
            alt="Logo"
          />

          <section className="userProfileSectionContainer">
            <div className="userProfileSection">
              <img
                className="userProfileIcon"
                src="https://i.pinimg.com/564x/10/f8/db/10f8db3089db05fe1f6c8e6bd6d5a8d6.jpg"
                alt=""
              />
              <div className="userData">
                <h1 className="userDataNombre">Miguel Penes</h1>
                <p className="userDataRole">Admin</p>
              </div>
            </div>
          </section>
          <div className="leftAccountOptions">
            <ul className="leftAccountContainerList">
              <h1 className="leftAccountTitle">Pages</h1>
              <li className="leftAccountListOptions">Dashboard</li>
              <li className="leftAccountListOptions">User</li>
              <li className="leftAccountListOptions">Account</li>
              <li className="leftAccountListOptions">Profile</li>
            </ul>

            <div className="leftAccountOptions2">
              <ul>
                <h1 className="leftAccountTitle">Applications</h1>
                <li className="leftAccountListOptions">To do</li>
                <li className="leftAccountListOptions">Calculadora</li>
                <li className="leftAccountListOptions">Email</li>
                <li className="leftAccountListOptions">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="headerAccount">
          <AccountHeader />
        </div>
        <div class="leftSideAccount">
          <section className="leftSideContainer">
            <div className="leftSideSection">
              <div className="lefSideListContainer">
                <ul>
                  <li className="leftsideOptions">
                    <a className="leftsideOptionsA" href="/">
                      Basic Information
                    </a>
                  </li>
                  <li className="leftsideOptions">
                    <a className="leftsideOptionsA" href="/">
                      Preferences
                    </a>
                  </li>
                  <li className="leftsideOptions">
                    <a href="" className="leftsideOptionsA">
                      Password
                    </a>
                  </li>
                  <li className="leftsideOptions">
                    <a href="" className="leftsideOptionsA">
                      Notifications
                    </a>
                  </li>
                  <li className="leftsideOptions">
                    <a href="" className="leftsideOptionsA">
                      Notifications
                    </a>
                  </li>
                  <li className="leftsideOptions">
                    <a href="" className="leftsideOptionsA">
                      Delete Your Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div class="contentAccount">
          <section>
            <div className="firstPartAccountContent">
              <div className="firstPartAccount">
                <div className="backgroundAccountContent" />
                <div className="firstPartAccountContentInfo">
                  <img
                    className="accountContentLogo"
                    src="https://i.pinimg.com/564x/10/f8/db/10f8db3089db05fe1f6c8e6bd6d5a8d6.jpg"
                    alt=""
                  />
                  <h1 className="accountTitle">Miguel Penes</h1>
                  <div className="accountSkills">
                    <p>Developer</p>
                    <p>Frontend</p>
                    <p>8:00am - 5:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="secondPartAccountContent">
              <div className="accountEditInformation">
                <h1 className="accountEditInformationTitle">
                  Edit your account information
                </h1>

                <form action="" className="editAccountForm">
                  <div class="name-container">
                    <input
                      className="editFormInput"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="editFormInput"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="job-location-container">
                    <input
                      className="editFormInput"
                      type="text"
                      placeholder="Job Title"
                    />
                    <input
                      className="editFormInput"
                      type="text"
                      placeholder="Location"
                    />
                  </div>

                  <div className="editFormAbout">
                    <textarea
                      className="editFormAboutYou"
                      rows="4"
                      placeholder="About you"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Account;