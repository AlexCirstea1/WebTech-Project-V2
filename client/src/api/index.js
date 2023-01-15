import axios from 'axios';

export const createActivity = async (activity) => {
  const response = await axios.post('/activity', activity);
  return response.data;
}

export const getActivity = async (code) => {
  try {
      const response = await axios.get(`/activities/${code}`);
      console.log(response.data);
      return response.data; 
  } catch (error) {
      console.error(error);
  }
}