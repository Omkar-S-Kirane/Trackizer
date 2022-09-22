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
    marginVertical: 70,
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
  },
  btn1: {
    width: windowWidth - 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: 48,
    backgroundColor: '#FF7966',
    borderRadius: 20,
  },
  btn2: {
    width: windowWidth - 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
  overlay_texture: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
export default styles;
