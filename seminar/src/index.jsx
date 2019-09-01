import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h3>Main Page</h3>
      <Link to="/users">Show list of users</Link>
    </div>
  );
};

export default MainPage;
