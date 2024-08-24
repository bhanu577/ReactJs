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
      <h3 className="restroName">PistaHouse</h3>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="body">
      <div className="bodySearch">
        <h3 className="search-field-item">Search</h3>
      </div>
      <RestaurntCard />
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
