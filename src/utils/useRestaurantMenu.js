import { useEffect, useState } from "react";
import { RESTAURANTS_CARD_MENU_API } from "./constant";

const useRestaurantMenu = (id) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const PfetchData = async () => {
      try {
        const response = await fetch(
          RESTAURANTS_CARD_MENU_API +
            id?.resId +
            "&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER"
        );

        const data = await response.json();

        setInfo(data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return info;
};

export default useRestaurantMenu;
