import RestaurantCard from "../RestaurantCard/RestaurantCards";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import { Link } from "react-router-dom";
import { useRestaurantsList } from "../../utils/useRestaurantsList";
import useUserStatus from "../../utils/useUserStatus";
import { withPromotedLabel } from "../RestaurantCard/RestaurantCards";
import { useContext } from "react";
import Profile from "../../utils/Profile";
const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
const Body = () => {
  // Use the custom hook to get restaurant data, filtered data, and functions
  const {
    restaurantList,
    filteredResList,
    loading,
    error,
    searchTxt,
    setsSearchTxt,
    filterByRating,
    filterBySearch,
  } = useRestaurantsList();

  //   window.onscroll = function () {
  //     const windowHeight = window?.innerHeight;
  //     const totalHeight = document?.documentElement?.scrollHeight;
  //     const scrollHieght = window?.pageYOffset;
  //     const currScroll = windowHeight + scrollHieght;
  //     if (currScroll >= totalHeight - 1) {
  //       setIsEndOfPageReached(true);
  //     }
  //   };

  const { setUserName } = useContext(Profile);
  const isUserOnline = useUserStatus();
  console.log(restaurantList);
  if (!isUserOnline) return <h1>Please check Connectivity</h1>;

  if (loading) {
    return <ShimmerCard shimmerLength={10} />; // Show shimmer while loading
  }

  if (error) {
    return <div>Error loading restaurants: {error.message}</div>; // Show error message
  }

  return (
    <div className="body">
      <div className="filters flex my-2 items-center gap-2 m-10 mb-20 mt-5">
        <button
          className="button"
          onClick={() => filterByRating(4.3)} // Use the custom hook's filtering function
        >
          Top Rated Restaurants
        </button>

        <div className="search-container ml-7">
          <input
            className="border border-slate-950 "
            type="text"
            value={searchTxt}
            onChange={(e) => {
              setsSearchTxt(e.target.value);
              setUserName(e?.target?.value);
            }} // Capture search text
          ></input>
          <button
            className="button ml-4 h-10"
            onClick={() => filterBySearch(searchTxt)} // Use the custom hook's search function
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap gap-5 mx-10">
        {filteredResList.map((e) => (
          <Link
            to={`/restaurants/${e?.card?.card?.info?.id}`}
            key={e?.card?.card?.info?.id}
          >
            {e?.card?.card?.info?.promoted ? (
              <RestaurantCardWithPromotedLabel resData={e?.card?.card?.info} />
            ) : (
              <RestaurantCard resData={e?.card?.card?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
