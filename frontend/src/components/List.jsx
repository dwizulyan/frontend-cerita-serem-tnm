import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

const List = () => {
  return (
    <div className="w-full min-h-screen bg-base-100 p-5 lg:p-20 flex flex-col items-center">
      <h1 className="text-accent text-3xl lg:text-6xl font-bold mb-5">
        List Cerita Horor
      </h1>
      <div className="w-full flex justify-center flex-col">
        <div className="mb-5 w-full lg:w-[50%] p-5 rounded-xl flex items-center justify-between gap-2 bg-primary text-xl placeholder:text-accent">
          <input type="text" placeholder="Cari Cerita" className="bg-[transparent] text-accent focus:outline-none h-full"/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-accent"/>
        </div>
        <div className="lg:grid gap-3 lg:grid-cols-4 flex flex-col gap-2">
          {[...Array(8)].map((x,i)=>{
            return <ListCard key={i}/>
          })}
        </div>
      </div>
    </div>
  );
};

const ListCard = () => {
  return (
    <div className="w-full bg-primary rounded-xl p-5 flex-col flex gap-3">
      <h1 className="text-3xl text-accent font-bold">Ospek BEM</h1>
      <p className="text-sm text-accent font-medium p-2 rounded-lg w-max bg-base-100">
        19 Okt 2023
      </p>
      <Rating rating={5} />
      <button className="p-2 mt-2 text-primary bg-accent rounded-lg px-10 font-bold w-max">
        Tonton
      </button>
    </div>
  );
};

const Rating = ({ rating }) => {
  const count = [];
  count.length = rating;
  console.log(count.length);
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((x, i) => {
        return (
          <FontAwesomeIcon key={i} icon={faStar} className="text-accent" />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default List;
