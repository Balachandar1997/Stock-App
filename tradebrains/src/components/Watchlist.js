import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {removeFromWatchlist} from "../reduxstore/Actions/actions"

const Watchlist = () => {
  // Use useSelector to select the watchlist data from the Redux store
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.stock.watchlist);
  console.log("watchlist data",watchlist)

  const handleRemoveFromWatchlist = (symbol) => {
    // Dispatch the action to remove the item from the watchlist
    dispatch(removeFromWatchlist(symbol));
  };

  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((item) => (
          <li key={item.symbol}>
            {item.ticker}: {item.price}
            <button onClick={() => handleRemoveFromWatchlist(item.symbol)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;