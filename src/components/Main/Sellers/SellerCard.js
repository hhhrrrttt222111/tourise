import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AiOutlineHeart, AiOutlineGlobal, AiOutlineInstagram, AiOutlinePhone, AiOutlineShop } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";


import './Sellers.css'

function SellerCard() {

  const [moreOpen, setMoreOpen] = useState(false);

  const handleMoreOpen = () => {
    setMoreOpen(true);
  };

  const handleMoreClose = () => {
      setMoreOpen(false);
  };

  return (
    <div className='sellerCard'>
        <div className='sellerCardImg'>
            <AiOutlineHeart className='addToFav__icon'/>
            <img src="https://imgmedia.lbb.in/media/2019/02/5c5b3c11bc58666870321792_1549483025273.jpg" alt="" />
        </div>
        <div className='sellerCardContent'>
          <h3>Seller name</h3>
          <div className='sellerCardActions'>
              <AiOutlineGlobal className='sellerCardAction__icon' color='#006666'/>
              <AiOutlineInstagram className='sellerCardAction__icon' color='#cd486b'/>
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
                  <DialogTitle>Seller name</DialogTitle>
                  <DialogContent>
                      <div className='sellerCard__dialog'>
                        <p>Seller description nlah blah bme mhe Only the owner of this repository can see this message.</p>
                        <a href="/" >
                          <AiOutlinePhone size={22}/>
                            1236547890
                        </a>
                        <p>
                          <AiOutlineShop size={22}/>
                          Mountain View, California, United States - 658741
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
