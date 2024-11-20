import { useState, useEffect } from "react";

import { RESTAURANTS_API } from "./constant";
export const useRestaurantsList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [loading, setLoading] = useState(true); // To manage shimmer loading state
  const [error, setError] = useState(null); // Error handling
  const [searchTxt, setSearchTxt] = useState("");

  // Fetch the restaurant data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(RESTAURANTS_API);
        const data = await response.json();
        const newData = data?.data?.cards.slice(3);

        setRestaurantList(newData);
        setFilteredResList(newData); // Initially show the full list
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err); // Set error state
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to filter restaurants by rating
  const filterByRating = (minRating) => {
    const filteredList = restaurantList.filter((e) => {
      return e?.card?.card?.info?.avgRating > minRating;
    });
    setFilteredResList(filteredList);
  };

  // Function to filter restaurants by search text
  const filterBySearch = (searchTxt) => {
    const filteredRestaurants = restaurantList.filter((e) => {
      return e?.card?.card?.info?.name
        ?.toLowerCase()
        ?.includes(searchTxt.toLowerCase());
    });

    setFilteredResList(
      !!filteredRestaurants?.length ? filteredRestaurants : restaurantList
    );
  };

  //Function to setSearch text
  const setsSearchTxt = (e) => {
    setSearchTxt(e);
  };
  return {
    restaurantList,
    filteredResList,
    loading,
    error,
    filterByRating,
    filterBySearch,
    setsSearchTxt,
    searchTxt,
  };
};
