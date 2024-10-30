import { useEffect, useState } from "react";

function DigitalClock () {
    const [hours,setHours] = useState(new Date().getHours());
    const [minutes,setMinutes] = useState(new Date().getMinutes());
    const [seconds,setSeconds] = useState(new Date().getSeconds());

    const handleTime = () => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
    }


    useEffect(() => {
        const interval = setInterval(handleTime, 1000); /*hna une fois atrendra lcomponent awel mera ayt7et
         var smitou interval kaykhedem handleTime kula tanya w sf mashy kula mera trendra lcomponent
          aybda yt7et had lvar ay7et flmera lwela w yb9a khedam kula second kaykhedem handletime*/
        console.log("1")
        return () => clearInterval(interval);
    },[])

    return(
        <div className="time">
            <p  className="hours">{hours}</p>
            <p className="minutes">{minutes}</p>
            <p className="seconds">{seconds}</p>
        </div>
    );

}
export default DigitalClock;