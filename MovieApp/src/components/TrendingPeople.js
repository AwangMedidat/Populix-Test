import React, {useEffect } from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Styles from '../style/styles';
import {IMAGE_POSTER_URL} from '../config';
import Loader from './Loader';
import { useSelector, useDispatch } from 'react-redux'
import { getPeoples } from '../redux/actions'

const TrendingPeople = props => {
  const { loading, peoples } = useSelector(state => state.peopleReducers)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPeoples(props.isForPage, props.idmovie))
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
            data={peoples}
            renderItem={displayPeople}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

const displayPeople = ({item}) => {
  return (
    <View style={Styles.trendingPeopleContainer}>
      <Image
        source={{
          uri: item?.profile_path
            ? `${IMAGE_POSTER_URL}${item.profile_path}`
            : 'https://kerma.widyatama.ac.id/wp-content/uploads/2021/05/blank-profile-picture-973460_1280.png',
        }}
        style={Styles.trendingPeopleImage}
      />
      <Text style={Styles.trendingPeopleName}>{item.name}</Text>
    </View>
  );
};

export default TrendingPeople;
