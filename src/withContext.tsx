import React from "react";
import { useAnimatedScale, useDimension } from "./hooks";
import { BLUMProps } from "./typing";
const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        console.log("W1, H1", w, h)
        const newProps  : BLUMProps= {
            w, 
            h, 
            scale, 
            onClick
        }
        const mainProps = {
            ...props, 
            ...newProps
        }
        console.log("MAIN_PROPS", mainProps)
        return (
            <MainComponent {...mainProps}></MainComponent>
        )
    }
}

export default withContext