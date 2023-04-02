import {useState, useEffect, CSSProperties} from 'react'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    }, [])
    return {
        w, 
        h
    }
}

const sinify = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const size : number = Math.min(w, h) / 8
    const sf : number = sinify(scale)
    const background = 'purple'
    console.log("W, H", w, h)
    return {
        parentStyle() : CSSProperties {
            const left = `${w / 2}px`
            const top = `${h * 0.5 * (1 - sf)}px`
            return {
                position, 
                left, 
                top
            }
        },
        barStyle() : CSSProperties {
            const top : string = '0px'
            const left : string = `${-size / 2}px`
            const width = `${size}px`
            const height = `${size}px`
            return {
                position, 
                top, 
                left, 
                width,
                height,
                background
            }
        },
        lineStyle() : CSSProperties {
            return {
                position, 
                top : `${h / 2}px`,
                left: `${-size / 180}px`,
                width : `${size / 90}px`,
                height: `${size}px`,
                background 
            }
        }
    }
}