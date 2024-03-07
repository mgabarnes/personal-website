import React from 'react';
import './PhotoGallery.css'; // Link to your CSS file
import photo1 from "../assets/photogallery/photo1.jpg";
import photo2 from "../assets/photogallery/photo2.jpg";
import photo3 from "../assets/photogallery/photo3.jpg";

function PhotoGallery() {
  return (
    <div className="photo-gallery">
      { /* Example photos, replace these with your own */ }
      <div className="photo"><img src={photo1} alt="Description 1" /></div>
      <div className="photo"><img src={photo2} alt="Description 2" /></div>
      <div className="photo"><img src={photo3} alt="Description 3" /></div>
      {/* // Add more photos as needed */}
    </div>
  );
}

export default PhotoGallery;
