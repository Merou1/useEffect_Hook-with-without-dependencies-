import { useEffect, useState } from "react";


function UseEffect () {

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    useEffect(() => { //useEffect(fct,arr if needed)
        window.addEventListener("resize",handleResize)
        console.log("Event Listener Added") 

        return(
            window.removeEventListener("resize",handleResize)//listener kayt7et mnen kaytmounta lcomponent w return f useeffect katkun dyal lcleaning  kangulu mnin mayb9ash lcomponent mounte heyed ta evtlistener bash men bead maytrach shy chevauchement...
        );
    },[]) 

return(
    <>
    <p>Window width : {width} </p>
    <p>Window height : {height} </p>
    </>

)
}
export default UseEffect;