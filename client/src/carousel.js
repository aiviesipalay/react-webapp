import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

function MyCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img className="image img-fluid" src="/carouselPic/slider-first.png"></img>
       
        <Carousel.Caption>
            <div className='caption'>
                <h3 className='p-2'>Treat yourself and unwind with us</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="image img-fluid slide" src="/carouselPic/slide-three.jpg" ></img>
        <Carousel.Caption>
            <div className='caption'>
                <h3 className='p-2'>Experience the ultimate relaxation</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="image img-fluid slide" src="/carouselPic/slide-six.png" ></img>
        <Carousel.Caption>
            <div className='caption'>
                <h3 className='p-2'>Quality standard equipment</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="image img-fluid slide" src="/carouselPic/slider-staff.png" ></img>
        <Carousel.Caption>
            <div className='caption'>
                <h3 className='p-2'>Highly trained and professional staff</h3>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;