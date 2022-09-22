import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1C23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1C1C23',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
    justifyContent: 'space-evenly',
  },
  logo: {
    // marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    // backgroundColor: 'blue',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 25,
    // backgroundColor: 'blue',
  },
  txt: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'inter',
    fontWeight: '400',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -35,
  },
  btn: {
    width: windowWidth - 50,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: 48,
    borderRadius: 20,
    marginBottom: 5,
  },
  btn2: {
    width: windowWidth - 50,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

    height: 48,
    borderRadius: 20,
  },
});
export default styles;
