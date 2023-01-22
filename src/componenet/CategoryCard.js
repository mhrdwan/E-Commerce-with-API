import { Contex } from "./MyContex"
import { useContext } from "react"

const CategoryCard = ()=>{
    const {category} = useContext(Contex)
    console.log(category)
    console.log(category)
    return(
       <>
        <h1>ini category</h1>
       {category.map((c)=>{
        return(
            <img key={c.id} src={c.image} alt="" />
        )
       })}
       </>
    )

}

export default CategoryCard;