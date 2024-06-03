import React, { useEffect, useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation, useNavigate } from 'react-router-dom';

function ImageInput() {
  const [selectedImage, setSelectedImage] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    location.state["selectedImageUrl"] = selectedImage
    navigate("/PatientDashboard", location)
  }, [selectedImage])
  

  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    document.getElementById('imageInput').click();
  };

  useEffect(() => {
    handleButtonClick()
  }, [])
  

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="imageInput"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <div style={{ position: "absolute", bottom: "0", right: "10px", fontSize: "25px", zIndex: "99", cursor: "pointer" }}>
        <FontAwesomeIcon  icon={faPenToSquare}  onClick={handleButtonClick}/>  
      </div>

      {selectedImage && (
        <div >
          <img src={selectedImage} alt="Selected" width="150px" height="150px" style={{ position: "absolute", borderRadius: "50%", objectFit: "cover", objectPosition: "" }} />
        </div>
      )}
    </div>
  );
}

export default ImageInput;
