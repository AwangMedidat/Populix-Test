import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {GET} from '../services/api';
import Styles from '../styles';
import {IMAGE_POSTER_URL} from '../config';
import Loader from './Loader';

const TrendingPeople = props => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(props.url);
      setPeople(props.isForPage === 'details' ? data.cast : data.results);
      setLoading(false);
    };

    getPeople();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={people}
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
