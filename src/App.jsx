import React, { useState } from 'react';
import "./style.css"

const App = () => {
  const images = [
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-zingeratha_variant_0-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-rice-and-spice_variant_0-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/43aa4970-ffaa-11ed-9c55-3705f003c528-3pc-Chikcen_variant_0-2023-05-31115706.png",
    "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch+drink-2023-05-31115706.png"

  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="gallery-container">
      <div className="image-box">
        <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} />
        <div className="arrows">
          <span className="arrow" onClick={handlePrev}>{'<'}</span>
          <span className="arrow" onClick={handleNext}>{'>'}</span>
        </div>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={index === selectedImageIndex ? 'active' : ''}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default App;
