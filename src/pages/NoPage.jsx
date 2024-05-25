import React from 'react'
import { Outlet } from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
      404
      <Outlet/>
    </div>
  );
};

export default NoPage;
