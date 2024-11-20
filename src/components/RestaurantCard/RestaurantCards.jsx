import { RESTAURANT_IMG_URL } from "../../utils/constant";
const RestaurantCard = ({ resData }) => {
  const { cuisines, costForTwo, sla, avgRating, name, cloudinaryImageId } =
    resData;

  return (
    <div className="res-card bg-zinc-100 w-48 rounded-lg flex flex-col items-center p-2 h-[300px] pt-8">
      <h3 className="font-bold text-center mb-2">{name}</h3>
      <img
        className="res-logo w-[200px] h-[100px] rounded-lg"
        alt="res-logo"
        src={RESTAURANT_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-normal">{cuisines.slice(0, 2).join(",")}</h3>
      <h4>{avgRating}stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4 className="font-thin">{costForTwo}</h4>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className="absolute bg-slate-800 rounded-lg text-white px-4 py-1">
          Promoted
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
