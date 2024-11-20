import { useParams } from "react-router-dom";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";
import { useState } from "react";

const RestaurantsMenuCard = () => {
  const [index, setIndex] = useState(null);
  const id = useParams();

  const restaurantMenu = useRestaurantMenu(id);

  if (restaurantMenu?.length === 0) return <ShimmerCard />;

  const restaurantMenuList = restaurantMenu.cards?.[
    restaurantMenu.cards?.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) => {
    return (
      e?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  const { text } = restaurantMenu?.cards[0]?.card?.card;

  return (
    <div className="card-container bg-slate-100 w-9/12 m-auto p-10 mt-5 mb-5">
      <h3 className="text-center font-bold mb-5">{text}</h3>

      {restaurantMenuList?.map((e, i) => {
        return (
          <RestaurantCategory
            resData={e}
            showMenu={index == i ?? true}
            setIndex={() => {
              // console.log(prevstate, "prev state");
              // console.log(i, "test");
              // setIndex(i);
              setIndex((prevState) => {
                if (prevState !== i) return i;
                return null;
              });
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantsMenuCard;
