import { getGifs } from "../helpers";


export const GifGrid = ({category}) => {
  
getGifs(category);

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
