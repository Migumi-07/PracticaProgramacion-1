import Masonry from "react-masonry-css";
import React from "react";
import("../css/Artwork.css");

function Images(props) {
  const f = [
    "https://i.pinimg.com/736x/06/d2/6a/06d26ad6cea67c58a6d4aaa6261436c1.jpg",
    "https://i.pinimg.com/564x/cb/e2/9c/cbe29ca30882aef5d4c6e74c4a85cfa8.jpg",
    "https://i.pinimg.com/564x/55/60/b6/5560b67e427f1ffd8f3fbe7425f436e4.jpg",
    "https://i.pinimg.com/564x/40/6e/40/406e40aea64cce81bab9753ba35f8c84.jpg",
    "https://i.pinimg.com/564x/dd/b7/50/ddb7500c8a56755b65388a3e6ba2c404.jpg",
    "https://i.pinimg.com/564x/98/7e/fb/987efbd975e8252232def6e8e0205262.jpg",
    "https://i.pinimg.com/736x/06/d2/6a/06d26ad6cea67c58a6d4aaa6261436c1.jpg",
    "https://i.pinimg.com/564x/cb/e2/9c/cbe29ca30882aef5d4c6e74c4a85cfa8.jpg",
    "https://i.pinimg.com/736x/fc/37/06/fc3706e16b9aac0a43d95e47ecfb20e9.jpg",
    "https://i.pinimg.com/564x/40/6e/40/406e40aea64cce81bab9753ba35f8c84.jpg",
    "https://i.pinimg.com/564x/dd/b7/50/ddb7500c8a56755b65388a3e6ba2c404.jpg",
    "https://i.pinimg.com/564x/98/7e/fb/987efbd975e8252232def6e8e0205262.jpg",
    "https://i.pinimg.com/736x/06/d2/6a/06d26ad6cea67c58a6d4aaa6261436c1.jpg",
    "https://i.pinimg.com/564x/cb/e2/9c/cbe29ca30882aef5d4c6e74c4a85cfa8.jpg",
    "https://i.pinimg.com/736x/fc/37/06/fc3706e16b9aac0a43d95e47ecfb20e9.jpg",
    "https://i.pinimg.com/564x/40/6e/40/406e40aea64cce81bab9753ba35f8c84.jpg",
    "https://i.pinimg.com/564x/dd/b7/50/ddb7500c8a56755b65388a3e6ba2c404.jpg",
    "https://i.pinimg.com/564x/98/7e/fb/987efbd975e8252232def6e8e0205262.jpg",
    "https://i.pinimg.com/736x/06/d2/6a/06d26ad6cea67c58a6d4aaa6261436c1.jpg",
    "https://i.pinimg.com/564x/cb/e2/9c/cbe29ca30882aef5d4c6e74c4a85cfa8.jpg",
    "https://i.pinimg.com/736x/fc/37/06/fc3706e16b9aac0a43d95e47ecfb20e9.jpg",
    "https://i.pinimg.com/564x/40/6e/40/406e40aea64cce81bab9753ba35f8c84.jpg",
    "https://i.pinimg.com/564x/dd/b7/50/ddb7500c8a56755b65388a3e6ba2c404.jpg",
    "https://i.pinimg.com/564x/98/7e/fb/987efbd975e8252232def6e8e0205262.jpg",
  ];

  // Coloca el objeto de columnas de breakpoint fuera de cualquier función
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const downloadImage = (src) => {
    // Crear un enlace temporal
    const link = document.createElement("a");
    link.href = src;
    link.download = `image_${Date.now()}.jpg`; // Nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="App">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {f.map((src, index) => (
         <div key={index} className="image-container">
             <img src={src} alt={`Imagen ${index + 1}`} />
            <button className="download-button" onClick={() => downloadImage(src)}>
            Download
            </button>
            </div>
                ))}
        </Masonry>
      </div>
      <img src={props.image} alt="" />
      <h1>{props.nombre}</h1>
    </>
  );
}

export default Images;
