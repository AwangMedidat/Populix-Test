import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Styles from '../style/styles';
import {POSTER_IMAGE} from '../config';
import Loader from './Loader';
import { useSelector, useDispatch } from 'react-redux'
import { getTrendings } from '../redux/actions'

const TrendingMovie = props => {
  const { loading, trendings } = useSelector(state => state.trendingReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendings(props.id))
  }, [dispatch]);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={trendings}
            horizontal
            renderItem={item => displayMovies(item, props)}
          />
        </View>
      )}
    </View>
  );
};

const displayMovies = ({item}, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('MovieDetail', {movieId: item.id});
      }}
      style={{marginHorizontal: 10}}>
      <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={Styles.posterImage}
      />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};

export default TrendingMovie;
