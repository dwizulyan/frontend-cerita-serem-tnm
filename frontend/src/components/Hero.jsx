import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faClover} from "@fortawesome/free-solid-svg-icons";

const Hero = ()=>{
  return (
<div 
      id="hero-page"
      className="p-5 lg:p-20 w-full h-screen flex items-center flex-col justify-center"
    >
      <h1 className="text-6xl lg:text-8xl text-center font-black text-white">TNM Cerita Serem</h1>
      <div className="w-[30%] mt-5 h-[2px] bg-white"></div>
      <p className="text-white text-center mt-5 text-xl lg:text-2xl">
        Kumpulan cerita seram yang diceritakan di <a href="" className="bg-primary text-accent hover:bg-secondary">#malamjumat</a> TnM Live Streaming.</p>
      <FontAwesomeIcon icon={faChevronDown} className="text-white text-xl bg-primary p-3 mt-5 rounded-full"/>
    </div>
  )
}

export default Hero;
