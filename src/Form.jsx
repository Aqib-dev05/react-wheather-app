import { Search, MapPin } from "lucide-react";

export default function Form({ inpVal, handleInp, print }) {

    return (
        <>
            <form onSubmit={print} className=" w-full h-[100px] mt-2  relative p-4 flex justify-center items-center gap-6" >
                <label htmlFor="inp" className="absolute max-sm:left-1  left-7" ><MapPin /></label>
                <input required onChange={handleInp} value={inpVal} type="text" id="inp" placeholder='Enter City Name' className='pl-8 border-b-2 border-black w-[80%] py-2 focus:outline-0 text-[22px] uppercase ' />
                <button  className='w-[55px] h-[55px] rounded-[50%]  bg-blue-100 hover:bg-black hover:text-white transition duration-150 flex justify-center items-center ' ><Search size={27} strokeWidth={3} /></button>
            </form>

        </>
    )
}