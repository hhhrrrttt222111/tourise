import React from 'react';

import { BiHotel, BiRestaurant, BiWater, BiShoppingBag, BiSpa } from "react-icons/bi";
import { MdPets } from "react-icons/md";

import './Wiki.css'
import wiki from '../../../assets/svg/Home/wiki.svg'

const wikis = [
  {
    id: 1,
    name: 'Hotels',
    Icon: <BiHotel />
  },
  {
    id: 2,
    name: 'Restaurants',
    Icon: <BiRestaurant />
  },
  {
    id: 3,
    name: 'Beaches',
    Icon: <BiWater />
  },
  {
    id: 4,
    name: 'Shopping Malls',
    Icon: <BiShoppingBag />
  },
  {
    id: 5,
    name: 'Resort & Spa',
    Icon: <BiSpa />
  },
  {
    id: 6,
    name: 'Wildlife & Zoo',
    Icon: <MdPets />
  },
  {
    id: 7,
    name: 'Wildlife & Zoo',
    Icon: <MdPets />
  },

]

function Wiki() {
    return (
      <div className='wiki' id='wiki'>
          <div className='wiki_left'>
            <h1>Search for..</h1>
            <div className='wiki_container'>
              {wikis.map((wiki) => (
                <div className={`${wiki.id % 2 === 0 ? 'wikiCard' : 'wikiCard ml2'}`} key={wiki.id}>
                  <p className='wikiCard_icon'>{wiki.Icon}</p>
                  <h3>{wiki.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className='wiki_right'>
            <img src={wiki} alt="" />
          </div>
      </div>
    )
}

export default Wiki;
