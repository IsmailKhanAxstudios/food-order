import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
