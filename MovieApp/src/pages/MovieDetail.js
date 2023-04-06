import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {GET} from '../services/api';
import Loader from '../components/Loader';
import {IMAGE_POSTER_URL} from '../config';
import Styles from '../style/styles';
import Icon from 'react-native-vector-icons/Entypo';
import Constants from '../style/constants';
import TrendingPeople from '../components/TrendingPeople';
import TrendingMovie from '../components/TrendingMovie';

const MovieDetail = props => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();

  useEffect(() => {
    const getDetail = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetail(data);
      setLoading(false);
    };

    getDetail();
  }, []);

  const getGenre = () => {
    return detail.genres.map(genre => (
      <View style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

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
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage="details"
          />

          <TrendingMovie
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            url={`/movie/${props.route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetail;
