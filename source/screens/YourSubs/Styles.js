import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0E0E12',
  },
  container: {
    // flex: 1,
    backgroundColor: '#1C1C23',
    borderWidth: 1,
    // marginVertical: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: windowWidth / 20,
  },
  circle: {
    // backgroundColor: 'blue',
    marginHorizontal: 30,
    // marginVertical: 15,
    borderRadius: windowWidth / 2,
    height: windowHeight / 2.7,
    width: windowWidth - 75,
    borderWidth: 1,
    borderColor: 'white'
  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',

    // justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    marginHorizontal: 5,

    borderRadius: 20,
    height: windowHeight / 15,
    width: windowWidth - 50,
  },
  btContainer: {
    // flex: 1,
    flexDirection: 'row',

    // backgroundColor: 'blue',
    marginVertical: 5,
    marginHorizontal: 5,

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // width: windowWidth,
  },
  touchable: {
    backgroundColor: 'rgba(78, 78, 97, 0.2)',
    marginVertical: 5,
    marginHorizontal: 5,
    width: (windowWidth - 40) / 3,
    height: (windowWidth - 20) / 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  tt: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 30,
  },
  touchableText: {
    fontSize: 12,
    fontFamily: 'internet',
    fontWeight: 'bold',
    color: '#83839C',
  },
  line: {
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: 'orange',
    width: '50%',
    borderWidth: 0.4,
    marginBottom: 21,
  },
  touchableOpacity: {
    marginVertical: 2,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'rgba(78, 78, 97, 0.2)',

    width: (windowWidth - 50) / 2.2,
    height: windowHeight / 15 / 1.5,
    borderRadius: 15,
  },
  data: {
    flex: 1,

    marginVertical: 5,
    marginHorizontal: 15,
    // backgroundColor: 'yellow',
    // justifyContent: 'center',
    justifyContent: 'space-between',

    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#353542',
    borderRadius: 16,
    // backgroundColor: 'red',
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,

    width: windowWidth - 50,
  },
  left: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'cyan',
  },
  right: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginHorizontal: 10,
  },
  ico: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
});
export default styles;
