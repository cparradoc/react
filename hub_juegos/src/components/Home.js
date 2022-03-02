import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to Upgrade Hub!</h1>

      <Link to="/counter">Go to counter</Link>
    </div>
  );
};