import { useState,useEffect,useRef } from "react";
import Background from "./assets/bg-picture.jpg"

export default function Weather() {

    return (

        <>
        <div className="w-[100vw] h-[100vh] bg-red-300  " style={{backgroundImage:Background}}></div>
        </>
    )
}







{/* 814b2831296e18e91b491c10618ddef7 */ }
{/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */ }