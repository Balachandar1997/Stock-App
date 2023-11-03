
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopGainersAndLosers } from './Fetch';
import {addToWatchlist} from "../reduxstore/Actions/actions"
import React, { useState } from 'react';
import Tooltip from '../Tooltip';
import './Homestyle.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  const topGainersAndLosersdata = useSelector((state) => state.stock.topGainersAndLosers) || {}; // Initialize with an empty object
  const topGainers = topGainersAndLosersdata.top_gainers || [];
console.log("top gainers data", topGainers);
  const [filteredTopGainers, setFilteredTopGainers] = useState(topGainersAndLosersdata.top_gainers || []); // Initialize with an empty array

  const handleSearch = (query) => {
    if (topGainersAndLosersdata.top_gainers) {
      const filteredTopGainers = topGainersAndLosersdata.top_gainers.filter((item) =>
        item.ticker.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredTopGainers(filteredTopGainers);
    }
  };

  const clearSearch = () => {
    if (topGainersAndLosersdata.top_gainers) {
      setFilteredTopGainers(topGainersAndLosersdata.top_gainers);
    }
  };

  const isInWatchlist = (stock) => {
    // Check if the watchlist property is defined and it contains the stock's symbol
    return (
      topGainersAndLosersdata.watchlist &&
      topGainersAndLosersdata.watchlist.some(
        (watchlistStock) => watchlistStock.symbol === stock.symbol
      )
    );
  };

  const handleAddToWatchlist = (stock) => {
    // Dispatch an action to add the stock to the watchlist in the Redux store
    dispatch(addToWatchlist(stock));
    console.log('Stock added to watchlist:', stock);

    setShowTooltip(true);

    // Clear the tooltip after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  useEffect(() => {
    // Fetch top gainers and losers data when the component mounts
    dispatch(fetchTopGainersAndLosers());
  }, [dispatch]);

  return (
  <>
    
    <div className='container'>
      <h1>Top Gainers</h1>
      <Link to="/watchlist">
          <button className='go-to-watchlist-button '>Go to Watchlist</button>
        </Link>
      <div className='search-bar-container'>
      <input
        type="text"
        placeholder="Search Ticker..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      </div>
      <button onClick={() => clearSearch()}>Clear</button>
      {filteredTopGainers.length > 0 ? (
        <ul>
         {filteredTopGainers.map((item) => (
  <li key={item.symbol} className='stock-data'>
    <div className='stock-name'>{item.ticker}</div>:
    <div className='stock-price'>{item.price}</div>
    <button
      className='add-to-watchlist-button'
      onClick={() => handleAddToWatchlist(item)}
    >
      {isInWatchlist(item) ? '✔' : '+'}
      <Tooltip text="Added to your watchlist" show={showTooltip} />

    </button>
  </li>
))}
        </ul>
      ) : (
        <p>No matching results</p>
      )}

    </div>
    </>
  );
};

export default Home;