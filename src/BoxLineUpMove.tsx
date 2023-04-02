import React from "react";
import withContext from "./withContext";
import { useStyle } from "./hooks";
import { BLUMProps } from "./typing";


const BoxLineUpMove = (props : BLUMProps) => {
    const {parentStyle, barStyle, lineStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()} onClick = {() => props.onClick()}>
            <div style = {barStyle()}></div>
            <div style = {lineStyle()}></div>
        </div>
    )
}

export default withContext(BoxLineUpMove)