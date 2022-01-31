import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AiOutlineHeart, AiOutlineGlobal, AiOutlineInstagram, AiOutlinePhone, AiOutlineShop } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";


import './Sellers.css'

function SellerCard({ name, image, address, phone, description, website, instagram }) {

  const [moreOpen, setMoreOpen] = useState(false);

  const handleMoreOpen = () => {
    setMoreOpen(true);
  };

  const handleMoreClose = () => {
      setMoreOpen(false);
  };

  return (
    <div className='sellerCard' key={name}>
        <div className='sellerCardImg'>
            <AiOutlineHeart className='addToFav__icon'/>
            <img src={image} alt="" />
        </div>
        <div className='sellerCardContent'>
          <h3>{name}</h3>
          <div className='sellerCardActions'>
            {website && (
              <a href={website} target="_blank" rel="noreferrer">
                <AiOutlineGlobal className='sellerCardAction__icon' color='#006666'/>
              </a>
            )}

            {instagram && (
              <a href={instagram} target="_blank" rel="noreferrer">
                <AiOutlineInstagram className='sellerCardAction__icon' color='#cd486b'/>
              </a>
              
            )}
              <BiDotsVerticalRounded onClick={handleMoreOpen} className='sellerCardAction__icon' color='#333333'/>

              <Dialog 
                  fullWidth
                  open={moreOpen} 
                  onClose={handleMoreClose}
                  PaperProps={{
                      style: {
                          backgroundColor: '#ffc13b',
                      },
                  }}
                  disableScrollLock={true}
              >
                  <DialogTitle>{name}</DialogTitle>
                  <DialogContent>
                      <div className='sellerCard__dialog'>
                        <p>{description}</p>
                        <a href={`tel:${phone}`} >
                          <AiOutlinePhone size={22}/>
                            {phone}
                        </a>
                        <p>
                          <AiOutlineShop size={22}/>
                          {address}
                        </p>
                      </div>
                  </DialogContent>
                  <DialogActions>
                      <button onClick={handleMoreClose} className='dialog_btns'>Done</button>
                  </DialogActions>
              </Dialog>
          </div>
        </div>
    </div>
  )
}

export default SellerCard;
