import { Search, MapPin } from "lucide-react";
import './App.css';
import Show from "./Show";

function App() {


  return (
    <>
      <div className="h-[100vh]  w-[100vw] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white pb-10 max-md:w-[100%] w-[500px] rounded-4xl shadow-lg flex flex-col  items-center gap-5">
          <form className=" w-full h-[100px]  relative p-4 flex justify-center items-center gap-6" >
            <label htmlFor="inp" className="absolute max-sm:left-1  left-7" ><MapPin /></label>
            <input type="text" id="inp" placeholder='Enter City Name' className='pl-7 border-b-2 border-black w-[80%] py-2 focus:outline-0 text-[22px] uppercase ' />
            <button type='submit' className='w-[55px] h-[55px] rounded-[50%]  bg-blue-100 hover:bg-black hover:text-white transition duration-150 flex justify-center items-center ' ><Search size={27} strokeWidth={3} /></button>
          </form>
          <Show />
        </div>
      </div>

    </>
  )
}

export default App
//  const KEY = "814b2831296e18e91b491c10618ddef7";
// const URL = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={KEY}";