import RestaurntCard from "./RestaurntCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const MainBody = () => {
  const [listRestaurnt, setListRestaurnt] = useState(resList);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="top-rated"
          onClick={() => {
            const listTopRated = listRestaurnt.filter(
              (res) => res.info.avgRating >= 4
            );
            setListRestaurnt(listTopRated);
          }}
        >
          Top Rated Restaurnt
        </button>
      </div>
      <div className="rest-Container">
        {listRestaurnt.map((restaurnt, index) => (
          <RestaurntCard key={restaurnt.info.id} resData={restaurnt} /> //not using key is not acceptable either use key if back end send uniquie id(recommended) >> or else use index which is only used when backend does not sends (not recommended)
        ))}
      </div>
    </div>
  );
};

export default MainBody;
