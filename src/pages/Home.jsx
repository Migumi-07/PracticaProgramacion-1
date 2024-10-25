import "../css/Home.css";
import Header from "../components/Header";
import Artwork from "../components/Artwork";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="overlay"></div>
      <div className="homeContainer">
        <Header />

        <div className="sliderContainer">
          <div class="slider">
            <h1 class="name">
              <span className="spanColor">Hu</span> Tao
            </h1>
            <p className="description">
              Hu Tao is the 77th ᵃ director of El Camino Funeral Home, she is in
              charge of all Liyue's funeral affairs.She invests all her energy
              in making the client's lastfarewell as solemn as possible and in
              protecting the balance between yin and yang.
            </p>

            <p className="readMore">
              <a href="/">Read More</a>
            </p>
          </div>
        </div>
        <Outlet />
        <Artwork />
      </div>
    </>
  );
}
export default Home;
