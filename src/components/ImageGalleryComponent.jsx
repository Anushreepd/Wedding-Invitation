import React, { useState } from "react";

const ImageGalleryComponent = () => {
  // List of local images
  const images = [
    { src: "/images/firstmeet.png", alt: "Image 1" },
    { src: "/images/Engagement.jpeg", alt: "Image 2" },
    { src: "/images/Wedding.jpeg", alt: "Image 3" },
  ];

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(images[1].src);

  return (
    <div>
      <h3><b>Memories</b></h3>
      {/* Display the selected image */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={selectedImage}
          alt="Selected"
          style={{ width: "100%", maxWidth: "350px", height: "auto", border: "2px solid black", borderRadius: "10px"}}
        />
      </div>

      {/* Display thumbnails */}
      <div style={{ display:"grid",gap: "10px", justifyContent: "center", gridTemplateColumns: "auto auto auto auto",}}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
              width: "80px",
              height: "auto",
              cursor: "pointer",
              border: selectedImage === image.src ? "2px solid blue" : "none",
              borderRadius: "10px",
            }}
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryComponent;