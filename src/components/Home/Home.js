import banner from "../images/banner.webp";
import Carousel from "react-bootstrap/Carousel";
import banner2 from "../images/banner2.webp";
import banner3 from "../images/banner3.webp";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="Slide 1" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Slide 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
