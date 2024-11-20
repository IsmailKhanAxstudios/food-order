import { useEffect, useState } from "react";

const useUserStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(true);

  useEffect(() => {
    window?.addEventListener("offline", () => {
      setIsUserOnline(false);
    });
    window?.addEventListener("online", () => {
      setIsUserOnline(true);
    });
  }, []);
  return isUserOnline;
};

export default useUserStatus;

// Cart Single Item , Checkout Page
// Class based comppnent
// Fetch old and new
