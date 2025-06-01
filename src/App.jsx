
import Show from "./Show";
import Form from "./Form"
function App() {


  return (
    <>
      <div className="h-[100vh]  w-[100vw] flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white pb-10 max-md:w-[100%] w-[500px] rounded-4xl shadow-lg flex flex-col  items-center gap-5">
          <Form />
          <Show />
        </div>
      </div>

    </>
  )
}

export default App
//  const KEY = "814b2831296e18e91b491c10618ddef7";
// const URL = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={KEY}";