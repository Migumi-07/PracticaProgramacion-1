import "../css/Artwork.css";
import { FaSearch } from "react-icons/fa";
function Artwork() {
  return (
    // funcion para añadirle al overelay una clase active segun el sitio donde esté. en este caso estás en la pagina artwork, donde tu no quieres que esté activo el overlay.
    <>
      <div className="artWorkContainer">
        <div className="artWork">
          <h1 className="artWorkTitle">Art Work</h1>
          <div className="artWorkImageContainer">
            <img
              className="artWorkImage"
              src="https://i.pinimg.com/236x/96/a3/84/96a3847d339c183e4698f0d5c0aaf9e3.jpg"
              alt="tin"
            ></img>
            <span className="imageText">By Lemus</span>
          </div>

          <div className="artWorkImageContainer">
            <img
              className="artWorkImage"
              src="https://i.pinimg.com/564x/76/09/15/760915deaa31a44602fde8db0cc7c9ee.jpg"
              alt="tin"
            ></img>
            <span className="imageText">By Miguel</span>
          </div>
          <div className="btnMoreContainer">
            <a href="Artwork" className="btnMoreTextLink">
              <div className="btnMore">
                <div className="btnMoreTextContainer"></div>
                <a href="Artwork" className="btnMoreText">
                  View More
                </a>
              </div>
            </a>
          </div>
        </div>

        <div className="searchContainer">
          <div className="search">
            <h1>Recent Search</h1>
            <div className="searchBox">
              <input
                type="text"
                placeholder="Hutao Rule 34"
                className="searchInput"
              />
              <button className="searchButton">
                <FaSearch className="searchButtonIcon" />
              </button>
            </div>
          </div>

          <div className="search">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Hu Tao Empelota"
                className="searchInput"
              />
              <button className="searchButton">
                <FaSearch className="searchButtonIcon" />
              </button>
            </div>
          </div>

          <div className="search">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Hu Tao Build"
                className="searchInput"
              />

              <button className="searchButton">
                <FaSearch className="searchButtonIcon" />
              </button>
            </div>
          </div>

          <div className="search">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Hu Tao Artefacts"
                className="searchInput"
              />

              <button className="searchButton">
                <FaSearch className="searchButtonIcon" />
              </button>
            </div>
          </div>

          <div className="search">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Hu Tao Sex"
                className="searchInput"
              />

              <button className="searchButton">
                <FaSearch className="searchButtonIcon" />
              </button>
            </div>
          </div>
        </div>
        <div className="artIconsContainer">
          <div className="iconsImagesContainer">
            <img
              className="iconsImages"
              src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-hutao/tray_large.png?2c9966a5520fdab6c03fda5ca193f388"
              alt="tin"
            />

            <img
              className="iconsImages"
              src="https://pbs.twimg.com/media/FOssz_TX0AILWLT.png"
              alt="tin"
            />
          </div>
        </div>

        <div className="informationContainer">
          <div className="statsContainer">
            <div className="iconContainer">
              <img
                className="statsIcon"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7dd702d9-2cf1-40a6-a4a8-e3ce9a2aa249/de82i78-c5cb3870-e6c9-4974-9817-466556af806e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkZDcwMmQ5LTJjZjEtNDBhNi1hNGE4LWUzY2U5YTJhYTI0OVwvZGU4Mmk3OC1jNWNiMzg3MC1lNmM5LTQ5NzQtOTgxNy00NjY1NTZhZjgwNmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rpjftn6SXR3tU8QA5r0rK-5Fx6IAarwc_fpe9vDQLRc"
                alt=""
              />
            </div>
            <div className="textContainer">
              <div className="statsTitle">
                <h1 className="statsCharacter">Pyro Character</h1>
              </div>
              <div className="statsDescription">
                <p className="Text">
                  Pyro usually have cheerful, positive and hyperactive
                  personalities
                </p>
              </div>
            </div>
          </div>

          <div className="statsContainer">
            <div className="iconContainer">
              <img
                className="statsIcon"
                src="https://upload-static.hoyoverse.com/hoyolab-wiki/2023/05/06/26884327/5968bc73f375ee1e3704302541c83c7f_3406818708418236612.png"
                alt=""
              />
            </div>
            <div className="textContainer">
              <div className="statsTitle">
                <h1 className="statsCharacter">Liyue</h1>
              </div>
              <div className="statsDescription">
                <p>A city with a thriving port located east of Teyvat.</p>
              </div>
            </div>
          </div>

          <div className="statsContainer">
            <div className="iconContainer">
              <img
                className="statsIcon"
                src="https://upload-os-bbs.hoyolab.com/upload/2021/10/29/1015537/341516b86735081f03d381a9dbae73ab_2908174547209480374.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70"
                alt=""
              />
            </div>
            <div className="textContainer">
              <div className="statsTitle">
                <h1 className="statsCharacter">Hu TaoGod</h1>
              </div>
              <div className="statsDescription">
                <p>She is the 77.ᵃ director of El Camino Funeral Home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artwork;
