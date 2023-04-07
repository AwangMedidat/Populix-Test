import {API_KEY, BASE_URL, IMAGE_POSTER_URL} from '../config';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_IMAGES = 'GET_IMAGES';
export const GET_TRENDINGS = 'GET_TRENDINGS';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_PEOPLES = 'GET_PEOPLES';

export const getMovies = id => {
  let response;
  try {
    return async dispatch => {
      if (id) {
        const result = await fetch(
          `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        response = await result.json();
      } else {
        const result = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        response = await result.json();
      }

      if (response) {
        dispatch({
          type: GET_MOVIES,
          payload: response.results,
        });
      } else {
        console.log('Unable to Fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getImages = () => {
  try {
    return async dispatch => {
      const result = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const response = await result.json();

      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
      );

      let backImages = [];
      for (let i = 0; i < 10; i++) {
        backImages = [...backImages, images[i]];
      }

      if (backImages) {
        dispatch({
          type: GET_IMAGES,
          payload: backImages,
        });
      } else {
        console.log('Unable to Fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTrendings = () => {
  try {
    return async dispatch => {
      const result = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const response = await result.json();

      if (response) {
        dispatch({
          type: GET_TRENDINGS,
          payload: response.results,
        });
      } else {
        console.log('Unable to Fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = id => {
  try {
    return async dispatch => {
      const result = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await result.json();

      if (response) {
        dispatch({
          type: GET_DETAILS,
          payload: response,
        });
      } else {
        console.log('Unable to Fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getPeoples = (status, id) => {
  let response;
  try {
    return async dispatch => {
      if (status === 'details') {
        const result = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        response = await result.json();
      } else {
        const result = await fetch(
          `${BASE_URL}/trending/person/week?api_key=${API_KEY}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        response = await result.json();
      }

      if (response) {
        dispatch({
          type: GET_PEOPLES,
          payload: status === 'details' ? response.cast : response.results,
        });
      } else {
        console.log('Unable to Fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
