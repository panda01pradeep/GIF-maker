import Random from "./components/Random"
import Tag from "./components/Tag"
// import {AppContext} from "./gif/AppContext";


export default function app(){
  return(
    // mt - margin top, lg-large, p-padding py-padding along y-axis
    <div className = "w-full h-screen flex flex-col background relative overflow-x-hidden items-center"> 

      <h1 className = "bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">

        RANDOM GIFS</h1>
      <div className = "flex flex-col w-full items-center gap-y-10">

        <Random />
        <Tag/>
        
      </div>
    </div>
  );  
}   