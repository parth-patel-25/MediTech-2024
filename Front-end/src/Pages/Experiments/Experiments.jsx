import React, { useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ImageInput() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    document.getElementById('imageInput').click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="imageInput"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <button onClick={handleButtonClick}>Select Image</button>
      <div className="editbtnMenu">
        <FontAwesomeIcon icon={faPenToSquare}  onClick={handleButtonClick}/>  
      </div>

      {selectedImage && (
        <div>
          <p>Selected Image:</p>
          <img src={selectedImage} alt="Selected" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

export default ImageInput;
