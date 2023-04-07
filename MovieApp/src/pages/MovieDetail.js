import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Loader from '../components/Loader';
import {IMAGE_POSTER_URL} from '../config';
import Styles from '../style/styles';
import Icon from 'react-native-vector-icons/Entypo';
import Constants from '../style/constants';
import TrendingPeople from '../components/TrendingPeople';
import TrendingMovie from '../components/TrendingMovie';
import { useSelector, useDispatch } from 'react-redux'
import { getDetails } from '../redux/actions'

const MovieDetail = props => {
  const { detail, loading } = useSelector(state => state.movieReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetails(props.route.params.movieId))
  }, [dispatch]);

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${detail.backdrop_path}`}}
              style={Styles.imageBg}
            />
          </View>
          <Text style={Styles.detailMovieTitle}>{detail.original_title}</Text>
          {detail.homepage ? (
            <View style={Styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(detail.homepage);
                }}>
                <Icon name="link" color={Constants.textColor} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}

          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{detail.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>$ {detail.budget}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{detail.runtime}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{detail.release_date}</Text>
            </View>

            <Text style={Styles.heading}>GENRE</Text>
            <View style={Styles.viewGenre}>
              {detail.genres.map(genre => {
                return (
                  <View style={Styles.genreContainer}>
                    <Text style={Styles.genre}>{genre.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <TrendingPeople
            title="CAST"
            isForPage="details"
            idmovie={`${props.route.params.movieId}`}
          />

          <TrendingMovie
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            idmovie={`${props.route.params.movieId}`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetail;
