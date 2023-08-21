import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Gallery.css";
import Modal from '../Modal';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchServices();
  }, []);


  const [ isOpen, setIsOpen] = useState(false)
  return (
    <section className='gallerySection'>
    <div className="container text-center">
      {/* <h2 className="text-center">Chic Station Gallery</h2> */}
      <div >
       
        {images.map(image => (
          <div key={image._id} className='d-inline m-0'>
          
            {/* <button onClick={() => setIsOpen(true)}> */}
              <img src={image.avatar} alt="img" className='gallery' />
            {/* </button> */}

            {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>
               <img src={image.avatar} alt='img'/>
            </Modal> */}
          </div>
        ))}
        
      </div>
    </div>
    </section>
  );
};

export default Gallery;
