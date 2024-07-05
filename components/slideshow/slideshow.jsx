"use client";

import { useEffect, useState } from "react";
import classes from "./slideshow.module.css";

import cat01 from "@/asset/cats/cat01.jpg";
// import cat02 from "@/asset/cats/cat02.jfif";
import cat03 from "@/asset/cats/cat03.jpg";
import cat04 from "@/asset/cats/cat04.jpg";
import cat05 from "@/asset/cats/cat05.jpg";
import cat06 from "@/asset/cats/cat06.jpg";
// import cat07 from "@/asset/cats/cat07.jfif";
import cat08 from "@/asset/cats/cat08.jpg";
import cat09 from "@/asset/cats/cat09.jpg";
import Image from "next/image";

const images = [
  {
    image: cat01,
    alt: "white-cat-meme",
  },
  // {
  //   image: cat02,
  //   alt: "cat-eating-grass",
  // },
  {
    image: cat03,
    alt: "call-center-cat",
  },
  {
    image: cat04,
    alt: "frown-cat",
  },
  {
    image: cat05,
    alt: "cat-gagging-out-meme",
  },
  {
    image: cat06,
    alt: "pop-cat-meme",
  },
  // {
  //   image: cat07,
  //   alt: "orange-cat",
  // },
  {
    image: cat08,
    alt: "super-tired-cat",
  },
  {
    image: cat09,
    alt: "anti-vegetarian-cat",
  },
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={index === currentImageIndex ? classes.active : undefined}
        />
      ))}
    </div>
  );
};

export default Slideshow;
