"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileRender = new FileReader();
    fileRender.onload = () => {
      setPickedImage(fileRender.result);
    };
    fileRender.readAsDataURL(file);
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <label htmlFor={name}>{label}</label>
      <div style={{ display: "flex" }}>
        {pickedImage ? (
          <div style={{ width: 100, height: 100, position: "relative" }}>
            <Image
              src={pickedImage}
              alt="pick by user"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : (
          "no image picked yet "
        )}
        <input
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpg, image/gif"
          ref={imageInput}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <button type="button" onClick={handlePickClick} style={{ height: 30 }}>
          choooooose!
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
