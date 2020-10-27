import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipe__buttons">
      <IconButton>
        <ReplayIcon fontSize="large" className="swipe-button__replay" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" className="swipe-button__close" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="large" className="swipe-button__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="large" className="swipe-button__favorite" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" className="swipe-button__flash" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
