import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const CustomImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div style={{ position: 'relative' }}>
      <SimpleImageSlider
        width="100%"
        height="100%"
        images={images}
        showBullets={true}
        showNavs={true}
        currentIndex={currentImage}
        onChange={handleImageChange}
        style={{
          '.image-slide img': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          },
        }}
      />
      {images && images[currentImage] && (
        <p style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0, 0, 0, 0.5)', padding: '4px 8px', color: '#fff' }}>
          Original Width: {images[currentImage].originalWidth}px
        </p>
      )}
    </div>
  );
};

export default CustomImageSlider;
