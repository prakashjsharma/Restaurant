import React, { useState } from 'react';
import NavBar from './navBar';
import './style.css';
import MenuAPI from './MenuAPI';
import MenuCard from './MenuCard';
import NavbarCategory from './NavbarCategory';

// Getting unique category from API
const uniquecategoryList = ['All', ... new Set(MenuAPI.map((currElem) => {
  return currElem.category;
})
)
]


const Restaurant = () => {

  // Using Hooks
  const [menuData, setMenuData] = useState(MenuAPI)
  const [UniqueMenuList, setUniqueMenuList] = useState(uniquecategoryList)

  // Filtering data based on category
  const filterData = (category) => {

    if(category === 'All'){
      setMenuData(MenuAPI);
      return;
    }

    const updatedList = MenuAPI.filter((currElem) => {
      return currElem.category == category;
    })

    setMenuData(updatedList);
  }
  return (
    <>
      <NavBar />
      <NavbarCategory filterData={filterData} UniqueMenuList={UniqueMenuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
