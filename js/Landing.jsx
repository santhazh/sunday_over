import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="main">
  <div className="free"> Free shipping and easy returns</div>
  <div className="searching">
    <h1>OVERSTOCK</h1> &nbsp; &nbsp;
    <input className="search" type="text" placeholder="Search" />
    <Link to="/search">Search</Link>
  </div>
  <div className="signup">
  <h1>DISCOVER THE ONE-STOP SHOP THAT WORKS FOR YOU</h1>

<button><Link to="/CreateAcc">create</Link></button>
  <h1>Already a member ? <Link to="/search">Sign in</Link></h1>
</div>
</div>
);

export default Landing;
