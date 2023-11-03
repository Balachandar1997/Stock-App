import {
    FETCH_TOP_GAINERS_AND_LOSERS_REQUEST,
    FETCH_TOP_GAINERS_AND_LOSERS_SUCCESS,
    FETCH_TOP_GAINERS_AND_LOSERS_FAILURE,
  } from '../Actions/actions';
  
  const initialState = {
    topGainersAndLosers: {
      top_gainers: [],
      top_losers: [],
    },
    watchlist: [],
    loading: false,
    error: null,
    
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TOP_GAINERS_AND_LOSERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_TOP_GAINERS_AND_LOSERS_SUCCESS:
        return {
          ...state,
          topGainersAndLosers: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_TOP_GAINERS_AND_LOSERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case 'ADD_TO_WATCHLIST':
          return {
            ...state,
            watchlist: [...state.watchlist, action.payload],
          };
      default:
        return state;
    }
  };
  
  export default stockReducer;