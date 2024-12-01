// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function DigitalClock(){

    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    },[])

    function formatTime(){
        let hour=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();

        const meridium=hour >= 12? "PM":"AM";

        hour= hour%12 || 12;

        return `${padZero(hour)}:${padZero(min)}:${padZero(sec)} ${meridium}`
    }

    function padZero(number){
        return (number < 10? "0":"") +number
    }
    return(
        <div className="container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock;