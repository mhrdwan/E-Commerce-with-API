import { Contex } from "./MyContex"
import { useContext } from "react"
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    const {banner} = useContext(Contex)
    
    return(
        <Carousel slide={false}>
        <Carousel.Item>
            {banner.map((b, index)=>{
                return(
                   
              
          <img
            className="d-block w-100"
            src={b.image}
            alt="First slide"
            
          />
            )
            })}
        </Carousel.Item>
        <Carousel.Item>
            {banner.map((b, index)=>{
                return(
                   
              
          <img
            className="d-block w-100"
            src={b.image}
            alt="First slide"
            
          />
            )
            })}
        </Carousel.Item>
        <Carousel.Item>
            {banner.map((b, index)=>{
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
    

export default Banner ;