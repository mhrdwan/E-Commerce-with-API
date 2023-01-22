import Carousel from 'react-bootstrap/Carousel';
import { Contex } from './MyContex';
import { useContext } from "react"

function Carausel() {
    const {banner} = useContext(Contex)
  return (
    <Carousel fade>
      <Carousel.Item>
      {banner.map((b)=>{
            return(
                <img
          className="d-block w-100"
          src={b.image}
          alt="First slide"
        />
            )
        })}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carausel;