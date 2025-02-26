import Carousel from 'react-bootstrap/Carousel';

const bannerStyles = {
  carousel: {
    width: '100%',
    maxHeight: '500px', // Adjust height as per requirement
  },
  image: {
    height: '500px', // Adjust height
    objectFit: 'cover', // Ensures image covers the area without distortion
    width: '100%',
  },
};

function ImageCarousel() {
  return (
    <Carousel data-bs-theme="dark" style={bannerStyles.carousel}>
      <Carousel.Item>
        <img
          style={bannerStyles.image}
          src=" https://res.cloudinary.com/dsoppcx77/image/upload/v1740541266/Mekh-Mata/ukuay8sr86ioq3msxdmo.jpg"
         
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={bannerStyles.image}
          src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740541265/Mekh-Mata/dgk6stguso9sdxizsc9z.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={bannerStyles.image}
          src="https://res.cloudinary.com/dsoppcx77/image/upload/v1740541266/Mekh-Mata/sqvpl3xy4hkhbylybrbr.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
