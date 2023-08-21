import Carousel from 'react-bootstrap/Carousel';
// import "./carousel.css"

function CarouselContact2() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img src="/contact/branchTwo.jpg" className="img-fluid p-0 m-0"></img>
       
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="/contact/branchTwo-Two.jpg" className="img-fluid p-0 m-0"></img>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="/contact/branchTwo-Three.jpg" className="img-fluid p-0 m-0"></img>
       
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselContact2;