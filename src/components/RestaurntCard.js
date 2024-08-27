import { CDN_URL } from "../utils/constants";
const RestaurntCard = (props) => {
  const { resData } = props;
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
