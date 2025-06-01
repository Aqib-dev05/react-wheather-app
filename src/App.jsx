import { useState } from "react";
import Show from "./Show";
import Form from "./Form"
function App() {
  const KEY = "814b2831296e18e91b491c10618ddef7";
  const URL = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={KEY}&units=metric";

  const [city, setCity] = useState("");
  const[show,setShow]=useState(false);

  const [weather, setWeather] = useState({
    humidity: "",
    temp: "",
    speed: "",
    description: ""

  });


  function handleInput(e) {
    setCity(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    fetch(URL.replace("{city}", city).replace("{KEY}", KEY))
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((data) => {
          
        setWeather({
          humidity: data.main.humidity,
          temp: data.main.temp,
          speed: data.wind.speed,
          description: data.weather[0].description
        });
        setShow(true);
        setCity("");
      })
      .catch((error) => {
        setShow(false);
        console.error("Error fetching weather data:", error);
      });
  }


  return (
    <>
      <div className="h-[100vh]  w-[100vw] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white overflow-hidden pb-10 max-md:w-[100%] w-[500px] rounded-4xl shadow-lg flex flex-col  items-center gap-5">
          <Form inpVal={city} print={handleClick} handleInp={handleInput} />
          
         {show && (  <Show data={weather} />)}
        </div>
      </div>

    </>
  )
}

export default App
