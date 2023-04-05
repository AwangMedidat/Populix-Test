import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DiscoverMovies from './components/DiscoverMovies';
import Styles from './styles';
import TrendingPeople from './components/TrendingPeople';
import TrendingMovie from './components/TrendingMovie';

const Home = props => {
  return (
    <ScrollView style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation}/>
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovie title="Trending Movies" url="/movie/top_rated" navigation={props.navigation}/>
    </ScrollView>
  );
};

export default Home;
