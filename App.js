import React from "react";
import ReactDOM from "react-dom/client";
/*
    -> Header
        logo
        Navigation
    ->body
        Search
        Restuarnt Container
        Resturant Card
    -> Footer
        Copyright
        Address
*/
const RestaurntCard = () => {
  return (
    <div className="restroCard">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/84d2a4768e87ed0eb19741f4b9e5b7d4"
        alt="res-logo"
      ></img>
      <h3 className="restroName">PistaHouse</h3>
      <h4>4.3</h4>
      <h4>55-60 mins</h4>
      <h4>North Indian, Chinese, Asian</h4>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="body">
      <div className="bodySearch">Search</div>
      <div className="rest-Container">
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
        <RestaurntCard />
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQFD5AmGuI6efSo6ZhAR2jtbrpeK0ImP2oQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainBody />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
