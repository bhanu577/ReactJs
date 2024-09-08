import RestaurntCard from "./RestaurntCard";
import Shimmer from "./shimmer";
import { useState, useEffect } from "react";

const MainBody = () => {
  const [listRestaurnt, setListRestaurnt] = useState([]);
  const [searchText, setSearchTest] = useState("");
  const [searchfilteredData, setSearchFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9911238&lng=79.53153979999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListRestaurnt(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setSearchFilteredData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listRestaurnt.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter-btn">
        <input
          className="input-body"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchTest(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const searchResult = listRestaurnt.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setSearchFilteredData(searchResult);
          }}
        >
          search
        </button>
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
        {searchfilteredData.map((restaurnt, index) => (
          <RestaurntCard key={restaurnt.info.id} resData={restaurnt} /> //not using key is not acceptable either use key if back end send uniquie id(recommended) >> or else use index which is only used when backend does not sends (not recommended)
        ))}
      </div>
    </div>
  );
};

export default MainBody;
