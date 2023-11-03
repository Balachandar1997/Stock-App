export const FETCH_TOP_GAINERS_AND_LOSERS_REQUEST = 'FETCH_TOP_GAINERS_AND_LOSERS_REQUEST';
export const FETCH_TOP_GAINERS_AND_LOSERS_SUCCESS = 'FETCH_TOP_GAINERS_AND_LOSERS_SUCCESS';
export const FETCH_TOP_GAINERS_AND_LOSERS_FAILURE = 'FETCH_TOP_GAINERS_AND_LOSERS_FAILURE';
export const ADD_TO_WATCHLIST='ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export const fetchTopGainersAndLosersRequest = () => ({
  type: FETCH_TOP_GAINERS_AND_LOSERS_REQUEST,
});

export const fetchTopGainersAndLosersSuccess = (data) => ({
  type: FETCH_TOP_GAINERS_AND_LOSERS_SUCCESS,
  payload: data,
});

export const fetchTopGainersAndLosersFailure = (error) => ({
  type: FETCH_TOP_GAINERS_AND_LOSERS_FAILURE,
  payload: error,
});



export const addToWatchlist = (stock) => {
  return {
    type: 'ADD_TO_WATCHLIST',
    payload: stock,
  };
};

export const removeFromWatchlist = (symbol) => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: symbol,
});

