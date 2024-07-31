import React, { useState } from "react";
import { Tooltip, Grow} from '@mui/material';
import { watchlist } from '../data/data';
import { BarChartOutlined, MoreHoriz, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
          <WatchListItem stock={stock} key={index} />
        )})}
      </ul>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock}) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setshowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setshowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}> {stock.name} </p>
        <div className="itemInfo">
          <span className="percent"> {stock.percent} </span>
          {stock.isdown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price"> {stock.price} </span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  );
};

const WatchListActions = ({uid}) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined className="icon"/></button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><MoreHoriz className="icon"/></button>
        </Tooltip>
      </span>
    </span>
  );

}