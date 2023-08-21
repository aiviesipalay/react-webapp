import Carousel from 'react-bootstrap/Carousel';
// import "./carousel.css"

function CarouselContact1() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img src="/contact/branchOne.jpg" className="img-fluid p-0 m-0"></img>
       
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="/contact/branchOne-One.jpg" className="img-fluid p-0 m-0"></img>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="/contact/branchOne.png" className="img-fluid p-0 m-0"></img>
       
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselContact1;