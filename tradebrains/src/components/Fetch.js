import { fetchTopGainersAndLosersRequest, fetchTopGainersAndLosersSuccess, fetchTopGainersAndLosersFailure } from '../reduxstore/Actions/actions';
import axios from 'axios';

const apiKey = 'TNPU047FVPKLJWDL';

export const fetchTopGainersAndLosers = () => async (dispatch) => {
  dispatch(fetchTopGainersAndLosersRequest());

  try {
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'TOP_GAINERS_LOSERS', 
        apikey: apiKey,
      },
    });
    console.log('API Response:', response.data);

    const data = response.data;
     

    dispatch(fetchTopGainersAndLosersSuccess(data));
  } catch (error) {
    console.error('API Error:', error);

    dispatch(fetchTopGainersAndLosersFailure(error.message));
  }
};