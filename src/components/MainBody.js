import RestaurntCard from "./RestaurntCard";
import resList from "../utils/mockdata";
// not using keys (not acceptable) <<<< index as key <<<<<<<< unique id(best pratice )
const MainBody = () => {
    return (
      <div className="body">
        <div className="bodySearch">Search</div>
        <div className="rest-Container">
          {
            resList.map((restaurnt,index) => (
              <RestaurntCard key ={restaurnt.info.id} resData={restaurnt}/>
            ))
          }
        </div>
      </div>
    );
  };

  export default MainBody;