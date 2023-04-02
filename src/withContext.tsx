import React from "react";
import { useAnimatedScale, useDimension } from "./hooks";
import { BLUMProps } from "./typing";
const withContext = (MainComponent : React.FC<any>) => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const newProps  : BLUMProps= {
            w, 
            h, 
            scale, 
            onClick
        }
        const mainProps = {
            ...props, 
            newProps
        }
        return (
            <MainComponent {...mainProps}></MainComponent>
        )
    }
}

export default withContext