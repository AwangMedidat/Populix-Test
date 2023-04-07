import {ScrollView} from 'react-native';
import React from 'react';
import DiscoverMovies from '../components/DiscoverMovies';
import Styles from '../style/styles';
import TrendingPeople from '../components/TrendingPeople';
import TrendingMovie from '../components/TrendingMovie';

const Home = props => {
  return (
    <ScrollView style={Styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation}/>
      <TrendingPeople title="Trending People" />
      <TrendingMovie title="Trending Movies" navigation={props.navigation}/>
    </ScrollView>
  );
};

export default Home;
