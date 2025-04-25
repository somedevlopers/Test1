import React from "react"
import { useCatImage} from "../hooks"

export const CatImage = ({fact})=> {
    const {imageURL} = useCatImage({fact})

    return (
        <>
        {imageURL && <img className="cat_img" src={imageURL} alt={`Image extracted from an API of cats using the three first words of "${fact}" as a text`}/>}
        </>
    )
}