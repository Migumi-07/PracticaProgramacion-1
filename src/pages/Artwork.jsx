import Header from "../components/Header";
import Images from "../components/Images";
import("../css/Artwork.css");

function Artwork(props) {
  return (
    <>
      <Header />
      <main className="container">
        <section className="photosContainer">
          <div className="SearchCont">
            <div className="SearchCont">
              <h1>
                <div className="search-wrapper">
                  <input
                    className="SearchCosito"
                    type="text"
                    placeholder="Buscar"
                  />
                </div>
              </h1>
            </div>
          </div>
          <Images />
        </section>
      </main>
    </>
  );
}

export default Artwork;
