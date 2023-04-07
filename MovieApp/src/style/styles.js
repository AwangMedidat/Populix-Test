import {Dimensions, StyleSheet} from 'react-native';
import constants from './constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: constants.baseColor,
    height: deviceHeight,
  },
  trendingPeopleImage: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  trendingPeopleName: {
    width: 60,
    color: constants.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailMovieTitle: {
    fontSize: 28,
    color: constants.textColor,
    textAlign: 'center',
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  overview: {
    color: constants.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  details: {
    color: constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: constants.textColor,
    fontSize: 16,
  },
  viewGenre : {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default Styles;
