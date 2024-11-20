import RestaurantCategoryMenu from "../RestaurantCategoryMenu/RestaurantCategoryMenu";
import { useEffect, useState } from "react";

const RestaurantCategory = ({ resData, setIndex, showMenu }) => {
  const { itemCards } = resData?.card?.card;

  const handleMenuToggle = () => {
    setIndex();
  };
  return (
    <div className="bg-slate-200 items-center mb-5 py-4 px-3 border rounded-lg">
      {/* Header  */}
      <div className="flex justify-between items-center">
        <div className="font-bold">
          {resData?.card?.card?.title}
          {`(${itemCards.length})`}
        </div>

        <span
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100"
          onClick={() => {
            handleMenuToggle();
          }}
        >
          &#x2193;
        </span>
      </div>
      {/* Content */}
      {showMenu && <RestaurantCategoryMenu menuList={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
