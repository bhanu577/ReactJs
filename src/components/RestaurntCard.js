import { CDN_URL } from "../utils/constants";
const RestaurntCard = (props) => {
  const { resData } = props; // Destructing the object arguments from pops that is being sent by the compenent
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
  } = resData?.info;
  return (
    <div className="restroCard">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="restroName">{name}</h3>
      <h5>{cuisines}</h5>
      <h5>{costForTwo}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRatingString} stars</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurntCard;
