import { useEffect, useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green")

    useEffect(() => {
        document.title=count+" "+color

    }) //everytime the component is rendered
    useEffect(() => {
        document.title=count+" "+color

    },[count,color]) //when mounted +  if color or counter change values
    useEffect(() => {
        document.title=count+" "+color

    },[]) //only when the component  mounted

    const Add = () => {
        setCount(c => c+1)
    }
    const Substract = () => {
        setCount(c => c-1)
    }
    const ChangeColor = () => {
        color ==="green" ? setColor("red") : setColor("green")
    }

    return(
        <>
            <p style={{color : color}}>Count : {count}</p>
            <button onClick={Add}>Add</button>
            <button onClick={Substract}>Substract</button>
            <button onClick={ChangeColor}>Change Color</button>
        </>
    );
}
export default Counter;