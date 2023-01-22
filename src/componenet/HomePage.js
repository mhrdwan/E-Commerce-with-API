import { useContext } from "react";
import { Contex } from "./MyContex";

const HomePage = () => {
    const {product} = useContext(Contex)
    
    return (
        <>
        <h1>ini home page</h1>
        {product.map((p)=>{
            return(
                <p key={p.id}>{p.brand}</p>
            )
        })}
        </>
    )
}

export default HomePage;