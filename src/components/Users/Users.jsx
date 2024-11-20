import { useEffect, useState } from "react";
import ShimmerCard from "../ShimmerCard/ShimmerCard";

const Users = (props) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    // const test = setInterval(() => {
    //   console.log("This will run every 400 milliseconds");
    // }, 100);
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/IsmailKhan7861"
      );
      const data = await response.json();
      console.log(data);
      setUserInfo(data);
    };
    fetchData();
    // return () => {
    //   clearInterval(test);
    // };
  }, []);

  if (userInfo?.length === 0) return <ShimmerCard />;

  const { login, avatar_url } = userInfo;
  return (
    <div className="user-card">
      <h2>Name: {login}</h2>
      <img src={avatar_url} alt="UserImg" />
    </div>
  );
};
export default Users;
