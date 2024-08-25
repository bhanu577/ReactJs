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
const RestaurntCard = (props) => {
  const {resData} = props
  return (
    <div className="restroCard">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/84d2a4768e87ed0eb19741f4b9e5b7d4"
        alt="res-logo"
      ></img>
      <h3 className="restroName">{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

const resObj = {
  "info": {
    "id": "150586",
    "name": "Accord International",
    "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
    "locality": "Parasia Road",
    "areaName": "Vishnu Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Continental",
      "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "26828",
    "avgRatingString": "4.3",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 57,
      "lastMileTravel": 14.3,
      "serviceability": "SERVICEABLE",
      "slaString": "55-60 mins",
      "lastMileTravelString": "14.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-25 23:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-6f305ac5-bb3f-49df-b0df-be12a477e128"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/accord-international-parasia-road-vishnu-nagar-chhindwara-150586",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
};
const MainBody = () => {
  return (
    <div className="body">
      <div className="bodySearch">Search</div>
      <div className="rest-Container">
        <RestaurntCard resData ={resObj}/>
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
