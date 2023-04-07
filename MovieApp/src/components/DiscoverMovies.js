import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Constants from '../style/constants';
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, getImages } from '../redux/actions'

const DiscoverMovies = props => {
  const { movies } = useSelector(state => state.movieReducers)
  const { images } = useSelector(state => state.imageReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getImages())
  }, [dispatch]);

  return (
    <View>
      <SliderBox
        images={images}
        dotColor={Constants.secondaryColor}
        onCurrentImagePressed={index =>
          props.navigation.navigate('MovieDetail', {movieId: movies[index].id})
        }
      />
    </View>
  );
};

export default DiscoverMovies;
