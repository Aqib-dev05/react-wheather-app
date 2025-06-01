
import { Wind, Waves } from "lucide-react";
export default function Show({ data }) {
    return (
        <div className="w-full  flex flex-col  items-center gap-5">
            {/* <img className="size-[200px] object-cover " alt="pic" /> */}
            <div className="flex flex-col justify-center items-center" >
                <h1 className="text-[66px] font-bold " >{data.temp}<span className="pl-1 text-[26px] font-medium ">&deg;C</span> </h1>
                <p className="text-[25px] font-semibold" >{data.description}</p>
            </div>
            <div className=" mt-3 w-full flex items-center justify-center gap-8 max-sm:gap-2">
                <div className="flex items-center justify-center gap-1" >
                    <div> <Waves size={40} strokeWidth={3} /></div>
                    <div className="flex flex-col justify-center text-[25px] max-sm:text-[20px] font-bold " > <p>{data.humidity}%</p> <p className="font-medium " >Humidity</p> </div>
                </div>

                <div className="flex items-center justify-center" >
                    <div> <Wind size={40} strokeWidth={3} /></div>
                    <div className="flex flex-col justify-center text-[25px] max-sm:text-[20px] font-bold " > <p>{data.speed} km/h</p> <p className="font-medium " >Wind Speed</p> </div>
                </div>

            </div>

        </div>
    )
}