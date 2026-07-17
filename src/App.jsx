import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./App.css";

const IMAGS = [
  {
    id: 1,
    title: "Mountain Landscape",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Beautiful mountain landscape",
  },
  {
    id: 2,
    title: "Beach Sunset",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Sunset over the beach",
  },
  {
    id: 3,
    title: "Forest Path",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    alt: "Green forest pathway",
  },
  {
    id: 4,
    title: "City Skyline",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    alt: "Modern city skyline",
  },
  {
    id: 5,
    title: "Snowy Mountains",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    alt: "Snow-covered mountains",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef([]);

  const prevImage = () => {
    setCurrentIndex((perv) => (perv - 1 < 0 ? 0 : perv - 1));
  };

  const nextImage = () => {
    setCurrentIndex((perv) =>
      perv + 1 >= IMAGS.length ? IMAGS.length - 1 : perv + 1
    );
  };

  useEffect(() => {
    imageRef.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, [currentIndex]);

  return (
    <div className="container">
      <h1>Image Gallery</h1>

      <div className="carousel">
        <button onClick={prevImage}>◀</button>

        <div className="allimg">
          {IMAGS.map((image, index) => (
            <img
              key={image.id}
              src={image.image}
              alt={image.alt}
              className="image"
              ref={(el) => (imageRef.current[index] = el)}
            />
          ))}
        </div>

        <button onClick={nextImage}>▶</button>
      </div>
    </div>
  );
}

export default App;
